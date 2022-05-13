import {
  // a trick to kee eslint warning off
  GraphQLUnionType,
  GET_METRICS,
  GET_METRICS_SUCCESS,
  GET_METRICS_FAIL,
} from '../actions/graphql.action';

// TODO - need to rename the variable better
export interface GraphQLState {
  metrics: {
    data: string[];
    loaded: boolean;
    success: boolean;
    message: string;
  };
}

const initialState: GraphQLState = {
  metrics: {
    data: [],
    loaded: false,
    success: false,
    message: '',
  },
};

export default function graphQLReducer(state = initialState, action: GraphQLUnionType) {
  switch (action.type) {
    case GET_METRICS:
      return {
        ...state,
        metrics: {
          data: [],
          loaded: false,
          success: false,
          message: '',
        },
      };
    case GET_METRICS_SUCCESS:
      return {
        ...state,
        metrics: {
          data: action.data,
          loaded: true,
          success: true,
          message: '',
        },
      };
    case GET_METRICS_FAIL:
      return {
        ...state,
        metrics: {
          data: [],
          loaded: true,
          success: false,
          message: action.message,
        },
      };
    default:
      return state;
  }
}
