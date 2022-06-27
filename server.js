import express from "express";
const app = express();
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";
dotenv.config();
app.use(express.json());
//routers
import authRouter from "./routes/authRoute.js";
import musiciansRouter from "./routes/musiciansRoute.js";
import bandRouter from "./routes/bandRoute.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/musicians", authenticateUser, musiciansRouter);
app.use("/api/v1/bands", bandRouter);

//middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
