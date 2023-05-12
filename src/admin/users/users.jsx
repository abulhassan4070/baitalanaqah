import { Flex, Text, Box, Button, Icon, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { MdViewAgenda } from 'react-icons/md';
import MiniStatistics from 'components/card/MiniStatistics';
import { IoCash } from 'react-icons/io5';
import { apiUrl, brandColor } from 'variables/constants';
import IconBox from 'components/icons/IconBox';
import { boxBg } from 'variables/constants';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import axios from 'axios';

export default function UsersHistory() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
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
      name: 'Name',
      selector: row => row.fullName,
      sortable: true,
    },

    {
      name: 'email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'mobile',
      selector: row => row.mobile,
      sortable: true,
    },
    {
      name: 'created at',
      selector: row => row.dateCreated.split(' ')[0],
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
      url: apiUrl() + 'getDataTableForUserList',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + localStorage.getItem('token'),
      },
      data: JSON.stringify({
        page: currentPage,
        start: '0',
        length: perPage,
        columns: [
          {
            data: 'userId',
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
            data: 'email',
            name: '',
            searchable: true,
            orderable: true,
            search: {
              value: '',
              regex: false,
            },
          },
          {
            data: 'mobile',
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
          value: search,
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
      });

    setLoading(false);
  };

  const onclickable = async string => {
    setSearch(string);
  };
  React.useEffect(() => {
    fetchUserDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, perPage, search]);
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
          name="Verified"
          value="233"
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
          name="Unverified"
          value="25"
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
          name="All Users"
          value="258"
        />
      </SimpleGrid>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Users Details
          </Text>
          <SearchBar id="walletSearch" onclickable={onclickable} />
        </Flex>
        <DataTable
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
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
