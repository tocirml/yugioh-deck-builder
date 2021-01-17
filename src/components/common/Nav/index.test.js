import React from 'react';
import { Nav } from './index';
import { NavLink, MemoryRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';

const links = {
  HomeLinkText: 'Home',
  CardListLinkText: 'Card List',
  DeckBuilderLinkText: 'Deck Builder',
  AboutLinkText: 'About',
};

describe('rendering', () => {
  it('renders without crashing', () => {
    shallow(<Nav />);
  });

  it('renders 4 NavLink', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(NavLink).length).toEqual(4);
  });

  it('renders links text correctly', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // screen.debug(screen.getByText(links.HomeLinkText));

    screen.getByText(links.HomeLinkText);
    screen.getByText(links.CardListLinkText);
    screen.getByText(links.DeckBuilderLinkText);
    screen.getByText(links.AboutLinkText);
  });
});

describe('correct links', () => {
  it('Home has correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(getByText(links.HomeLinkText)).toHaveAttribute('href', '/');
  });

  it('Card List has correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(getByText(links.CardListLinkText)).toHaveAttribute(
      'href',
      '/card-list'
    );
  });

  it('Deck Builder has correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(getByText(links.DeckBuilderLinkText)).toHaveAttribute(
      'href',
      '/deck-builder'
    );
  });

  it('About has correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(getByText(links.AboutLinkText)).toHaveAttribute('href', '/about');
  });
});

describe('snapshots', () => {
  it('Nav snapshot', () => {
    const tree = shallow(<Nav />);
    expect(tree).toMatchSnapshot();
  });
});
