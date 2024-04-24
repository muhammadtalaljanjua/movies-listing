import express from "express";
import { PORT } from "./config.js";

const app = express();

app.listen(PORT, () => {
  console.log("Application is using PORT: ", PORT);
});

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Connection Established");
});
