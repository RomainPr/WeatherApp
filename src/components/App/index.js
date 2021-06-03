// == Import npm
import React from 'react';

// == Import components
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import DailyForecast from 'src/components/DailyForecast';
import WeeklyForecast from 'src/components/WeeklyForecast';

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
