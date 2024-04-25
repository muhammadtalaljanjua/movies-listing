import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import moviesRoute from "./routes/moviesRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/movies", moviesRoute);

// app.use(
//   cors({
//     origin: "http://localhost:5555",
//     methods: ["GET, POST, PUT, DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Connection Established.");
});

// Database connectivity
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database is connected.");
    app.listen(PORT, () => {
      console.log("Application is using PORT:", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
