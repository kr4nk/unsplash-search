import { useState, useCallback } from "react";
import { fetchUnsplashImages } from "../api/unsplashFetch";

export const useUnsplashSearch = () => {
  const [images, setImages] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchImages = useCallback(async (query, page) => {
    setIsLoading(true);
    setError("");
    try {
      const data = await fetchUnsplashImages(query, page);
      setImages((prev) =>
        page === 1 ? data.results : [...prev, ...data.results],
      );
      setTotalResults(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { images, totalResults, isLoading, error, searchImages };
};
