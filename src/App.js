import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

const IndexPage = lazy(() => import('./pages/IndexPage/IndexPage'));
const SelectStatePage = lazy(() =>
  import('./pages/SelectStatePage/SelectStatePage')
);
const SelectCountyPage = lazy(() =>
  import('./pages/SelectCountyPage/SelectCountyPage')
);

const ResourcesPage = lazy(() => import('./pages/ResourcesPage/ResourcesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const ContributorsPage = lazy(() =>
  import('./pages/ContributorsPage/ContributorsPage')
);

const CountyPage = lazy(() => import('./pages/CountyPage/CountyPage'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <HashRouter>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <IndexPage />
              </Route>
              <Route path="/resources">
                <ResourcesPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="/contributors">
                <ContributorsPage />
              </Route>
              <Route path="/select-state">
                <SelectStatePage />
              </Route>
              <Route path="/state/:state/:county">
                <CountyPage />
              </Route>
              <Route path="/state/:state">
                <SelectCountyPage />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </Suspense>
  );
}

export default App;
