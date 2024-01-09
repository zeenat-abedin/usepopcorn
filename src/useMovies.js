import { useState, useEffect } from "react";

export function useMovies(query) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const KEY = "1c1ab797";

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie not found");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   handleCloseMovie();
      fetchMovies();

      return () => controller.abort();
    },
    [query]
  );

  return {
    error,
    loading,
    movies,
  };
}
