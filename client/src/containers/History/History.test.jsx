import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockData from '../../../mockData/movieList';
import History from './History';

const mockStore = configureStore([]);

describe('History component for state test', () => {
  it('Should have value for movieHistoryData', () => {
    const store = mockStore({
      getHistoryData: { data: mockData.data[0].data },
    });
    const wrapper = shallow(<History store={store} />)
      .childAt(0)
      .dive();
    expect(wrapper.instance().props.movieHistoryData).toHaveLength(2);
  });

  it('Should have empty value for movieHistoryData', () => {
    const store = mockStore({
      getHistoryData: { data: [] },
    });
    const wrapper = shallow(<History store={store} />)
      .childAt(0)
      .dive();
    expect(wrapper.instance().props.movieHistoryData).toHaveLength(0);
  });
});
