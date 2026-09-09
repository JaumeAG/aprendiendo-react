import { searchMovies } from "../services/movies";
import { useState, useRef, useMemo, useCallback } from "react";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({search}) => {

      if (search === previusSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previusSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }

    }, []);

  const sortedMovies = useMemo(() => {

    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;

  }, [sort, movies])

  return { movies: sortedMovies, loading, errorFetchMovies: error, getMovies };
}