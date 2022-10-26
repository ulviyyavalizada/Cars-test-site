import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function weatherReducer(state=initialState.weather, action){
    switch (action.type) {
        case actionTypes.GET_WEATHER_SUCCESS:
            return {data:action.payload, load:true, failed: false}

        case actionTypes.GET_WEATHER_ERROR:
            return{data: [], load: false, failed: true}

        default:
            return state;
    }
}