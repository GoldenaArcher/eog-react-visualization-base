import { combineReducers } from '@reduxjs/toolkit';
import graphQLReducer, { GraphQLState } from './graphql.reducer';

export interface AppState {
  graphQl: GraphQLState;
}

const createRootReducer = () => combineReducers({
  graphql: graphQLReducer,
});

export default createRootReducer;
