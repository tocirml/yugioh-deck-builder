import React from 'react';
import { Login } from './index';

import { shallow } from 'enzyme';

describe('rendering', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});

describe('snapshots', () => {
  it('Anvorgesa snapshot', () => {
    const tree = shallow(<Login />);
    expect(tree).toMatchSnapshot();
  });
});
