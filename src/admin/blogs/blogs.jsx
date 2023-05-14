import { Flex, Text, Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';
import { apiUrl } from 'variables/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchUserDetails = async () => {
    setLoading(true);

    const response = await axios.get(`${apiUrl()}getAllBlogs`);
    setData(response.data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = [
    {
      name: 'S.No',
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: 'ID',
      selector: row => row.blogId,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.fullName,
      sortable: true,
    },
    {
      name: 'Blog Title',
      selector: row => row.blogTitle,
      sortable: true,
    },
    {
      name: 'Blog Type',
      selector: row => row.blogType,
      sortable: true,
    },
    {
      cell: row => (
        <>
          <Button colorScheme="blue" mr="2">
            <Icon as={MdEdit} />
          </Button>
          <Button colorScheme="red" mr="2">
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
