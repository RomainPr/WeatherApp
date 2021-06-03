import React from 'react';
import { Card } from 'semantic-ui-react';

const WeeklyForecast = () => (
  <div className="weeklyForecast">
    <Card>
      <Card.Content>
        <Card.Header>
          <h3>Saturday</h3>
          <p>28.12.19</p>
        </Card.Header>
        <Card.Description>
          <img src="" alt="" />
          <p>15 C</p>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default WeeklyForecast;
