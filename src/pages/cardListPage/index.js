import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList';
import './style.scss';

export const CardListPage = () => {
  return (
    <div className="card-list">
      CARD LIST
      <Link to="/card" className="card-list-add">
        Add a Card +
      </Link>
      <CardList />
    </div>
  );
};
