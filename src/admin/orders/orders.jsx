import { Flex, Text, Box, Button, Icon } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit } from 'react-icons/md';
import { apiUrl } from 'variables/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function OrderHistory() {
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
      name: 'Products Count',
      selector: row => row.products.length,
      sortable: true,
    },
    {
      name: 'Product Names',
      selector: row =>
        typeof products !== 'string' && (
          <>
            {row.products.map((product, index) => {
              return (
                <div key={index}>
                  {product.product.productName} x {product.qty}
                </div>
              );
            })}
          </>
        ),
      sortable: true,
    },

    {
      name: 'Category Name',
      selector: row => (
        typeof products !== 'string' &&      <>
          {row.products.map((product, index) => {
            return (
              <div key={index}>{product.product.category.categoryName}</div>
            );
          })}
        </>
      ),
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => (
        typeof products !== 'string' &&    <>
          {row.products.map((product, index) => {
            return (
              <div key={index}>{product.product.subTotal * product.qty}</div>
            );
          })}
        </>
      ),
      sortable: true,
    },
    {
      name: 'Created at',
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
              axios
                .get(`${apiUrl()}deleteProductByCategoryId/${row.productId}`)
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
      url: apiUrl() + 'getDataTableForOrderList',
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
            data: 'orderId',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'fullName',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'totalAmount',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'currency',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'paymentStatus',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'orderStatus',
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
        if (response === 'Access denied') {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          window.location.href = '/auth';
        }
        // console.log(JSON.stringify(response.data));
        var jsonData = response.data.data;
        var totalRecords = response.data.recordsTotal;
        setData(jsonData);
        setTotalRows(totalRecords);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
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
            Order Details
          </Text>
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
