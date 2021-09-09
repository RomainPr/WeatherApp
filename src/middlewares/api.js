import axios from 'axios';

import {
  GET_QUERY, getQuerySuccess,
} from 'src/actions/autocomplete';

import {
  GET_RESULT_QUERY,
  getResultQuerySuccess,
  GET_FORECAST_QUERY,
  getForecastQueryResult,
} from '../actions/search';

const apiMiddleware = (store) => (next) => (action) => {
  const key = '8240435e77594b48a51131645210806';
  // eslint-disable-next-line no-console
  console.log('Je suis logMiddleware et recois laction : ', action);
  switch (action.type) {
    case GET_QUERY: {
      const state = store.getState();
      const { query } = state.search;
      if (query !== '') {
        axios.get(`http://api.weatherapi.com/v1/search.json?key=${key}&q=${query}`)
          .then((response) => {
            store.dispatch(getQuerySuccess(response.data));
          });
      }
      next(action);
      break;
    }
    case GET_RESULT_QUERY: {
      const state = store.getState();
      const { query } = state.search;
      if (query !== '') {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`)
          .then((response) => {
            store.dispatch(getResultQuerySuccess(response.data));
          });
      }
      next(action);
      break;
    }
    case GET_FORECAST_QUERY: {
      const state = store.getState();
      const { query } = state.search;
      if (query !== '') {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=5`)
          .then((response) => {
            store.dispatch(getForecastQueryResult(response.data.forecast.forecastday));
          });
      }
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
