import {
  Flex,
  Text,
  Box,
  Button,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdViewAgenda } from 'react-icons/md';
import MiniStatistics from 'components/card/MiniStatistics';
import { IoCash } from 'react-icons/io5';
import { brandColor } from 'variables/constants';
import IconBox from 'components/icons/IconBox';
import { boxBg } from 'variables/constants';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';

export default function OrderHistory() {
  const columns = [
    {
      name: 'S.No',
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Product Name',
      selector: row => row.product_name,
      sortable: true,
    },
    {
      cell: row => (
        <Button colorScheme="blue" mr="2">
          <Icon as={MdViewAgenda} />
        </Button>
      ),
    },
  ];

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
            />
          }
          name="Today"
          value="12"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
            />
          }
          name="This Month"
          value="12"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
            />
          }
          name="All Time"
          value="831"
        />
      </SimpleGrid>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Order History
          </Text>
          <SearchBar id="walletSearch" />
        </Flex>
        <DataTable
          columns={columns}
          data={[]}
          pagination
          paginationRowsPerPageOptions={[10, 50, 100, 500]}
        />
      </Card>
    </Box>
  );
}
