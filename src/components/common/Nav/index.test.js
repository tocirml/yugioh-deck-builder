import React from 'react';
import { Nav } from './index';
import { NavLink, MemoryRouter } from 'react-router-dom';

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
    shallow(<Nav mobile={false} />);
  });

  it('renders 4 NavLink', () => {
    const wrapper = shallow(<Nav mobile={false} />);
    expect(wrapper.find(NavLink).length).toEqual(4);
  });

  it('renders links text correctly', () => {
    render(
      <MemoryRouter>
        <Nav mobile={false} />
      </MemoryRouter>
    );

    // screen.debug(screen.getByText(links.HomeLinkText));

    screen.getByText(links.HomeLinkText);
    screen.getByText(links.CardListLinkText);
    screen.getByText(links.DeckBuilderLinkText);
    screen.getByText(links.AboutLinkText);
  });
});

describe('mobile', () => {
  it('has mobile class if passed', () => {
    render(
      <MemoryRouter>
        <Nav mobile={true} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navbar')).toHaveClass('mobile');
  });
});

describe('correct links', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Nav mobile={false} />
    </MemoryRouter>
  );

  const homeLink = getByText(links.HomeLinkText);
  const cardListLink = getByText(links.CardListLinkText);
  const deckBuilderLink = getByText(links.DeckBuilderLinkText);
  const aboutLink = getByText(links.AboutLinkText);

  it('Home has correct href', () => {
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('Card List has correct href', () => {
    expect(cardListLink).toHaveAttribute('href', '/card-list');
  });

  it('Deck Builder has correct href', () => {
    expect(deckBuilderLink).toHaveAttribute('href', '/deck-builder');
  });

  it('About has correct href', () => {
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});

describe('snapshots', () => {
  it('Nav snapshot', () => {
    const tree = shallow(<Nav mobile={false} />);
    expect(tree).toMatchSnapshot();
  });
});
