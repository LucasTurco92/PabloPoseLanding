import React, { useRef } from "react";
import styles from "./video-container.module.scss";
import { useScrollPosition } from "../commons/scroll-position.jsx";

const VideoContainer = (props) => {
  const { url, title, paragraph, videoWidth, invert } = props;
  const container = invert
    ? `${styles.container} ${styles.invert}`
    : `${styles.container} ${styles.normal}`;
  const ref = useRef();

  useScrollPosition(
    ({ currPos, prevPos }) => {
      let [height, bottom, width, top] = [
        ref.current.getBoundingClientRect().height,
        ref.current.getBoundingClientRect().bottom,
        ref.current.getBoundingClientRect().width,
        ref.current.getBoundingClientRect().top,
      ];

      if (width > 700) {
        let isActionZone = bottom >= height / 2 && bottom <= height;

        prevPos.y < currPos.y && isActionZone ? "" : "";
        prevPos.y > currPos.y && isActionZone ? "" : "";
        console.table({
          y: currPos.y,
          height: height,
          bottom: bottom,
          width: width,
          top: top,
        });
      }
    },
    [],
    null,
    true,
    500
  );
  return (
    <div ref={ref} className={container}>
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
