
import { ADD_USER } from "../actionType/userAT"

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}
