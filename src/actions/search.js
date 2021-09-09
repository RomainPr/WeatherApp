export const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const CHANGE_INPUT_QUERY = 'CHANGE_INPUT_QUERY';
export const GET_RESULT_QUERY = 'GET_RESULT_QUERY';
export const GET_RESULT_QUERY_SUCCESS = 'GET_RESULT_QUERY_SUCCESS';
export const GET_FORECAST_QUERY = 'GET_FORECAST_QUERY';
export const GET_FORECAST_QUERY_RESULT = 'GET_FORECAST_QUERY_RESULT';

export const changeInput = (newValue) => ({
  type: CHANGE_INPUT_SEARCH,
  newValue,
});

export const changeInputQuery = (newVal) => ({
  type: CHANGE_INPUT_QUERY,
  newVal,
});

export const getResultQuery = () => ({
  type: GET_RESULT_QUERY,
});

export const getResultQuerySuccess = (data) => ({
  type: GET_RESULT_QUERY_SUCCESS,
  data,
});

export const getForecastQuery = () => ({
  type: GET_FORECAST_QUERY,
});

export const getForecastQueryResult = (data) => ({
  type: GET_FORECAST_QUERY_RESULT,
  data,
});
