import TEXTS from "../constants/texts";

export const fetchUnsplashImages = async (query, page, perPage = 30) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&client_id=${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`,
  );
  if (!response.ok) {
    throw new Error(TEXTS.errorLoading);
  }
  return response.json();
};
