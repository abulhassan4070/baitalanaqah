import { Flex, Text, Box, Button, Icon, useToast } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';
import { apiUrl } from 'variables/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { sendRequestWithToken } from 'variables/functions';

export default function AllProducts() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // eslint-disable-next-line no-unused-vars
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const columns = [
    {
      name: 'S.No',
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: 'product name',
      selector: row => row.productName,
      sortable: true,
    },

    {
      name: 'category name',
      selector: row => row.categoryName,
      sortable: true,
    },
    {
      name: 'price',
      selector: row => row.productPrice,
      sortable: true,
    },
    {
      name: 'status',
      selector: row => row.productStatus,
      sortable: true,
    },
    {
      name: 'created at',
      selector: row => row.dateCreated.split(' ')[0],
      sortable: true,
    },
    {
      cell: row => (
        <>
          <Link to={`/admin/editproduct?id=${row.productId}`}>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                localStorage.setItem('editproduct', JSON.stringify(row));
              }}
            >
              <Icon as={MdEdit} />
            </Button>
          </Link>
          <Button
            colorScheme="red"
            mr="2"
            onClick={() => {
              sendRequestWithToken(
                {},
                `${apiUrl()}deleteProductByCategoryId/${row.productId}`,
                'GET'
              ).then(res => {
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
  const toast = useToast();
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const fetchUserDetails = async () => {
    setLoading(true);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiUrl() + 'getDataTableForProductList',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: JSON.stringify({
        page: currentPage,
        start: '0',
        length: perPage,
        columns: [
          {
            data: 'productId',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'categoryName',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'productName',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
        ],
        order: [
          {
            column: 0,
            dir: 'asc',
          },
        ],
        search: {
          value: '',
          regex: false,
        },
      }),
    };
    axios
      .request(config)
      .then(response => {
        // console.log(JSON.stringify(response.data));
        var jsonData = response.data.data;
        var totalRecords = response.data.recordsTotal;
        setData(jsonData);
        setTotalRows(totalRecords);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        toast({
          title: 'Error',
          description: error.response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        if (error.response.status === 401) {
          localStorage.clear();
          window.location.href = '/';
        }
      });

    setLoading(false);
  };

  React.useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, perPage]);
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Product Details
          </Text>
          <Link to={'/admin/addproduct'}>
            <Button colorScheme="blue" mr="2">
              Add New
            </Button>
          </Link>
        </Flex>
        <DataTable
          columns={columns}
          data={data}
          pagination
          progressPending={loading}
          paginationServer
          paginationTotalRows={totalRows}
          paginationDefaultPage={currentPage}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationRowsPerPageOptions={[10, 50, 100, 500]}
        />
      </Card>
    </Box>
  );
}
