import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function carsReducer(state=initialState.cars, action){
    switch (action.type) {
        case actionTypes.GET_CARS_SUCCESS:
            return {data:action.payload, load:true, failed: false}

        case actionTypes.GET_CARS_ERROR:
            return{data: [], load: false, failed: true}

        default:
            return state;
    }
}