import { connect } from 'react-redux';

import Search from 'src/components/Search';

import { changeInput } from 'src/actions/search';

const mapStateToProps = (state) => ({
  query: state.search.query,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeQuery: (event) => {
    dispatch(changeInput(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
