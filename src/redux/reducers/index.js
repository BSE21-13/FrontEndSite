import { combineReducers } from 'redux';
// Reducer imports
import searchReducer from './search';
import contactLegalReducer from './contactLegal';

// Combining and exporting the reducers
export default combineReducers({
  search: searchReducer,
  contactLegal: contactLegalReducer,
});
