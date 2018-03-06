import { combineReducers } from 'redux';
import homeApp from './homeApp';
import settings from './settings';
import navigationReducer from './navigationReducer';

const AppReducer = combineReducers({
  homeApp,
  navigationReducer,
  settings
});

export default AppReducer
