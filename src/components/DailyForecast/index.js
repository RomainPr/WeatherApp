import React from 'react';
import { Segment } from 'semantic-ui-react';

const DailyForecast = () => (
  <Segment>
    <div className="dailyForecast">
      <h2 className="dailyForecast_title">Tel Aviv</h2>
      <p className="dailyForecast_temperature">15 C</p>
      <img src="" alt="" />
    </div>
    <div className="dailyForecastDescription">
      <ul>
        <li>Monday, 30/12/19, 17:12</li>
        <li>Weather : A shower</li>
        <li>Precipitation : Rain</li>
      </ul>
    </div>
  </Segment>
);

export default DailyForecast;
