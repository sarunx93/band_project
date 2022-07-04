import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logoutUser } from "../user/userSlice";

const initialState = {
  isLoading: false,
  isEditing: false,
  name: "",
  members: [],

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
  subGenre: "",
  editBandId: "",
};
export const createBand = createAsyncThunk(
  "band/createBand",
  async (band, thunkAPI) => {
    try {
      const resp = await customFetch.post("/bands", band, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! logging out");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const getAllBands = createAsyncThunk(
  "bands/getAllbands",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/bands");

      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const bandSlice = createSlice({
  name: "band",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    addMembers: (state, { payload }) => {
      state.members.push(payload);
    },
    clearValues: () => {
      return initialState;
    },
    extraReducers: {
      [createBand.pending]: (state) => {
        state.isLoading = true;
      },
      [createBand.fulfilled]: (state) => {
        state.isLoading = false;
        toast.success("Band Created");
      },
      [createBand.pending]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
    },
  },
});
export const { handleChange, addMembers, clearValues } = bandSlice.actions;
export default bandSlice.reducer;
