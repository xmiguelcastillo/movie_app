import { useEffect, useState } from "react";
import "../../App.css";
import { TMDB_NEW_RELEASES, Movie } from "../../api/tmdb";
import { Link } from "react-router-dom";

function New_Releases() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await TMDB_NEW_RELEASES();
      console.log(data);
      if (data && data.results) {
        setMovies(data.results.slice(0, 10));
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="">
      <p className=" ml-4">New Releases</p>
      <div className="overflow-x-auto p-4 no-scrollbar">
        <div className="flex space-x-4">
          {movies.map((movie) => (
            <div key={movie.id} className="lg:min-w-[150px]  min-w-[100px]">
              <Link to={`/${movie.id}`}>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto shadow"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New_Releases;
