import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card.js';
import PieChart from 'components/charts/PieChart';
import { pieChartOptions } from 'variables/charts';
import { VSeparator } from 'components/separator/Separator';
import React from 'react';

export default function WalletChart() {
  const [data, setData] = React.useState({
    purchases: 0,
    returns: 0,
  });
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  React.useEffect(() => {
    setData({
      purchases: 2340,
      returns: 234,
    });
  }, []);
  return (
    <Card p="20px" align="center" direction="column" w="100%">
      <Flex
        px={{ base: '0px', '2xl': '10px' }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Purchase Report
        </Text>
      </Flex>
      {data.purchases > 0 && (
        <PieChart
          h="100%"
          w="100%"
          chartData={[data.purchases, data.returns]}
          chartOptions={pieChartOptions(
            ['#4318FF', '#6AD2FF'],
            ['Purchases', 'Returns']
          )}
        />
      )}
      <Card
        flexDirection="row"
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
        justifyContent="space-between"
      >
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#4318FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Purchase
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {((data.purchases / (data.purchases + data.returns)) * 100).toFixed(
              2
            )}
            %
          </Text>
          <Text fontSize="sm" color={'secondaryGray.500'} fontWeight="400">
            AED {data.purchases}
          </Text>
        </Flex>
        <VSeparator mx={{ base: '10px', xl: '10px', '2xl': '10px' }} />
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Returns
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {((data.returns / (data.purchases + data.returns)) * 100).toFixed(
              2
            )}
            %
          </Text>
          <Text fontSize="sm" color={'secondaryGray.500'} fontWeight="400">
            AED {data.returns}
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
