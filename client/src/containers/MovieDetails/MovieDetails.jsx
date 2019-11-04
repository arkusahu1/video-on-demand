import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'query-string';
import { fetchMoviesDetails } from '../../actions/movieDetailsAction';
import styles from './MovieDetails.scss';
import { generateCategory } from '../../utils/utils';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { setMovieHistory } from '../../actions/movieHistoryAction';

/**
 * MovieDetails is the class component used for movies detaied info. Having route '/movieDetails'
 */
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
    };
  }

  /**
   * Components life cycle hook used to get query param and based on the query param fetch detailed info data of a movie.
   *
   * @override
   */
  componentDidMount() {
    const {
      actions,
      location: { search },
    } = this.props;
    const searchObj = qs.parse(search);
    actions.fetchMoviesDetails(searchObj.movieId);
  }

  /**
   * It is used to updated the watch history and play/close the video
   */
  togglePlay = () => {
    const { showPlayer } = this.state;
    const {
      moviesDetailsData,
      actions,
      location: { search },
    } = this.props;
    const searchObj = qs.parse(search);
    if (!showPlayer && searchObj.fromHistory === 'false') {
      actions.setMovieHistory(moviesDetailsData.id);
    }
    this.setState({ showPlayer: !showPlayer });
  };

  render() {
    const { moviesDetailsData } = this.props;
    const { showPlayer } = this.state;
    return (
      <div
        className={styles.movieDetailsContainer}
        data-test-id="movieDetailsContainer"
      >
        {showPlayer ? (
          <VideoPlayer
            moviesDetailsData={moviesDetailsData}
            togglePlay={this.togglePlay}
          />
        ) : (
          <div className={styles.detailContainer}>
            <div className={styles.infoContainer}>
              <h2 className={styles.title}>{moviesDetailsData.title}</h2>
              <p className={styles.desc}>{moviesDetailsData.description}</p>
              <div className={styles.content}>
                <div className={styles.item}>
                  <div className={styles.itemHeader}>Director</div>
                  <div>
                    {moviesDetailsData.credits &&
                      moviesDetailsData.credits[0].name}
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemHeader}>Category</div>
                  <div>
                    {generateCategory(
                      moviesDetailsData && moviesDetailsData.categories,
                    )}
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemHeader}>Type</div>
                  <div>{moviesDetailsData.type}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemHeader}>Rating</div>
                  <div>
                    {moviesDetailsData.parentalRatings &&
                      moviesDetailsData.parentalRatings[0].rating}
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemHeader}>Scheme</div>
                  <div>
                    {moviesDetailsData.parentalRatings &&
                      moviesDetailsData.parentalRatings[0].scheme}
                  </div>
                </div>
              </div>
              <button
                onClick={this.togglePlay}
                type="button"
                className={styles.watchNowBtn}
              >
                <i
                  className={`${styles.playIcon} fa fa-play`}
                  aria-hidden="true"
                ></i>
                <div className={styles.watchNowLabel}>Watch Now</div>
              </button>
            </div>
            <div className={styles.imgContainer}>
              <img
                src={
                  moviesDetailsData.images && moviesDetailsData.images[0].url
                }
                alt="Movie_Image"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  moviesDetailsData: PropTypes.objectOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  location: PropTypes.objectOf(PropTypes.object),
};

MovieDetails.defaultProps = {
  moviesDetailsData: {},
  location: {},
};

const mapStateToProps = ({ moviesDetailsData }) => ({
  moviesDetailsData: moviesDetailsData.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchMoviesDetails,
      setMovieHistory,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
