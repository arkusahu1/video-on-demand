import React from 'react';
import { shallow } from 'enzyme';
import VideoPlayer from './VideoPlayer';
import mockData from '../../../mockData/movieList';

describe('Test suits for VideoPlayer', () => {
  it('VideoPlayer: renders correctly', () => {
    const wrapper = shallow(
      <VideoPlayer moviesDetailsData={mockData.data[0].data[0]} />,
    );
    expect(wrapper.find('[data-test-id="videoPlayerContainer"]')).toHaveLength(
      1,
    );
  });
});
