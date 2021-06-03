import { combineReducers } from 'redux';

import dailyReducer from './daily';
import weeklyReducer from './weekly';
import searchReducer from './search';

// combineReducers permet de découper notre état et nos reducers
// en plusieurs "tranches" aka SLICES
// ici nous avons deux tranches : recipes et user
const rootReducer = combineReducers({
  daily: dailyReducer,
  weekly: weeklyReducer,
  search: searchReducer,
});

export default rootReducer;
