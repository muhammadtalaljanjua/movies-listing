import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Movie } from "./models/movieModel.js";

const app = express();
app.use(express.json());

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

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Connection Established.");
});

// Adding new record into the database
app.post("/movies", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.genre ||
      !request.body.releaseYear ||
      !request.body.cast ||
      !request.body.producer
    ) {
      return response.status(400).send({ message: "Fill in all the required fields" });
    }

    const newMovie = {
      title: request.body.title,
      genre: request.body.genre,
      releaseYear: request.body.releaseYear,
      cast: request.body.cast,
      producer: request.body.producer,
    };

    const movie = await Movie.create(newMovie);
    return response.status(201).send(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Reading all records from the database
app.get("/movies", async (request, response) => {
  try {
    const movies = await Movie.find({});
    return response.status(200).json({
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Reading a single record from the database using ID
app.get("/movies/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const movie = await Movie.findById(id);

    return response.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Updating a single record from the database using ID
app.put("/movies/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.genre ||
      !request.body.releaseYear ||
      !request.body.cast ||
      !request.body.producer
    ) {
      return response.status(400).send({ message: "Fill in all the required fields" });
    }

    const { id } = request.params;
    const result = await Movie.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Movie Not Found." });
    }

    return response.status(200).send({ message: "Movie Updated Successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Deleting a record from the database using ID
app.delete("/movies/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Movie.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Movie Not Found." });
    }

    return response.status(200).send({ message: "Movie Updated Successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
