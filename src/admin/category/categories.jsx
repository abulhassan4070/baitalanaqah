import { Flex, Text, Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';
import { apiUrl } from 'variables/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UsersHistory() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchUserDetails = async () => {
    setLoading(true);

    const response = await axios.get(`${apiUrl()}getProductCategories`);
    localStorage.setItem('categories', JSON.stringify(response.data));
    setData(response.data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchUserDetails();
  }, []);
  const columns = [
    {
      name: 'S.No',
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: 'ID',
      selector: row => row.categoryId,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.categoryName,
      sortable: true,
    },
    {
      cell: row => (
        <>
          <Link to={`/admin/editcategory?id=${row.categoryId}`}>
            <Button colorScheme="blue" mr="2">
              <Icon as={MdEdit} />
            </Button>
          </Link>
          <Button
            colorScheme="red"
            mr="2"
            onClick={() => {
              axios
                .get(`${apiUrl()}deleteCategoryByCategoryId/${row.categoryId}`)
                .then(res => {
                  fetchUserDetails();
                });
            }}
          >
            <Icon as={MdDelete} />
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Categories List
          </Text>
          <Link to={'/admin/addcategory'}>
            <Button colorScheme="blue" mr="2">
              Add New
            </Button>
          </Link>
        </Flex>
        <DataTable
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
          paginationRowsPerPageOptions={[10, 50, 100, 500]}
        />
      </Card>
    </Box>
  );
}
