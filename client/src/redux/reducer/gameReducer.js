
const initialState = { game: [] }

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALL_TOPIC':
      return { ...state, game: action.payload }
    default:
      return state
  }
}
