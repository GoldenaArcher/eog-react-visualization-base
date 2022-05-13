export const GET_METRICS = 'GET_METRICS';
export const GET_METRICS_SUCCESS = 'GET_METRICS_SUCCESS';
export const GET_METRICS_FAIL = 'GET_METRICS_FAIL';

export const GET_MEASUREMENT = 'GET_MEASUREMENT';

export interface MeasurementPayload {
  metricName: string;
  after: number;
}

export interface GetMetricsAction {
  type: typeof GET_METRICS;
}

export interface GetMetricsActionSuccess {
  type: typeof GET_METRICS_SUCCESS;
  data: string[];
}

export interface GetMetricsActionFail {
  type: typeof GET_METRICS_FAIL;
  message: string;
}

export const getMetrics = () => ({
  type: GET_METRICS,
});

export const getMetricsSuccess = () => ({
  type: GET_METRICS_SUCCESS,
});

export const getMetricsFail = () => ({
  type: GET_METRICS_FAIL,
});

export type GraphQLUnionType = GetMetricsAction | GetMetricsActionSuccess | GetMetricsActionFail;
