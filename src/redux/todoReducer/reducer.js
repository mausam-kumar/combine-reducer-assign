import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes.js'

const initState = {
    todos:[]
}

export const todoReducer = (state=initState,{type,payload}) => {
    switch (type) {
        case ADD_TODO:{
            return{
                ...state,
                todos:[...state.todos,payload]
            }
        }
        case REMOVE_TODO:{
            return{
                ...state,
                todos:payload.filter((ele) => ele.id !== payload)
            }
        }
        case TOGGLE_TODO:{
            return{
                ...state,
                todos:payload.map((ele) => ele.id === payload?{...ele,status:!ele.status}:ele)
            }
        }
    
        default:
            return state;
    }
}