import React from "react";

const WeatherIcons = ({ temp}) => {
    if (temp > 25) {
        return(
            <img
            src={require(`../assets/img/sun.png`)}
            alt=""
          />
        )
      } else if (temp > 15 && temp < 25) {
        return(
            <img
            src={require(`../assets/img/cloudy.png`)}
            alt=""
          />
        )
      } else if (temp > 0 && temp < 15) {
        return(
            <img
            src={require(`../assets/img/raining.png`)}
            alt=""
          />
        )
      } else if (temp < 0) {
        return(
            <img
            src={require(`../assets/img/snow.png`)}
            alt=""
          />
        )
      }else{
        <></>
      }
  
};

export default WeatherIcons;
