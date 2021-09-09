import { CHANGE_INPUT_SEARCH, CHANGE_INPUT_QUERY } from 'src/actions/search';
import { GET_QUERY, GET_QUERY_SUCCESS } from 'src/actions/autocomplete';

export const initialState = {
  query: '',
  data: [],
  complete: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        query: action.newValue,
      };
    case GET_QUERY:
      return {
        ...state,
      };
    case GET_QUERY_SUCCESS:
      return {
        ...state,
        data: action.data,
        complete: true,
      };
    case CHANGE_INPUT_QUERY:
      return {
        ...state,
        query: action.newVal,
        complete: !state.complete,
      };
    default:
      return state;
  }
};

export default reducer;
