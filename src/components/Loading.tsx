import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

interface LoadingProps {
  loading: boolean;
}

const Loading = ({ loading }: LoadingProps) => (
  <Backdrop style={{ color: '#fff' }} open={loading}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default Loading;
