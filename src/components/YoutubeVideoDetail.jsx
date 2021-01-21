import React from "react";
import styles from "./YoutubeVideoDetail.module.css";
const YoutubeVideoDetail = ({ video }) => {
  return (
    <section className={styles.videoDetail}>
      <iframe
        className={styles.video}
        id="ytplayer"
        type="text/html"
        title="youtube video player"
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default YoutubeVideoDetail;
