

import React from 'react';
import { shallow } from 'enzyme';
import Examples from './';

it('Test example', () => {
  const wrapper = shallow(<Examples />);
  expect(wrapper.is('section')).toBeTruthy();
});
