import mongoose from "mongoose";
const MusicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide musician name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide musicain lastname"],
  },
  position: {
    type: String,
    required: [true, "Please provide your position"],
  },
  location: {
    type: String,
    required: [true, "Please provide your location"],
  },
  image: {
    type: String,
  },
});
export default mongoose.model("Musician", MusicianSchema);
