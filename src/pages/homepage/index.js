import React from 'react';
import './style.scss';
import { DeckBuilderButton } from '../../components/DeckBuilderButtom';
import { CardListButton } from '../../components/CardListButton';

export const HomePage = () => (
  <main className="main homepage">
    Home Page
    <DeckBuilderButton />
    <CardListButton />
  </main>
);
