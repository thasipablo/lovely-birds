import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const token = 'cuqdmktbp1cb';
const url = 'https://api.ebird.org/v2/data/obs/KZ/recent';

const initialState = {
  birds: [],
  isLoading: false,
  error: '',
};

export const fetchBirds = createAsyncThunk(
  'books/fetchBooks',
  async (thunkAPI) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-eBirdApiToken': token,
        },
      });
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error ocurred while trying to fetch birds',
      );
    }
  },
);

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
      state.birds = action.payload;
    });
    builder.addCase(fetchBirds.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
