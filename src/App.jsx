import { useState, useRef, useCallback } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modal/Modal";
import { useUnsplashSearch } from "./hooks/useUnsplashSearch";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import styles from "./App.module.scss";
import TEXTS from "./constants/texts";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const { images, totalResults, isLoading, error, searchImages } =
    useUnsplashSearch();

  const handleSearch = useCallback(
    (newQuery) => {
      setQuery(newQuery);
      setPage(1);
      searchImages(newQuery, 1);
    },
    [searchImages],
  );

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    searchImages(query, nextPage);
  }, [page, query, searchImages]);

  const sentinelRef = useRef(null);
  const hasMore = images.length < totalResults;

  useInfiniteScroll({
    sentinelRef,
    isLoading,
    hasMore,
    onLoadMore: loadMore,
    rootMargin: "200px",
  });

  const openModal = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className={styles.app}>
      <SearchBar
        onSearch={handleSearch}
        isResults={images.length > 0 || isLoading || error}
        isSearched={!error && !isLoading && query && images.length === 0}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
      {!error && !isLoading && query && images.length === 0 && (
        <div className={styles.noResults}>{TEXTS.noResults}</div>
      )}
      <Gallery images={images} openModal={openModal} isLoading={isLoading} />
      {images.length > 0 && (
        <div ref={sentinelRef} className={styles.sentinel} />
      )}
      <Modal image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default App;
