import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
// Persistent storage
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['search', 'contactLegal'], // Only persist the user reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
