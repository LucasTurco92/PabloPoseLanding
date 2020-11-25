import React from "react";
import styles from "./video-container.module.scss";

const VideoContainer = (props) => {
  const { url, title, paragraph, videoWidth, invert } = props;
  const container = invert
    ? `${styles.container} ${styles.invert}`
    : `${styles.container} ${styles.normal}`;

  return (
    <div className={container}>
      <div className={styles.videoContainer}>
        <video
          width={videoWidth}
          src={url}
          playsInline={true}
          autostart={"true"}
          autoPlay={true}
          loop={true}
          muted={true}
          type="video/mp4"
        >
          Tu navegador no implementa el elemento <code>video</code>
        </video>
      </div>
      <div className={styles.textMobile}>

        <h2>{title}</h2>
      </div>

    </div>
  );
};
export default VideoContainer;
