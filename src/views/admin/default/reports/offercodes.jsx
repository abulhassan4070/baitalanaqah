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
import { useLocation } from "react-router-dom";
import { userApiUrl } from "variables/constants";
export default function UserOfferCodeReport() {
  const location = useLocation().search;
  const userid = new URLSearchParams(location).get("id");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [yourEpinData, setYourEpinData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const admin = React.useContext(AdminContext);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "Offer Code",
      selector: (row) => row.pin_no,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => "500",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (row.status === 0 ? "Active" : "Inactive"),
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.crt_date).format("DD-MM-YYYY hh:mm A"),
      // row.crt_date,
      sortable: true,
    },
  ];

  const fetchEpins = async () => {
    setLoading(true);
    const response = await axios.get(
      `${userApiUrl()}?action=dashboard&mode=all_offerpins&username=${
        admin.user.username
      }&token=${admin.user.token}&userid=${userid}`
    );
    setYourEpinData(response.data.data);
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
            Your Offer Codes
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
        </Flex>
        <DataTable
          columns={columns}
          data={yourEpinData}
          progressPending={loading}
          pagination
        />
      </Card>
    </Box>
  );
}
