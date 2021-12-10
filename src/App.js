import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ReadSearchResult from './pages/ReadSearchResult';
import BrowseDocument from './pages/BrowseDocument';
import ContactLegal from './pages/ContactLegal';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* search page (the result page) */}
          <Route exact path='/' component={Home} />

          {/* results page (the result page) */}
          <Route exact path='/search' component={SearchPage} />

          {/* read results page (the result page) */}
          <Route path='/result' component={ReadSearchResult} />

          {/* browse page (the result page) */}
          <Route exact path='/browse' component={BrowseDocument} />

          {/* help page (the result page) */}
          <Route exact path='/help' component={HelpPage} />

          {/* contact page (the result page) */}
          <Route exact path='/contact-legal' component={ContactLegal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
