import React from 'react';
import styles from './video-container.module.scss';

const VideoContainer = (props) => {
    const { url, title, paragraph, videoWidth } = props;

    return (
        <div className={styles.container}>
            <div className={styles.borderContainer}>
                <div className={styles.videoContainer}>
                    <video width={videoWidth} src={url} playsinline autostart autoPlay loop muted type="video/mp4">
                        Tu navegador no implementa el elemento <code>video</code>
                    </video>
                </div>
                <div className={styles.text}>
                    <h1> {title}</h1>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default VideoContainer;