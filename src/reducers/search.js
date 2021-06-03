import { CHANGE_INPUT_SEARCH } from 'src/actions/search';

export const initialState = {
  query: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        query: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
