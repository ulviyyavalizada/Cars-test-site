// import { useEffect, useState } from "react";
import * as actionTypes from "./actionTypes"

export function getWeatherSuccess(data){
    return {type: actionTypes.GET_WEATHER_SUCCESS, payload: data}
}

export function getWeatherError(data){
    return {type: actionTypes.GET_WEATHER_ERROR, payload: data}
}

export function getWeatherData(lat, lon){
    var WEATHER_API_KEY = 'b90623c965295ff2131211c756327129'
    return function(dispatch){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
        return fetch(url).then(res=>res.json())
        .then(data => dispatch(getWeatherSuccess(data)))
        .catch(error=>dispatch(getWeatherError(error)))
    }
}