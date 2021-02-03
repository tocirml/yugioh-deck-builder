import React from 'react';
import './style.scss';
import { BigLinkButton } from '../../components/BigLinkButton';

export const HomePage = () => (
  <main className="main homepage">
    <div className="homepage-welcome">{`Welcome to Yugioh Deck Builder`}</div>
    <BigLinkButton
      text={`Card Database`}
      url={`/card-list`}
      img={`card-list`}
    />
    <BigLinkButton
      text={`Deck Builder`}
      url={`/deck-builder`}
      img={`deck-builder`}
    />
  </main>
);
