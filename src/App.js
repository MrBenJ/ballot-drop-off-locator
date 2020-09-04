import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* HEADER */}
        <main>
          <Switch></Switch>
        </main>
        {/* FOOTER */}
      </div>
    </HashRouter>
  );
}

export default App;
