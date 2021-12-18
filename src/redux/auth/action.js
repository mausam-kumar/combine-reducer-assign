import { LOGIN_STATE } from "./actionType.js"

export const authState = (payload) => {
    return{
        type:LOGIN_STATE,
        payload: payload
    }
}

