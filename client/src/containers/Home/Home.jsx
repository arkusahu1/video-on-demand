import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions/moviesAction';
import styles from './Home.scss';
import MovieCategory from '../../components/MovieCategory/MovieCategory';

/**
 * Home is the class component used as home page and used to dispay movies based on category. Having route '/'
 */
class Home extends Component {
  /**
   * Components life cycle hook used to fetch list of movies.
   *
   * @override
   */
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchMovies();
  }

  render() {
    const { movieListData } = this.props;
    return (
      <div className={styles.homeContainer}>
        {movieListData.map(dataItem => (
          <MovieCategory key={dataItem.id} dataItem={dataItem} />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  movieListData: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

Home.defaultProps = {
  movieListData: [],
};

const mapStateToProps = ({ moviesData }) => ({
  movieListData: moviesData.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchMovies }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
