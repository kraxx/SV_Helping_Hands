import { combineReducers } from 'redux';
import homeApp from './homeApp';
import filterSettings from './filterSettings';

const AppReducer = combineReducers({
  homeApp,
  filterSettings
});

export default AppReducer
