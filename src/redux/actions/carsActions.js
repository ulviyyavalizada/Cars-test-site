import * as actionTypes from "./actionTypes"


export function getCarsSuccess(cars){
    return {type: actionTypes.GET_CARS_SUCCESS, payload: cars}
}

export function getCarsError(cars){
    return {type: actionTypes.GET_CARS_ERROR, payload: cars}
}

export function getCars(){
    return function(dispatch){
        let url = "https://private-anon-e920fb1ed0-carsapi1.apiary-mock.com/manufacturers";
        return fetch(url).then(res=>res.json())
        .then(result => dispatch(getCarsSuccess(result)))
        .catch(error=>dispatch(getCarsError(error)))
    }
}