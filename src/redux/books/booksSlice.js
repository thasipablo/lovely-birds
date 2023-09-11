import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = 'cuqdmktbp1cb';
const API_URI = `https://api.ebird.org/v2/data/obs/KZ/recent/${KEY}`;

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (thunkAPI) => {
    try {
      const res = await axios(API_URI);
      const booksData = await res.data;
      const keys = Object.keys(booksData);

      let books = [];

      // build books array from bookStore object
      keys.forEach((key) => {
        books = [...books, { ...booksData[key][0], item_id: key }];
      });

      return books;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error ocurred while trying to fetch books',
      );
    }
  },
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (itemId, thunkAPI) => {
    try {
      const resp = await axios.delete(
        `${API_URI}/${itemId}`,
        {
          itemId,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      return JSON.stringify({ message: resp, itemId });
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error ocurred while trying to remove a book',
      );
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook, thunkAPI) => {
    try {
      const res = await axios.post(API_URI, newBook, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return JSON.stringify({ message: res, book: newBook });
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error ocurred while trying to add a book',
      );
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const response = JSON.parse(action.payload);
      state.books = [...state.books, response.book];
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(removeBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const response = JSON.parse(action.payload);
      state.books = state.books.filter(
        (book) => book.item_id !== response.itemId,
      );
    });
    builder.addCase(removeBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
