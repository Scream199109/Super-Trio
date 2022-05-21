import { ADD_USER, LOG_OUT, LOG_USER } from "../actionType/userAT"

const initialState = { user: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_ALL_USERS':
      console.log(action.payload)
      return { ...state, user: action.payload.allUsers }

    case ADD_USER:
      return { ...state, user: { id: action.payload.id, email: action.payload.email } }
    case LOG_USER:
      return { ...state, user: { id: action.payload.id, email: action.payload.email } }
    case LOG_OUT:
      return { ...state, user: { id: action.payload.id, email: action.payload.email } }
    default:
      return state
  }
}

