import mongoose from "mongoose";

const moviesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model("Movies", moviesSchema);
