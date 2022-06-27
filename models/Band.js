import mongoose from "mongoose";
const BandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a band name"],
  },
  members: {},
  genre: {
    type: "String",
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
    type: "String",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});
export default mongoose.model("Band", BandSchema);
