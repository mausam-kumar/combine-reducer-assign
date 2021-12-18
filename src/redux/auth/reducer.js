import {LOGIN_STATE} from './actionType.js'

const initState = {
    loginStatus:"false"
}

export const authReducer = (state=initState,{type,payload}) => {
    switch (type) {
        case LOGIN_STATE:
            return{
                ...state,
                loginStatus:payload
            }
    
        default:
            return state;
    }
}