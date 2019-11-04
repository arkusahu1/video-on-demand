import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import { getMovieHistory } from '../../actions/movieHistoryAction';
import styles from './History.scss';

/**
 * History is the class component used to display histoy of previously watched video and having route '/history'
 */
class History extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getMovieHistory();
  }

  render() {
    const { movieHistoryData } = this.props;
    return (
      <div className={styles.historyContainer}>
        {movieHistoryData.length > 0
          ? movieHistoryData.map(item => (
              <MovieCard key={item.id} data={item} isFromHistory /> // eslint-disable-line
            ))
          : 'No record found'}
      </div>
    );
  }
}

History.propTypes = {
  movieHistoryData: PropTypes.objectOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

History.defaultProps = {
  movieHistoryData: [],
};

const mapStateToProps = ({ getHistoryData }) => ({
  movieHistoryData: getHistoryData.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getMovieHistory }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
