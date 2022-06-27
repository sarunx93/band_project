import mongoose from "mongoose";
const MusicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide musician name"],
  },
});
export default mongoose.model("Musician", MusicianSchema);
