import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DailyForecast = ({
  city,
  temperature,
  icon,
  day,
  weather,
  precipitation,
}) => (
  <Segment>
    <div className="dailyForecast">
      <h2 className="dailyForecast_title">{city}</h2>
      <p className="dailyForecast_temperature">{temperature}</p>
      <img src={icon} alt="" />
    </div>
    <div className="dailyForecastDescription">
      <ul>
        <li>{day}</li>
        <li>Weather : {weather}</li>
        <li>Precipitation : {precipitation}</li>
      </ul>
    </div>
  </Segment>
);

DailyForecast.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.any.isRequired,
  day: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  precipitation: PropTypes.string.isRequired,
};

export default DailyForecast;
