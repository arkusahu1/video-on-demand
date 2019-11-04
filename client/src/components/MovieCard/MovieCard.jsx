import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieCard.scss';

/**
 * Its a functional component uded to display the image of the movie.
 */
const MovieCard = ({ data, isFromHistory }) => {
  return (
    <div className={styles.cardMainContainer} data-test-id="cardMainContainer">
      <div className={styles.cardContainer}>
        <Link
          className={styles.cardLink}
          to={`/movieDetails?movieId=${data.id}&fromHistory=${isFromHistory}`}
        >
          <img src={data.images[0].url} alt={data.images[0].type} />
        </Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  isFromHistory: PropTypes.bool,
};

MovieCard.defaultProps = {
  isFromHistory: false,
};

export default MovieCard;
