import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import YoutubeService from "./service/YoutubeService";

const youtube = new YoutubeService(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
