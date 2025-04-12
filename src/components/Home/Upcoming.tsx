import { useEffect, useState } from "react";
import "../../App.css";
import { TMDB_UPCOMING, Movie } from "../../api/tmdb";
import { Link } from "react-router-dom";

function Upcoming() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await TMDB_UPCOMING();
      console.log(data);
      if (data && data.results) {
        setMovies(data.results.slice(5, 19));
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="">
      <p className="-my-1 ml-4">Upcoming</p>
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

export default Upcoming;
