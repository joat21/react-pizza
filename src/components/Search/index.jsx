import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setSearchValue } from "../../redux/slices/filterSlice";
import { useRef } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectFilter);
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.search}
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
      </svg>
      <input
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        ref={inputRef}
        type="text"
        placeholder="Найти пиццу"
      />
      {searchValue && (
        <svg
          className={styles.clear}
          onClick={onClickClear}
          version="1.1"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="grid_system" />
          <g id="_icons">
            <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
