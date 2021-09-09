import { connect } from 'react-redux';

import WeeklyForecast from 'src/components/WeeklyForecast';

const mapStateToProps = (state) => ({
  data: state.weekly.data,
  isVisible: state.weekly.isVisible,
  query: state.search.query,
});

export default connect(mapStateToProps)(WeeklyForecast);
