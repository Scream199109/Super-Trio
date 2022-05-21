
const initialState = { score: 0 }

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ANSWER_PLUS":
      return { ...state, score: state.score + action.payload.card.price }


    case "ANSWER_MINUS":
      return { ...state, score: state.score - action.payload.card.price }


    default:
      return state
  }
}
