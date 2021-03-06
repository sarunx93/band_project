import express from "express";
const app = express();
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
dotenv.config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
});

//routers
import authRouter from "./routes/authRoute.js";
import musiciansRouter from "./routes/musiciansRoute.js";
import bandRouter from "./routes/bandRoute.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(limiter);
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);

app.use(xss());
app.use(mongoSanitize());
app.use(express.static(path.resolve(__dirname, "./client/build")));
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/musicians", musiciansRouter);
app.use("/api/v1/bands", bandRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

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
