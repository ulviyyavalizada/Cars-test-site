import {combineReducers} from "redux"
import carsReducer from "./carsReducer"
import weatherReducer from "./weatherReducer"

export const reducers = combineReducers({
    carsReducer,
    weatherReducer
})