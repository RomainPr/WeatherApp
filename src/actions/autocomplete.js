export const GET_QUERY = 'GET_QUERY';
export const GET_QUERY_SUCCESS = 'GET_QUERY_SUCCESS';

export const getQuery = () => ({
  type: GET_QUERY,
});

export const getQuerySuccess = (data) => ({
  type: GET_QUERY_SUCCESS,
  data: data,
});
