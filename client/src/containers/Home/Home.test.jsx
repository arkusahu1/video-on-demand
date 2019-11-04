import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from './Home';
import mockData from '../../../mockData/movieList';
import MovieCategory from '../../components/MovieCategory/MovieCategory';

const mockStore = configureStore([]);
const store = mockStore({ moviesData: mockData });

describe('Test suits for Home', () => {
  it('Home: renders correctly', () => {
    const wrapper = shallow(<Home store={store} />)
      .childAt(0)
      .dive();
    expect(wrapper.find(MovieCategory)).toHaveLength(1);
  });
});
