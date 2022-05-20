import { userReducer } from './userReducer';
import { gameReducer } from './gameReducer';
import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer'
export const mainReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  card: cardsReducer
})
