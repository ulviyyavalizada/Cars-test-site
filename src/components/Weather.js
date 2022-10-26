import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { usePosition } from "use-position";
import WeatherIcons from "../hooks/WeatherIcon";
import * as weatherActions from "../redux/actions/weatherActions";


function Weather(weather) {
//   const [url, setUrl] = useState('')
  const dispatch = useDispatch();

  const { latitude, longitude } = usePosition();
  useEffect(() => {
    latitude &&
      longitude &&
      dispatch(weatherActions.getWeatherData(latitude, longitude));
  }, [longitude, latitude]);


  if (!weather) {
    return <p>You need to allow location access......</p>;
  }

  
  return (
    <div className="header_weather">
      <div className="weather_box">
        <h6 className="_name">{weather.weather?.name}</h6>
        <div className="_bottom">
          <p>{weather?.weather?.main?.temp} ℃</p>
          <WeatherIcons temp={weather?.weather?.main?.temp}/>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    weather: state.weatherReducer?.data,
  };
}

export default connect(mapStateToProps)(Weather);
