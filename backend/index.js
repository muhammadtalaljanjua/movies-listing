import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Connection Established.");
});

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
