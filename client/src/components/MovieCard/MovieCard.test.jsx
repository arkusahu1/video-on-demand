import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('Test suits for MovieCard', () => {
  it('MovieCard: renders correctly', () => {
    const props = {
      data: {
        id: 'Test id',
        images: [
          {
            url: 'Test url',
            type: 'Test type',
          },
        ],
      },
    };
    const wrapper = shallow(<MovieCard {...props} />);
    expect(wrapper.find('[data-test-id="cardMainContainer"]')).toHaveLength(1);
  });
});
