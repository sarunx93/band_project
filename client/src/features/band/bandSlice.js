import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isEditing: false,
  name: "",
  members: [],
  genreDefault: "Pop",
  genre: ["Rock", "Pop", "Jazz", "Metal", "Funk", "Latin", "Fusion", "Others"],
  subGenre: "",
  editBandId: "",
};

const bandSlice = createSlice({
  name: "band",
  initialState,
});

export default bandSlice.reducer;
