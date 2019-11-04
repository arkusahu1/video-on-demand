import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import routesMock from './routes';

describe('Test suits for App', () => {
  it('App: renders correctly', () => {
    const wrapper = shallow(<App route={routesMock} />);
    expect(wrapper.find('[data-test-id="appContainer"]')).toHaveLength(1);
  });
});
