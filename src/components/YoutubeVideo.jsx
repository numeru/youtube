import React from "react";
import styles from "./YoutubeVideo.module.css";

const YoutubeVideo = ({ video, onSelect: onClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.video} ${displayType}`}
      onClick={() => onClick(video)}
    >
      <img
        className={styles.thumbnail}
        src={video.snippet.thumbnails.default.url}
        alt="thumbnail"
      />
      <div className={styles.title}>
        <p className={styles.videoTitle}>{video.snippet.title}</p>
        <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default React.memo(YoutubeVideo);
