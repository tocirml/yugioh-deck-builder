import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList';
import './style.scss';

export const CardListPage = () => {
  return (
    <main className="card-list">
      <h1 className="card-list-title">CARD DATABASE</h1>
      <Link className="card-list-add" to="/card">{`Add a Card +`}</Link>
      <CardList />
    </main>
  );
};
