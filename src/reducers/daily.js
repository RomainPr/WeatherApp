import { GET_RESULT_QUERY, GET_RESULT_QUERY_SUCCESS } from '../actions/search';

export const initialState = {
  city: '',
  temp: 0,
  icon: null,
  day: 0,
  condition: '',
  precipitation: 0,
  isVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RESULT_QUERY:
      return {
        ...state,
      };
    case GET_RESULT_QUERY_SUCCESS:
      return {
        ...state,
        city: action.data.location.name,
        temp: action.data.current.temp_c,
        icon: action.data.current.condition.icon,
        day: action.data.current.is_day,
        condition: action.data.current.condition.text,
        precipitation: action.data.current.precip_in,
        isVisible: true,
      };
    default:
      return state;
  }
};

export default reducer;
