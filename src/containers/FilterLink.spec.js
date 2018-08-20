// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import FilterLink from './FilterLink';
import { setVisibilityFilter } from '../actions';

const setup = (setupProps = {}) => {
  const store = configureStore()({});
  const wrapper = shallow(<FilterLink filter="SHOW_ALL" store={store}>Show All</FilterLink>);

  return {
    store,
    wrapper
  };
};

describe('FilterLink', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot()
  });

  it('sets the correct filter when clicked', () => {
    const { store, wrapper } = setup();
    expect(store.getActions()).toEqual([]);
    wrapper.find('Link').simulate('click');
    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ALL')]);
  });
});