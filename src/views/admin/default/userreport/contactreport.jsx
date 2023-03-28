import {
  Flex,
  Text,
  Box,
  Tr,
  Tbody,
  Th,
  Thead,
  Table,
  TableContainer,
  Td,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
export default function PhoneContacts() {
  const [apiData, setApiData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const admin = React.useContext(AdminContext);
  const [search, setSearch] = React.useState("");
  const location = useLocation().search;
  const userid = new URLSearchParams(location).get("id");

  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [value, setValue] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);
  const fetchData = async (string = search, date = value) => {
    setLoading(true);
    console.log(value);
    axios
      .get(
        `${apiUrl()}?action=dashboard&mode=get_contactsexport&username=${
          admin.user.username
        }&token=${admin.user.token}&search=${string}&from_date=${
          date[0]
        }&to_date=${date[1]}`
      )
      .then((res) => {
        setApiData(res.data);
        setLoading(false);
      });
  };

  const onclickable = async (string) => {
    setSearch(string);
    fetchData(string, value);
  };

  React.useEffect(() => {
    setLoading(true);

    fetchData(search, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Exported Contacts
          </Text>
          <Flex>
            <DatePicker
              value={value}
              onChange={(e) => {
                if (e.length === 2) {
                  var date1 = dayjs(e[0]).format("YYYY-MM-DD");
                  var date2 = dayjs(e[1]).format("YYYY-MM-DD");
                  setValue([date1, date2]);
                  fetchData(search, [date1, date2]);
                } else {
                  setValue([dayjs(e[0]).format("YYYY-MM-DD")]);
                }
              }}
              range
              style={{
                width: "200px",
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
            <SearchBar id="activationPaymentSearch" onclickable={onclickable} />
          </Flex>
        </Flex>
        <TableContainer>
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>User ID</Th>
                <Th>Name</Th>
                <Th>Phone Number</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!loading &&
                apiData.data.map(function (data, index) {
                  return (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{data.user_id}</Td>
                      <Td>{data.first_name + " " + data.last_name}</Td>
                      <Td>{data.telephone}</Td>
                      <Td>{dayjs(data.created_at).format("DD-MM-YYYY hh:mm A")}</Td>
                      <Td>
                        <NavLink
                          to={`/admin/userreports/singlephonecontacts?id=${data.user_id}`}
                        >
                          <Button colorScheme="blue" mr="2">
                            <Icon as={FaEye} />
                          </Button>
                        </NavLink>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
