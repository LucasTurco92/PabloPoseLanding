import React from 'react';
import styles from './video-container.module.scss';

const VideoContainer = (props) => {
    const { url, title, paragraph, videoWidth } = props;

    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <video width={videoWidth}  src={url} autostart="true" autoPlay="true" loop="loop" muted="true" type="video/mp4">
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

    )
}
export default VideoContainer;