import React from 'react';
import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <p><span>conditions:</span><br />{conditions}</p>
      <p><span>time:</span><br />{time}</p>
      <img src={img} alt={imgAlt} />
    </div>
  );
}

export default WeatherForecast;