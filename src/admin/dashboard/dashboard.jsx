import { Box } from '@chakra-ui/react';
import React from 'react';

import Statistics from './components/StatisticsCard';

export default function UserReports() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Statistics />
    </Box>
  );
}
