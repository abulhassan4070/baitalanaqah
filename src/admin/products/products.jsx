import { Flex, Text, Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdViewAgenda } from 'react-icons/md';

export default function AllProducts() {
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
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Products List
          </Text>
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
