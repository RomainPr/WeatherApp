import { connect } from 'react-redux';

import WeeklyForecast from 'src/components/WeeklyForecast';

const mapStateToProps = (state) => ({
  day: state.weekly.day,
  date: state.weekly.date,
  icon: state.weekly.icon,
  temperature: state.weekly.temperature,
});

export default connect(mapStateToProps)(WeeklyForecast);
