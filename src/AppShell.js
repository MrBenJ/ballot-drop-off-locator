import React, { lazy, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

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

const CountyPage = lazy(() => import('./pages/CountyPage/CountyPage'));

const AppShell = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (process.env.REACT_APP_ANALYTICS_UA) {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [history, location]);
  return (
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
  );
};

export default AppShell;
