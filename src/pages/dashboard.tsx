import { Box, Container } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import Chart from '../components/Chart';
import CurrentData from '../components/CurrentData';
import Dropdown from '../components/Dropdown';
import { getMetrics } from '../stores/actions/graphql.action';

const Dashboard = () => {
  const dispatch = useDispatch();

  const testDispatch = () => {
    dispatch(getMetrics());
  };

  return (
    <Container style={{ padding: '2em 1.5em' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }} onClick={testDispatch}>
        <CurrentData />
        <Dropdown />
      </Box>
      <Chart />
    </Container>
  );
};

export default Dashboard;
