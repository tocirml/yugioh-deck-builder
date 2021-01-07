import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/common/Header';
import { HomePage } from './pages/homepage';
import { AboutPage } from './pages/about';
import { PageNotFound } from './pages/pagenotfound';
import { Footer } from './components/common/Footer';

export const App = () => (
  <>
    <Header />
    <main className="main">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
    <Footer />
  </>
);
