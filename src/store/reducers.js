import { combineReducers } from '@reduxjs/toolkit';
import jobsReducer from '../slice/jobs';

export const getMiddleWare = (getDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: false
  })
};

const storeReducer = combineReducers({
  jobs: jobsReducer,
});

const rootReducer = (state, action) => {
  return storeReducer(state, action);
};

export default rootReducer;