import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Button,
  Icon,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { AdminContext } from "contexts/AdminContext";
import { MdSettings } from "react-icons/md";
import MiniStatistics from "components/card/MiniStatistics";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { IoCash } from "react-icons/io5";
import { brandColor } from "variables/constants";
import IconBox from "components/icons/IconBox";
import { boxBg } from "variables/constants";
export default function Wallets() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "User Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.username}`}>
          {row.username}
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Live Wallet",
      selector: (row) => row.live_wallet,
      sortable: true,
    },
    {
      name: "Offer Wallet",
      selector: (row) => row.offer_wallet,
      sortable: true,
    },
    {
      name: "Epin Wallet",
      selector: (row) => row.epin_wallet,
      sortable: true,
    },
    {
      name: "Reward Wallet",
      selector: (row) => row.reward_wallet,
      sortable: true,
    },
    {
      cell: (row) => (
        <NavLink to={`/admin/userwallet?id=${row.username}`}>
          <Button colorScheme="blue" mr="2">
            <Icon as={MdSettings} />
          </Button>
        </NavLink>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchUsers(page);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    fetchUsers(page, newPerPage);
  };

  const fetchUsers = async (page, size = perPage, string = search) => {
    setLoading(true);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getUsersWalletDetails&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${admin.user.token}&search=${string}`
    );
    setData(response.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const onclickable = async (string) => {
    console.log(string);
    setSearch(string);
    setLoading(true);
    fetchUsers(1, perPage, string);
  };

  React.useEffect(() => {
    fetchUsers(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
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
          name="Total Live Balance"
          value={data.livebalance}
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
          name="Total Offer Balance"
          value={data.offerbalance}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
            />
          }
          name="Total Epin Balance"
          value={data.epinbalance}
        />
      </SimpleGrid>
      <Card
        direction="column"
        w="100%"
        px="0px"
       
      >
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            User Wallet Details
          </Text>
          <Spacer/>
          <Button
            colorScheme="blue"
            mr="2"
            onClick={() => {
              window.open(
                `${apiUrl()}?action=dashboard&mode=exportUsersWalletDetails&username=${
                  admin.user.username
                }&token=${admin.user.token}&search=${search}`
              );
            }}
          >
            Export
          </Button>
          <SearchBar id="walletSearch" onclickable={onclickable} />
        </Flex>
        <DataTable
          columns={columns}
          data={data.data}
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
