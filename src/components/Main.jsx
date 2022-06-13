import { useEffect, useState } from "react";
import { BsFillCaretRightFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // Formula para coger 1 pelicula cada vez que hacemos la llamada
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (string, number) => {
    if (string?.length > number) {
      return string.slice(0, number) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="h-[800px] w-full text-white">
      <div className="h-full w-full">
        <div className="absolute h-[800px] w-full bg-gradient-to-r from-black opacity-95"></div>
        <div className="absolute h-[800px] w-full bg-gradient-to-l from-black via-transparent opacity-95"></div>
        <div className="absolute h-[800px] w-full bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-100"></div>
        <img
          className="h-full w-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[30%] w-full p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-6xl">{movie?.title}</h1>
          <p className="xl:max-w[35%] my-8 w-full text-2xl text-gray-200 md:max-w-[70%] lg:max-w-[50ch]">
            {truncateString(movie?.overview, 180)}
          </p>
          <div className="items-center lg:flex">
            <button className="flex w-auto items-center justify-center gap-1 rounded-sm border border-gray-300 bg-gray-300 py-2 px-6 font-bold text-black transition-opacity hover:opacity-70 lg:text-xl">
              <BsFillCaretRightFill className="h-8 w-8" />
              Play now
            </button>
            <button className="mt-6 flex w-auto items-center justify-center gap-1 rounded-sm bg-gray-600 py-2 px-4 text-xl opacity-90 transition-opacity hover:opacity-70 lg:ml-4 lg:mt-0">
              <FiInfo className="h-8 w-8" /> More information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
