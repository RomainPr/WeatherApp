import { GET_QUERY, getQuery, GET_QUERY_SUCCESS, getQuerySuccess } from 'src/actions/autocomplete';

export const initialState = {
  data: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
