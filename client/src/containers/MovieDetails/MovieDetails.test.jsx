import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import MovieDetails from './MovieDetails';
import mockData from '../../../mockData/movieList';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const mockStore = configureStore([]);
const store = mockStore({
  moviesDetailsData: { data: mockData.data[0].data[0] },
});

describe('Test suits for MovieDetails', () => {
  it('MovieDetails: renders correctly', () => {
    const wrapper = shallow(<MovieDetails store={store} />)
      .childAt(0)
      .dive();
    expect(wrapper.find('[data-test-id="movieDetailsContainer"]')).toHaveLength(
      1,
    );
  });

  it('Test for togglePlay call', () => {
    const wrapper = shallow(<MovieDetails store={store} />)
      .childAt(0)
      .dive();
    wrapper.instance().props = {
      location: {
        search: '?movieId=testid&fromHistory=false',
      },
      actions: {
        setMovieHistory: jest.fn(),
      },
      moviesDetailsData: { data: mockData.data[0].data[0] }
    }
    wrapper.instance().togglePlay();
    expect(wrapper.find(VideoPlayer)).toHaveLength(1);
  });

  it('Test else case in togglePlay function', () => {
    const wrapper = shallow(<MovieDetails store={store} />)
      .childAt(0)
      .dive();
    wrapper.instance().setState({ showPlayer: true });
    wrapper.instance().togglePlay();
    expect(wrapper.find(VideoPlayer)).toHaveLength(0);
  });
});
