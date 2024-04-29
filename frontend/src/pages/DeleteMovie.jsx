import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const DeleteMovie = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteMovie = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/movies/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl font-bold my-8">Delete Movie</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 items-center rounded-md border-gray-300 w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this movie?</h3>
        <button
          className="p-4 bg-red-600 hover:bg-red-700 text-white m-8 w-full text-lg"
          onClick={handleDeleteMovie}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteMovie;
