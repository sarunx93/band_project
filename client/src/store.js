import { configureStore } from "@reduxjs/toolkit";
import bandSlice from "./features/band/bandSlice.js";
import userSlice from "./features/user/userSlice.js";
import musicianSlice from "./features/musician/musicianSlice";
import seeBandsSlice from "./features/seeBands/seeBandsSlice.js";
export const store = configureStore({
  reducer: {
    user: userSlice,
    band: bandSlice,
    musician: musicianSlice,
    seeBands: seeBandsSlice,
  },
});
