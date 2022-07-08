import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import Musician from "./models/Musician.js";
import musicianData from "./assets/musician_data.json";
console.log(musicianData);
dotenv.config();
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Musician.deleteMany();
    await Musician.create(musicianData);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
