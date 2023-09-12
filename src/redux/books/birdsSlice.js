import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = 'cuqdmktbp1cb';
const API_URI = 'https://api.ebird.org/v2/data/obs/KZ/recent';

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

export const fetchBirds = createAsyncThunk('books/fetchBooks', async () => {
  const config = {
    method: 'get',
    url: API_URI,
    headers: {
      'X-eBirdApiToken': KEY,
    },
  };
  axios(config)
    .then((response) => {
      // Handle the response here
      console.log('RES:', response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error:', error);
    });
  // try {
  //   const response = await axios.get(API_URI, {
  //     headers: {
  //       'X-eBirdApiToken': KEY,
  //     },
  //   });
  //   console.log('Slice:', response.data.headers['X-eBirdApiToken']);
  //   return response.data.headers['X-eBirdApiToken'];
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(
  //     'An error ocurred while trying to fetch birds',
  //   );
  // }
});

export const birdsSlice = createSlice({
  name: 'birds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBirds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBirds.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBirds.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
