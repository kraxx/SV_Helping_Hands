import { combineReducers } from 'redux';
import homeApp from './homeApp';
import categoryFilter from './categoryFilter';
import searchFilter from './searchFilter';

const AppReducer = combineReducers({
  homeApp,
  categoryFilter,
  searchFilter
});

export default AppReducer
