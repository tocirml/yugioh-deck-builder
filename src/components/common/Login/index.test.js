import React from 'react';
import { Login } from './index';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { shallow } from 'enzyme';

describe('rendering', () => {
  it('renders without crashing', () => {
    shallow(<Login mobile={false} />);
  });
});

describe('mobile', () => {
  it('has mobile class if passed', () => {
    render(
      <MemoryRouter>
        <Login mobile={true} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('login')).toHaveClass('mobile');
  });
});

describe('snapshots', () => {
  it('Anvorgesa snapshot', () => {
    const tree = shallow(<Login mobile={false} />);
    expect(tree).toMatchSnapshot();
  });
});
