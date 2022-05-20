
const initialState = { user: [] }

export const userReducer = (state = initialState, action) => {
switch (action.type) {
  case 'ADD_ALL_USERS':
    console.log(action.payload)
    return { ...state, user: action.payload.allUsers }
  default:
    return state
  }
}

