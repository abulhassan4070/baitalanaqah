import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card.js';
import PieChart from 'components/charts/PieChart';
import { pieChartOptions } from 'variables/charts';
import { VSeparator } from 'components/separator/Separator';
import React from 'react';

export default function UserChart(props) {
  const [data, setData] = React.useState({
    unverifiedusers: 0,
    verifiedusers: 0,
    totalusers: 0,
    tailors: 0,
    showrooms: 0,
    orders: 0,
  });

  React.useEffect(() => {
    setData({
      unverifiedusers: 28,
      verifiedusers: 872,
      totalusers: 900,
      tailors: 13,
      showrooms: 3,
      orders: 329,
    });
  }, []);
  const { ...rest } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: '0px', '2xl': '10px' }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          User Report
        </Text>
      </Flex>
      {data.unverifiedusers > 0 && (
        <PieChart
          h="100%"
          w="100%"
          chartData={[data.verifiedusers, data.unverifiedusers]}
          chartOptions={pieChartOptions(
            ['#4318FF', '#6AD2FF'],
            ['Unverified Users', 'Verified Users']
          )}
        />
      )}
      <Card flexDirection="row" w="100%" p="15px" px="20px" mt="15px" mx="auto">
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#4318FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Verified Users
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {((data.verifiedusers / data.totalusers) * 100).toFixed(2)}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Unverified Users
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {((data.unverifiedusers / data.totalusers) * 100).toFixed(2)}%
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
