import { useState } from "react";
import styles from "./SearchBar.module.scss";
import TEXTS from "../../constants/texts";

function SearchBar({ onSearch, isResults, isSearched }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };
  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div
      className={`${styles.searchBar} ${isResults || isSearched ? styles.fixed : ""}`}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <svg className={styles.searchIcon} viewBox="0 0 20 19">
          <path
            fill="#C4C4C4"
            d="M.297 6.938a6.365 6.365 0 0 0 6.36 6.359c1.304 0 2.5-.399 3.5-1.078l3.593 3.594c.219.226.523.328.828.328.664 0 1.14-.5 1.14-1.149 0-.312-.109-.601-.32-.82l-3.57-3.578a6.216 6.216 0 0 0 1.188-3.656 6.365 6.365 0 0 0-6.36-6.36 6.365 6.365 0 0 0-6.36 6.36Zm1.656 0a4.703 4.703 0 1 1 9.406-.001 4.703 4.703 0 0 1-9.406 0Z"
          />
        </svg>
        <input
          type="text"
          placeholder={TEXTS.searchPlaceholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`${styles.input} ${inputValue && styles.filledInput}`}
        />
        {inputValue && (
          <span className={styles.clearIcon} onClick={clearInput}>
            <svg viewBox="0 0 20 19">
              <path
                fill="#C4C4C4"
                d="M8.469 16.43c4.414 0 8.07-3.649 8.07-8.07 0-4.415-3.656-8.07-8.078-8.07C4.047.29.398 3.944.398 8.36c0 4.421 3.657 8.07 8.07 8.07Zm-2.563-4.758a.732.732 0 0 1-.734-.75c0-.188.078-.367.219-.508L7.43 8.367 5.39 6.328a.722.722 0 0 1-.218-.516c0-.414.32-.726.734-.726.211 0 .375.07.516.21l2.047 2.04 2.062-2.047a.697.697 0 0 1 .524-.219c.406 0 .726.32.726.735a.695.695 0 0 1-.21.515L9.522 8.367l2.04 2.04a.739.739 0 0 1-.523 1.266.718.718 0 0 1-.532-.22l-2.04-2.039-2.023 2.04a.762.762 0 0 1-.539.218Z"
              />
            </svg>
          </span>
        )}
        <button
          type="submit"
          className={styles.button}
          aria-label={TEXTS.searchButton}
          disabled={!inputValue}
        >
          {TEXTS.searchButton}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
