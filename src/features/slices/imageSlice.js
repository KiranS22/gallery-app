import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  return response.data;
});
export const searchImagesByKeyword = createAsyncThunk(
  "images/searchImagesByKeyword",
  async (arg) => {
    const searchResponse = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${arg}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    return searchResponse.data;
  }
);
const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
      console.log("PENDING");
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
      // console.log(` fetch Images ation.payload${action.payload}`);
    });

    builder.addCase(fetchImages.rejected, (state) => {
      state.isLoading = true;
      console.log("REJECTED");
    });
    builder.addCase(searchImagesByKeyword.pending, (state) => {
      state.isLoading = true;
      console.log("SEARCH IMAGES PENDING");
    });
    builder.addCase(searchImagesByKeyword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload.results;

      console.log("SEARCH IMAGES FULFILLED");
      console.log(action.payload);
    });

    builder.addCase(searchImagesByKeyword.rejected, (state) => {
      state.isLoading = true;
      console.log("SEARCH IMAGES REJECTED");
    });
  },
});
export const selectImages = (state) => state.images.images;

export const {} = imageSlice.actions;

export default imageSlice.reducer;
