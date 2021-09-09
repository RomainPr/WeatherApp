import { connect } from 'react-redux';

import DailyForecast from 'src/components/DailyForecast';

const mapStateToProps = (state) => ({
  city: state.daily.city,
  temp: state.daily.temp,
  icon: state.daily.icon,
  day: state.daily.day,
  condition: state.daily.condition,
  precipitation: state.daily.precipitation,
  isVisible: state.daily.isVisible,
});

export default connect(mapStateToProps)(DailyForecast);
