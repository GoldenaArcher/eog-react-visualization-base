import { useQuery } from '@apollo/client';
import { Box, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { queryMetrics } from '../api/api';
import Chart from '../components/Chart';
import CurrentData from '../components/CurrentData';
import Dropdown from '../components/Dropdown';
import Loading from '../components/Loading';
import { getMetricsFail, getMetricsSuccess } from '../stores/actions/graphql.action';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(queryMetrics);

  useEffect(() => {
    if (error) {
      dispatch(getMetricsFail(error.message));
      return;
    }
    dispatch(getMetricsSuccess(data));
  }, [error, data]);

  return (
    <Container style={{ padding: '2em 1.5em' }}>
      <Loading loading={loading} />
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CurrentData />
        <Dropdown />
      </Box>
      <Chart />
    </Container>
  );
};

export default Dashboard;
