import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
const initialState = {
  isLoading: false,
  musicians: [],
  totalMusicians: 0,
  numOfPages: 1,
  page: 1,
  position: "all",
  location: "all",
  positionOptions: [
    "Vocals",
    "Guitar",
    "Bass",
    "Drums/Percussion",
    "Keyboard",
    "Brass",
    "Others",
  ],
};

export const getAllMusicians = createAsyncThunk(
  "musician/getAllMusicians",
  async (_, thunkAPI) => {
    const { page, position, location } = thunkAPI.getState().musician;
    try {
      const resp = await customFetch.get(
        `/musicians?position=${position}&location=${location}&page=${page}`
      );

      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const musicianSlice = createSlice({
  name: "musician",
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    setFilterValue: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
  },
  extraReducers: {
    [getAllMusicians.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllMusicians.fulfilled]: (state, { payload }) => {
      const { musicians, numOfPages, totalMusicians } = payload;

      state.isLoading = false;
      state.musicians = musicians;
      state.numOfPages = numOfPages;
      state.totalMusicians = totalMusicians;
    },
    [getAllMusicians.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { changePage, setFilterValue } = musicianSlice.actions;
export default musicianSlice.reducer;
