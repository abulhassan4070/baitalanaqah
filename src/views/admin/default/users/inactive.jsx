import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
export default function InactiveUsers() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [date1, setDate1] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);

  const admin = React.useContext(AdminContext);
  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Phone no",
      selector: (row) => row.mobile,
    },
    {
      name: "Date",
      selector: (row) => dayjs(row.created_at).format("DD-MM-YYYY hh:mm A"),
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

  const fetchEpins = async (page, size = perPage) => {
    setLoading(true);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getInactiveUsers&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${admin.user.token}`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
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
            Free Users List
          </Text>
          <Spacer />
          <Button
            colorScheme="blue"
            mr="2"
            onClick={() => {
              window.open(
                `${apiUrl()}?action=dashboard&mode=exportInactiveUsersDetails&username=${
                  admin.user.username
                }&token=${admin.user.token}`
              );
            }}
          >
            Export
          </Button>
          <DatePicker
            zIndex={1000}
            value={date1}
            onChange={(e) => {
              if (e.length === 2) {
                var date1 = dayjs(e[0]).format("YYYY-MM-DD");
                var date2 = dayjs(e[1]).format("YYYY-MM-DD");
                setDate1([date1, date2]);
              } else {
                setDate1([dayjs(e[0]).format("YYYY-MM-DD")]);
              }
            }}
            range
            style={{
              width: "100%",
              height: "40px",
              border: "1px solid #e2e8f0",
              borderRadius: "5px",
              padding: "0px 10px",
              marginRight: "10px",
              fontSize: "14px",
              color: "#718096",
              outline: "none",
            }}
          />
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
