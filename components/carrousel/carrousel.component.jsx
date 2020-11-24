import React from "react";
import VideoContainer from "../video-container/video-container.component";
import Styles from "./carrousel.module.scss";

const Carrousel = () => {
  const videos = [
    <VideoContainer url="/esperanza.mp4" title="Esperanza" />,
    <VideoContainer url="/caso.mp4" title="O caso Diana Quer" />,
    <VideoContainer url="/secuencia.mp4" title="479" />,
  ];
  return (
    <div className={Styles.container}>
      {videos.map((video) => (
        <div key={video.title}>{video}</div>
      ))}
    </div>
  );
};

export default Carrousel;
