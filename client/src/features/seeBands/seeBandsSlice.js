import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
const iniitalFilterState = {
  search: "",
  genre: "all",
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
  sort: "a-z",
  sortOptions: ["a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  bands: [],
  totalBands: 0,
  numOfPages: 1,
  page: 1,
  ...iniitalFilterState,
};

export const getAllBands = createAsyncThunk(
  "seeBands/getAllbands",
  async (_, thunkAPI) => {
    let url = `/bands?genre=all`;
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
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      //state.page=1
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...iniitalFilterState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getAllBands.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBands.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bands = payload;
      state.numOfPages = payload.numOfPages;
      state.totalBands = payload.totalBands;
    },
    [getAllBands.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { handleChange, clearFilters, changePage } = seeBandsSlice.actions;
export default seeBandsSlice.reducer;
