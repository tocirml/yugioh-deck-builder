import React from 'react';
import { Header } from './index';
import { NavLink, MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { shallow } from 'enzyme';

describe('rendering', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders 1 NavLink', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(NavLink).length).toBe(1);
  });
});

describe('mobile navbar', () => {
  //I have no idea how this is working
  it('toggles mobile menu correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navbar')).not.toHaveClass('mobile');
    expect(screen.getByTestId('login')).not.toHaveClass('mobile');

    userEvent.click(screen.getByTestId('anvorgesa'));

    expect(screen.getByTestId('navbar')).toHaveClass('mobile');
    expect(screen.getByTestId('login')).toHaveClass('mobile');

    userEvent.click(screen.getByTestId('anvorgesa'));

    expect(screen.getByTestId('navbar')).not.toHaveClass('mobile');
    expect(screen.getByTestId('login')).not.toHaveClass('mobile');
  });
});

describe('correct links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const homeLink = screen.getByText('DECK BUILDER').closest('a');

  it('Home has correct href', () => {
    expect(homeLink).toHaveAttribute('href', '/');
  });
});

describe('snapshots', () => {
  it('Header snapshot', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
