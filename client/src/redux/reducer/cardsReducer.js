
const initialState = { card: [] }

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALL_CARD':
      return { ...state, card: action.payload }
    default:
      return state
  }
}
