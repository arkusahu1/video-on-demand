import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieCategory.scss';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

/**
 * Its a functional component uded to display the list of image card in a carausal.
 */
const MovieCategory = ({ dataItem }) => {
  return (
    <div key={dataItem.id} data-test-id="movieCategoryContainer">
      <h2>{dataItem.title}</h2>
      <Slider {...settings} className={styles.sliderContainer}>
        {dataItem.data &&
          dataItem.data.length > 0 &&
          dataItem.data.map(item => <MovieCard key={item.id} data={item} />)}
      </Slider>
    </div>
  );
};

MovieCategory.propTypes = {
  dataItem: PropTypes.objectOf(PropTypes.object),
};

export default MovieCategory;
