import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">My Favourite Shows</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-90 group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="relative inline-block aspect-video w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[350px]"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
                className="block h-auto w-full"
              />
              <div className="absolute top-0 left-0 h-full w-full text-white opacity-0 transition-all hover:bg-neutral-900/80 hover:opacity-100">
                <p className="flex h-full items-center justify-center text-center text-xs font-bold md:text-xl">
                  {movie?.title}
                </p>
                <p
                  onClick={() => deleteShow(movie.id)}
                  className="absolute top-4 right-4 text-gray-300"
                >
                  <AiOutlineClose className="h-8 w-8" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-90 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
