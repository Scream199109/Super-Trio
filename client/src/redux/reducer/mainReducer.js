import {userReducer} from './userReducer';
import {gameReducer} from './gameReducer';
import { combineReducers } from 'redux';

export const mainReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
})
