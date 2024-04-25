import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/movies")
      .then((response) => {
        setMovies(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center overflow-x-auto">
        <h1 className="text-3xl font-bold my-8">Movies List</h1>
        <Link to="/movies/create">
          {/* <MdOutlineAddBox className="text-sky-800 text-4xl" /> */}
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add New Movie
          </button>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div class="my-2 py-2 overflow-x-auto">
          <div class="align-middle inline-block min-w-full overflow-hidden bg-white">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-center leading-4 text-blue-700 tracking-wider">
                    #
                  </th>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-700 tracking-wider">
                    MOVIE NAME
                  </th>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-700 tracking-wider">
                    RELEASE YEAR
                  </th>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-700 tracking-wider">
                    GENRE
                  </th>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-700 tracking-wider">
                    LEADING CAST
                  </th>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-700 tracking-wider">
                    PRODUCER
                  </th>
                  <th class="px-3 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-700 tracking-wider">
                    OPERATIONS
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {movies.map((movie, index) => (
                  <tr>
                    <td class="px-3 py-3 text-center whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {index + 1}
                    </td>
                    <td class="px-3 py-3 text-left whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {movie.title}
                    </td>
                    <td class="px-3 py-3 text-center whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {movie.releaseYear}
                    </td>
                    <td class="px-3 py-3 text-center whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {movie.genre}
                    </td>
                    <td class="px-3 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {movie.cast}
                    </td>
                    <td class="px-3 py-3 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {movie.producer}
                    </td>
                    {/* <td className="border border-slate-700 rounded-md text-center"> */}
                    <td class="px-3 py-3 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/movies/details/${movie._id}`}>
                          <BsInfoCircle className="text-xl text-green-600" />
                        </Link>
                        <Link to={`/movies/edit/${movie._id}`}>
                          <AiOutlineEdit className="text-xl text-yellow-600" />
                        </Link>
                        <Link to={`/movies/delete/${movie._id}`}>
                          <MdOutlineDelete className="text-xl text-red-600" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

// return (
//   <div className="p-4">
//     <div className="flex justify-between items-center">
//       <h1 className="text-3xl my-8">Movies List</h1>
//       <Link to="/movies/create">
//         <MdOutlineAddBox className="text-sky-800 text-4xl" />
//       </Link>
//     </div>
//     {loading ? (
//       <Spinner />
//     ) : (
//       <table className="w-full border-separate border-spacing-2">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 rounded-md">No.</th>
//             <th className="border border-slate-600 rounded-md">Title</th>
//             <th className="border border-slate-600 rounded-md">Genre</th>
//             <th className="border border-slate-600 rounded-md">Release Year</th>
//             <th className="border border-slate-600 rounded-md">Cast</th>
//             <th className="border border-slate-600 rounded-md">Producer</th>
//             <th className="border border-slate-600 rounded-md">Operations</th>
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie, index) => (
//             <tr key={movie._id} className="h-8">
//               <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
//               <td className="border border-slate-700 rounded-md pl-2 text-left">{movie.title}</td>
//               <td className="border border-slate-700 rounded-md text-center">{movie.genre}</td>
//               <td className="border border-slate-700 rounded-md text-center">
//                 {movie.releaseYear}
//               </td>
//               <td className="border border-slate-700 rounded-md pl-2 text-left">{movie.cast}</td>
//               <td className="border border-slate-700 rounded-md text-center">{movie.producer}</td>
//               <td className="border border-slate-700 rounded-md text-center">
//                 <div className="flex justify-center gap-x-4">
//                   <Link to={`/movies/details/${movie._id}`}>
//                     <BsInfoCircle className="text-2xl text-green-800" />
//                   </Link>
//                   <Link to={`/movies/edit/${movie._id}`}>
//                     <AiOutlineEdit className="text-2xl text-yellow-600" />
//                   </Link>
//                   <Link to={`/movies/delete/${movie._id}`}>
//                     <MdOutlineDelete className="text-2xl text-red-600" />
//                   </Link>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     )}
//   </div>
// );

export default Home;
