import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import YoutubeSearch from "./components/YoutubeSearch";
import YoutubeVideoDetail from "./components/YoutubeVideoDetail";
import YoutubeVideoList from "./components/YoutubeVideoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.mostPopular().then((result) => setVideos(result.items));
  }, [youtube]);

  const [inputValue, setInputValue] = useState("");
  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue("");
    setSelectedVideo(null);
    youtube.search(inputValue).then((items) => setVideos(items));
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSelect = (video) => {
    setSelectedVideo(video);
  };

  const clickHome = () => {
    setInputValue("");
    setSelectedVideo(null);
    youtube.mostPopular().then((result) => setVideos(result.items));
  };

  return (
    <div className={styles.main}>
      <YoutubeSearch
        value={inputValue}
        onChange={handleChange}
        onSearch={handleSearch}
        clickHome={clickHome}
      />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <YoutubeVideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <YoutubeVideoList
            videos={videos}
            display={selectedVideo ? "list" : "grid"}
            onSelect={handleSelect}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
