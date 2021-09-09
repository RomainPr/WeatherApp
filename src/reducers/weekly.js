import { GET_FORECAST_QUERY, GET_FORECAST_QUERY_RESULT } from 'src/actions/search';

export const initialState = {
  data: [],
  isVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FORECAST_QUERY:
      return {
        ...state,
      };
    case GET_FORECAST_QUERY_RESULT:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
