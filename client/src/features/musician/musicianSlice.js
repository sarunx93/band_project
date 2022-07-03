import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
const initialState = {
  isLoading: false,
  musicians: [],
};

export const getAllMusicians = createAsyncThunk(
  "musician/getAllMusicians",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get(
        "/musicians?position=all&location=all"
      );
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const musicianSlice = createSlice({
  name: "musician",
  initialState,
  extraReducers: {
    [getAllMusicians.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllMusicians.fulfilled]: (state, { payload }) => {
      const { musicians } = payload;

      state.isLoading = false;
      state.musicians = musicians;
    },
    [getAllMusicians.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default musicianSlice.reducer;
