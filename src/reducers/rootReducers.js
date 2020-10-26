import { combineReducers } from 'redux';
// Actions
import proviers from './providers';

// Used as a single reducer to create the Redux store
export default combineReducers({ proviers });