import { Box, Container } from '@material-ui/core';
import React from 'react';
import Chart from '../components/Chart';
import CurrentData from '../components/CurrentData';
import Dropdown from '../components/Dropdown';

const Dashboard = () => (
  <Container style={{ padding: '2em 1.5em' }}>
    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CurrentData />
      <Dropdown />
    </Box>
    <Chart />
  </Container>
);

export default Dashboard;
