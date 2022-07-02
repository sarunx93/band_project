import mongoose from "mongoose";

const MemInBandSchema = mongoose.Schema({
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
  musicianId: {
    type: mongoose.Schema.ObjectId,
    ref: "Musician",
    required: true,
  },
});

const BandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a band name"],
  },
  members: [MemInBandSchema],
  genre: {
    type: String,
    enum: [
      "Rock",
      "Pop",
      "Jazz",
      "Metal",
      "Funk",
      "Latin",
      "Fusiion",
      "Others",
    ],
    default: "Pop",
  },
  subGenre: {
    type: String,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});
export default mongoose.model("Band", BandSchema);
