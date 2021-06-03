import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const WeeklyForecast = ({
  day,
  date,
  icon,
  temperature,
}) => (
  <div className="weeklyForecast">
    <Card>
      <Card.Content>
        <Card.Header>
          <h3>{day}</h3>
          <p>{date}</p>
        </Card.Header>
        <Card.Description>
          <img src={icon} alt="" />
          <p>{temperature}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

WeeklyForecast.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default WeeklyForecast;
