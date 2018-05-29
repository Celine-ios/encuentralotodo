import React from 'react';
import HomeLogin from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<HomeLogin />).toJSON();
  expect(rendered).toBeTruthy();
});
