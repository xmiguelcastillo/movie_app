import { useEffect, useState, useRef } from "react";
import { fetchMovies } from "./api/tmdb";
import { getMovieImageUrl } from "./api/tmdb";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  // Ref to the container for scroll detection
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchMoreMovies = () => {
    if (loading) return; // Prevent multiple simultaneous fetches
    setLoading(true);
    fetchMovies(page)
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  // Initial fetch
  useEffect(() => {
    fetchMoreMovies();
  }, []);

  // Handle scroll event
  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    // Check if the user has scrolled to the right end of the container
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      fetchMoreMovies();
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      {/* Horizontal scrollable container */}
      <p className="text-white mb-3">Popular</p>
      <div
        ref={containerRef}
        className="flex space-x-4"
        onScroll={handleScroll}
      >
        {movies.map((movie: any) => (
          <div key={movie.id} className="movie-item min-w-[160px]">
            {/* Display movie image */}
            {movie.poster_path && (
              <img
                src={getMovieImageUrl(movie.poster_path)}
                alt={movie.title}
                className="w-full h-auto "
              />
            )}
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}

export default App;
