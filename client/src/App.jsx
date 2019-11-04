import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header/Header';
import './styles.scss';

const App = ({ route }) => {
  return (
    <div data-test-id="appContainer">
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default App;
