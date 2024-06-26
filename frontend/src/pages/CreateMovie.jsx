import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState("");
  const [producer, setProducer] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddMovie = () => {
    const data = {
      title,
      releaseYear,
      genre,
      cast,
      producer,
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/movies", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Movie Added Successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error Occurred!", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl font-bold my-8">Add Movie</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 rounded-md border-gray-300 w-[600px] p-4 mx-auto">
        <div className="my-2">
          <label className="text-md mr-4 text-blue-700">TITLE</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded px-2 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-md mr-4 text-blue-700">RELEASE YEAR</label>
          <input
            type="number"
            min="2000"
            max="2024"
            value={releaseYear}
            onChange={(event) => setReleaseYear(event.target.value)}
            className="border border-gray-300 rounded px-2 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-md mr-4 text-blue-700">GENRE</label>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            className="border border-gray-300 rounded px-2 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-md mr-4 text-blue-700">LEADING CAST</label>
          <input
            type="text"
            value={cast}
            onChange={(event) => setCast(event.target.value)}
            className="border border-gray-300 rounded px-2 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-md mr-4 text-blue-700">PRODUCER</label>
          <input
            type="text"
            value={producer}
            onChange={(event) => setProducer(event.target.value)}
            className="border border-gray-300 rounded px-2 py-2 w-full"
          />
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAddMovie}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateMovie;
