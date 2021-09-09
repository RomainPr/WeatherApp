import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './styles.scss';

const WeeklyForecast = ({ data }) => (
  <>
    <div className="weeklyForecast">
      {data.map((item) => (
        <Card key={item.date} className="weeklyForecast__card">
          <Card.Content>
            <Card.Header>
              <p>{moment(item.date).format('ddd')}</p>
              <p>{item.date}</p>
            </Card.Header>
            <Card.Description>
              <img src={item.day.condition.icon} alt="" />
              <p>{item.day.maxtemp_c}</p>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  </>
);

WeeklyForecast.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WeeklyForecast;
