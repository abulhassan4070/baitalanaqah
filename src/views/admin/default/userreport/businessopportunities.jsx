import { Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { NavLink } from "react-router-dom";
export default function BusinessOpportunities() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
    },
    {
      name: "User Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.user_id}`}>
          {row.user_id}
        </NavLink>
      ),
    },
    {
      name: "Full Name",
      selector: (row) => row.first_name + " " + row.last_name,
    },
    {
      name: "Phone",
      selector: (row) => row.telephone,
    },
    {
      name: "Whatsapp",
      selector: (row) => row.whatsapp_no,
    },
    {
      name: "District",
      selector: (row) => row.city + " - " + row.state,
    },
    {
      name: "Pincode",
      selector: (row) => row.zipcode,
    },
    {
      name: "Want To Be",
      selector: (row) =>
        row.wantToBe
          .replaceAll("டெலிவரி பார்ட்னர்", "Delivery Partner")
          .replaceAll("டெலிவரி பாய்", "Delivery Boy")
          .replaceAll("உணவு விற்பனையாளர்", "Food Vendor"),
    },
  ];

  const handlePageChange = (page) => {
    fetchEpins(page);
    setCurrentPage(page);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    fetchEpins(page, newPerPage);
  };

  const fetchEpins = async (page, size = perPage, string = search) => {
    setLoading(true);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getUserOpportunities&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${admin.user.token}&search=${string}`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const onclickable = async (string) => {
    setSearch(string);
    fetchEpins(1, perPage, string);
  };
  React.useEffect(() => {
    fetchEpins(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            B2B Report
          </Text>
          <SearchBar id="userSearch" onclickable={onclickable} />
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
