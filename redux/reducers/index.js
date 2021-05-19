import {combineReducers} from 'redux';

//Import All Reducers
import {Counter_r} from './Counter_Red';

export default combineReducers({
  Countercvalue: Counter_r,
});
