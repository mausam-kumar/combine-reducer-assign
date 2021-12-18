import { createStore,combineReducers } from "redux";
import { authReducer } from "./auth/reducer.js";
import {todoReducer} from './todoReducer/reducer.js'

export const store = createStore(combineReducers({authReducer,todoReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())