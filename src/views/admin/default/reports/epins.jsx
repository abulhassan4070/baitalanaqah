import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Spacer,
  Button,
  Container,
  HStack,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import dayjs from "dayjs";
import { NavLink, useLocation } from "react-router-dom";
import { userApiUrl } from "variables/constants";
export default function UserEpinReport() {
  const location = useLocation().search;
  const userid = new URLSearchParams(location).get("id");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [yourEpinData, setYourEpinData] = React.useState([]);
  const [sharedEpinData, setSharedpinData] = React.useState([]);
  const [value, setValue] = React.useState(1);

  const [loading, setLoading] = React.useState(false);
  const admin = React.useContext(AdminContext);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "Creator Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.sender_id}`}>
          {row.sender_id}
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "Receiver Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.receiver_id}`}>
          {row.receiver_id}
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "Used By",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.used_by}`}>
          {row.used_by}
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "EPIN No",
      selector: (row) => row.pin_no,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
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
      `${userApiUrl()}?action=dashboard&mode=all_epins&username=${
        admin.user.username
      }&token=${admin.user.token}&userid=${userid}`
    );
    setYourEpinData(response.data.data.your_epins);
    setSharedpinData(response.data.data.shared_epins);
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
            Your Epins
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
        <Container mb={4} ms={2}>
          <HStack>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio value="1" onChange={() => setValue(1)} checked>
                  Your EPIN
                </Radio>
                <Radio value="0" onChange={() => setValue(0)}>
                  Shared EPINs
                </Radio>
              </Stack>
            </RadioGroup>
          </HStack>
        </Container>
        <DataTable
          columns={columns}
          data={value === 1 ? yourEpinData : sharedEpinData}
          progressPending={loading}
          pagination
        />
      </Card>
    </Box>
  );
}
