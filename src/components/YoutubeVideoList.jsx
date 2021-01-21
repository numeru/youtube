import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import styles from "./YoutubeVideoList.module.css";

const YoutubeVideoList = ({ videos, onSelect, display }) => {
  return (
    <ul className={styles.videoList}>
      {videos.map((video) => (
        <YoutubeVideo
          key={video.id}
          video={video}
          display={display}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default React.memo(YoutubeVideoList);
