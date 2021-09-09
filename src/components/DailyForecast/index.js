import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const DailyForecast = ({
  city,
  temp,
  icon,
  day,
  condition,
  precipitation,
  isVisible,
}) => (
  <>
    {isVisible && (
      <Segment className="dailyContainer">
        <div className="dailyForecast">
          <h2 className="dailyForecast__title">{city}</h2>
          <p className="dailyForecast__temperature">{temp}°</p>
          <img src={icon} alt="" />
        </div>
        <div className="dailyForecastDescription">
          <ul>
            <li>jour: {day}</li>
            <li>Weather : {condition}</li>
            <li>Precipitation : {precipitation}</li>
          </ul>
        </div>
      </Segment>
    )}
  </>
);

DailyForecast.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  icon: PropTypes.any.isRequired,
  day: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  precipitation: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default DailyForecast;
