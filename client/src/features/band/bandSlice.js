import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logoutUser } from "../user/userSlice";
import { getAllBands } from "../seeBands/seeBandsSlice";
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
      const resp = await customFetch.post("/bands", band);
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

export const deleteBand = createAsyncThunk(
  "band/deleteBand",
  async (bandId, thunkAPI) => {
    try {
      const resp = await customFetch.delete(`bands/${bandId}`);
      thunkAPI.dispatch(getAllBands());
      toast.success(resp.data.msg);
      return resp.data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const editBand = createAsyncThunk(
  "band/editBand",
  async ({ bandId, band }, thunkAPI) => {
    try {
      const resp = await customFetch.patch(`/bands/${bandId}`, band);
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
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
    setEditBand: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    extraReducers: {
      [createBand.pending]: (state) => {
        state.isLoading = true;
      },
      [createBand.fulfilled]: (state) => {
        state.isLoading = false;
        toast.success("Band Created");
      },
      [createBand.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
      [deleteBand.fulfilled]: (state, { payload }) => {
        toast.success(payload);
      },
      [deleteBand.rejected]: (state, { payload }) => {
        toast.error(payload);
      },
      [editBand.pending]: (state) => {
        state.isLoading = true;
      },
      [editBand.fulfilled]: (state) => {
        state.isLoading = false;
        toast.success("Band edited");
      },
      [editBand.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
    },
  },
});
export const { handleChange, addMembers, clearValues, setEditBand } =
  bandSlice.actions;
export default bandSlice.reducer;
