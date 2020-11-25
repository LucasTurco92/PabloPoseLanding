import React from "react";
import VideoContainer from "../video-container/video-container.component";
import Styles from "./carrousel.module.scss";

const Carrousel = () => {
  const videos = [
    <VideoContainer url="/esperanza.mp4" title="Esperanza" key={1}/>,
    <VideoContainer url="/caso.mp4" title="O caso Diana Quer" key={2}/>,
    <VideoContainer url="/secuencia.mp4" title="479" key={3}/>,
  ];
  return (
    <div className={Styles.container}>
      {videos.map((video) => (
        <div className={Styles.carrouselItem} key={video.key}>{video}</div>
      ))}      
    </div>
  );
};

export default Carrousel;
