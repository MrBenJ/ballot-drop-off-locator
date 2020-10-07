import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import AppShell from './AppShell';
import './App.scss';

function App() {
  return (
    <Suspense fallback="Loading...">
      <HashRouter>
        <AppShell />
      </HashRouter>
    </Suspense>
  );
}

export default App;
