import { connect } from 'react-redux';

import Search from 'src/components/Search';

import {
  changeInput,
  changeInputQuery,
  getResultQuery,
  getForecastQuery,
} from 'src/actions/search';
import { getQuery } from '../actions/autocomplete';

const mapStateToProps = (state) => ({
  query: state.search.query,
  data: state.search.data,
  complete: state.search.complete,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeQuery: (event) => {
    dispatch(changeInput(event.target.value));
    dispatch(getQuery());
  },
  updateInputValue: (event) => {
    dispatch(changeInputQuery(event.target.innerText));
    dispatch(getResultQuery());
    dispatch(getForecastQuery());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
