import React from 'react';
import { shallow } from 'enzyme';
import MovieCategory from './MovieCategory';
import mockData from '../../../mockData/movieList';

describe('Test suits for MovieCategory', () => {
  it('MovieCategory: renders correctly', () => {
    const wrapper = shallow(
      <MovieCategory dataItem={{ data: mockData.data[0].data }} />,
    );
    expect(
      wrapper.find('[data-test-id="movieCategoryContainer"]'),
    ).toHaveLength(1);
  });
});
