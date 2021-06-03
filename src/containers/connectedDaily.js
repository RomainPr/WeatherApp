import { connect } from 'react-redux';

import DailyForecast from 'src/components/DailyForecast';

const mapStateToProps = (state) => ({
  city: state.daily.city,
  temperature: state.daily.temperature,
  icon: state.daily.icon,
  day: state.daily.day,
  weather: state.daily.weather,
  precipitation: state.daily.precipitation,
});

export default connect(mapStateToProps)(DailyForecast);
