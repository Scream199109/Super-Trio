
const initialState = { score: 0 }

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ANSWER_PLUS":
      if (action.payload.answer === action.payload.card.answer) {

        return { ...state, score: state.score + action.payload.card.price }
      }

    default:
      return state
  }
}
