import { userReducer } from './userReducer';
import { gameReducer } from './gameReducer';
import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer'
import { scoreReducer } from './scoreReducer'
export const mainReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  card: cardsReducer,
  score: scoreReducer
})
