import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { HomePage } from './pages/homepage';
import { CardListPage } from './pages/cardListPage';
import { ManageCardPage } from './pages/manageCardPage';
import { DeckBuilderPage } from './pages/deckBuilderPage';
import { ManageDeckPage } from './pages/manageDeckPage';
import { AboutPage } from './pages/about';
import { PageNotFound } from './pages/pagenotfound';
import { Footer } from './components/common/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/card-list" component={CardListPage} />
      <Route path="/card/:slug" component={ManageCardPage} />
      <Route path="/card" component={ManageCardPage} />
      {/* <Route path="/card-view/:slug" component={CardViewPage} /> */}
      <Route path="/deck-builder" component={DeckBuilderPage} />
      <Route path="/deck/:id" component={ManageDeckPage} />
      <Route path="/deck" component={ManageDeckPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} status={404} />
    </Switch>
    <Footer />
    <ToastContainer autoClose={3000} hideProgressBar />
  </>
);
