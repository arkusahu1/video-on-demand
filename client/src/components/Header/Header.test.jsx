import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Test suits for Header', () => {
  it('Header: renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('[data-test-id="headerContainer"]')).toHaveLength(1);
  });
});
