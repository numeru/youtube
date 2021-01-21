import React from "react";
import styles from "./YoutubeSearch.module.css";
const YoutubeSearch = ({ value, onChange, onSearch: onSubmit, clickHome }) => {
  return (
    <header className={styles.searchHeader}>
      <img
        src="/images/logo.png"
        alt="logo"
        className={styles.logo}
        onClick={clickHome}
      />
      <h1 className={styles.title} onClick={clickHome}>
        Youtube
      </h1>
      <form className={styles.searchBar} onSubmit={onSubmit}>
        <input className={styles.input} value={value} onChange={onChange} />
        <button className={styles.searchBtn} type="submit">
          <img src="/images/search.png" alt="search" />
        </button>
      </form>
    </header>
  );
};

export default React.memo(YoutubeSearch);
