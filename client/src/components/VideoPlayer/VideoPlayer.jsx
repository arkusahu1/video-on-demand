import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoPlayer.scss';

/**
 * Its a functional component uded as a video player.
 */
const VideoPlayer = ({ moviesDetailsData, togglePlay }) => {
  return (
    <div
      className={styles.videoPlayerContainer}
      data-test-id="videoPlayerContainer"
    >
      <button className={styles.crossBtn} type="button" onClick={togglePlay}>
        <i className={`fa fa-times ${styles.crossIcon}`} />
      </button>
      <video className={styles.videoContainer} autoPlay controls>
        <source
          src={moviesDetailsData.contents && moviesDetailsData.contents[0].url}
          type={`video/${moviesDetailsData.contents[0].format &&
            moviesDetailsData.contents[0].format}`}
        />
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  moviesDetailsData: PropTypes.objectOf(PropTypes.object),
  togglePlay: PropTypes.func.isRequired,
};

export default VideoPlayer;
