import { useParams } from "react-router-dom";
import "../App.css";
import { TMDB_MOVIE_DETAILS } from "../api/tmdb.ts";

function Movie() {
  const { id } = useParams();

  return (
    <div className="overflow-x-auto p-4 text-white">
      <h1 className="text-xl font-bold">Movie ID: {id}</h1>
      {/* You could fetch movie details here using the ID */}
    </div>
  );
}

export default Movie;
