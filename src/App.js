import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

const IndexPage = lazy(() => import('./pages/IndexPage/IndexPage'));
const SelectStatePage = lazy(() =>
  import('./pages/SelectStatePage/SelectStatePage')
);
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
              <Route path="/select-state">
                <SelectStatePage />
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
