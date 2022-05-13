import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createRootReducer from './reducer';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: createRootReducer(),
  middleware: middlewares,
  devTools: true,
});

export default store;
