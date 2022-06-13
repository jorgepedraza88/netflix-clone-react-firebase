import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShows = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="relative inline-block aspect-video w-[250px] cursor-pointer p-2 sm:w-[300px] md:w-[325px] lg:w-[350px]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="block h-auto w-full"
      />
      <div className="absolute top-0 left-0 h-full w-full text-white opacity-0 transition-all hover:bg-neutral-900/80 hover:opacity-100">
        <p className="flex h-full items-center justify-center text-center text-xs font-bold md:text-xl">
          {movie?.title}
        </p>
        <p onClick={saveShows}>
          {like ? (
            <HiHeart className="absolute top-4 right-4 h-8 w-8 text-gray-300" />
          ) : (
            <HiOutlineHeart className="absolute top-4 right-4 h-8 w-8 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
