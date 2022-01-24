import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import returnStoreAndPersistor from './redux/store';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ReadSearchResult from './pages/ReadSearchResult';
import BrowseDocument from './pages/BrowseDocument';
import ContactLegal from './pages/ContactLegal';
import HelpPage from './pages/HelpPage';

const { store, persistor } = returnStoreAndPersistor();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App'>
          <Router>
            <Switch>
              {/* results page (the result page) */}
              <Route exact path='/search' component={SearchPage} />

              {/* read results page (the result page) */}
              <Route path='/result/:id' component={ReadSearchResult} />

              {/* browse page (the result page) */}
              <Route exact path='/browse' component={BrowseDocument} />

              {/* help page (the result page) */}
              <Route exact path='/help' component={HelpPage} />

              {/* contact page (the result page) */}
              {/* <Route exact path='/contact-legal' component={ContactLegal} /> */}

              {/* search page (the result page) */}
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export const reduxStore = store;

export default App;
