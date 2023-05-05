import { Box, SimpleGrid } from '@chakra-ui/react';
import WalletChart from 'components/charts/WalletChart';
import React from 'react';

import UserChart from 'components/charts/UsersChart';
import Statistics from './components/StatisticsCard';

export default function UserReports() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Statistics />
      {/* <TotalPurchase mb="20px"/> */}
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <WalletChart />
        <UserChart />
      </SimpleGrid>
    </Box>
  );
}
