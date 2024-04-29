import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";

const ShowMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl font-bold my-8">Movie Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div class="flex items-center justify-center ">
          <div class="flex items-center justify-center">
            <table class="w-full shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-b border-gray-300">
                  <th class=" bg-gray-50 py-4 px-6 text-sm text-blue-700">REFERENCE NO.</th>
                  <tr class="bg-white">
                    <td class=" py-4 px-6 text-center text-sm">{movie._id}</td>
                  </tr>
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    LEADING CAST
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">{movie.cast}</td>
                  </tr>
                </tr>
                <tr class="border-b border-gray-300">
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    TITLE
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">{movie.title}</td>
                  </tr>
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    GENRE
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">{movie.genre}</td>
                  </tr>
                </tr>
                <tr class="border-b border-gray-300">
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    RELEASE YEAR
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">{movie.releaseYear}</td>
                  </tr>
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    CREATED AT
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">
                      {new Date(movie.createdAt).toString()}
                    </td>
                  </tr>
                </tr>
                <tr>
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    PRODUCER
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">{movie.producer}</td>
                  </tr>
                  <th scope="col" class="bg-gray-50 py-4 px-6 text-sm text-blue-700">
                    UPDATED AT
                  </th>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-center text-sm">
                      {new Date(movie.updatedAt).toString()}
                    </td>
                  </tr>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

//   return (
//     <div className="p-6">
//       <BackButton />
//       <h1 className="text-3xl font-bold my-8">Movie Details</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">REFERENCE NO:</span>
//             <span>{movie._id}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">TITLE:</span>
//             <span>{movie.title}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">RELEASE YEAR:</span>
//             <span>{movie.releaseYear}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">GENRE:</span>
//             <span>{movie.genre}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">CAST:</span>
//             <span>{movie.cast}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">PRODUCER:</span>
//             <span>{movie.producer}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">CREATED AT:</span>
//             <span>{new Date(movie.createdAt).toString()}</span>
//           </div>
//           <div className="my-4">
//             <span className="text-lg mr-4 text-gray-500">UPDATED AT:</span>
//             <span>{new Date(movie.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default ShowMovie;
