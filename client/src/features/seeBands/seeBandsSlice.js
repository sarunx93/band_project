import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
const iniitalFilterState = {
  search: "",
  genre: "Pop",
  genreOptions: [
    "Rock",
    "Pop",
    "Jazz",
    "Metal",
    "Funk",
    "Latin",
    "Fusion",
    "Others",
  ],
};

const initialState = {
  isLoading: false,
  bands: [],
  numOfPages: 1,
  page: 1,
  ...iniitalFilterState,
};

export const getAllBands = createAsyncThunk(
  "seeBands/getAllbands",
  async (_, thunkAPI) => {
    let url = `/bands/showAllMyBands`;
    try {
      const resp = await customFetch.get(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const seeBandsSlice = createSlice({
  name: "seeBands",
  initialState,
  extraReducers: {
    [getAllBands.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBands.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bands = payload;
    },
    [getAllBands.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default seeBandsSlice.reducer;
