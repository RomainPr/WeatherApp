// == Import npm
import React from 'react';

// == Import components
import Header from 'src/components/Header';
import Search from 'src/containers/connectedSearch';
import DailyForecast from 'src/containers/connectedDaily';
import WeeklyForecast from 'src/containers/connectedWeekly';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Search />
    <DailyForecast />
    <WeeklyForecast />
  </div>
);

// == Export
export default App;
