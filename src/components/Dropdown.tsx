import {
  //
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Chip,
} from '@material-ui/core';
import React, { useState } from 'react';

interface DropdownProps {
  metrics: string[];
}

const Dropdown = ({ metrics }: DropdownProps) => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedMetrics(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl style={{ width: '20em' }}>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selectedMetrics}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        renderValue={(selected) => (
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {metrics?.map((metric) => (
          <MenuItem key={metric} value={metric}>
            {metric}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
