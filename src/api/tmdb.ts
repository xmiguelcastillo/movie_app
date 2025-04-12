export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface TMDBResponse {
  results: Movie[];
}

export const TMDB_MOVIE_DETAILS = async (): Promise<TMDBResponse | null> => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/`, {
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error("Cannot fetch new movie releases");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;
  }
};
export const TMDB_NEW_RELEASES = async (): Promise<TMDBResponse | null> => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/now_playing`, {
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error("Cannot fetch new movie releases");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;
  }
};



export const TMDB_TOP_RATED = async (): Promise<TMDBResponse | null> => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/top_rated`, {
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error("Cannot fetch top movie rated");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;
  }
};


export const TMDB_POPULAR = async (): Promise<TMDBResponse | null> => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/popular`, {
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error("Cannot fetch top movie rated");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;

  }
};

export const TMDB_UPCOMING = async (): Promise<TMDBResponse | null> => {
  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/upcoming`, {
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error("Cannot fetch top movie rated");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;

  }
};
