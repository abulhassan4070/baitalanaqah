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
  Button,
  Checkbox,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function SinglePhoneContacts() {
  const [apiContacts, setContacts] = React.useState(null);
  const [filteredContacts, setfilteredContacts] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [filterType, setFilterType] = React.useState(["All"]);
  const [checked, setChecked] = React.useState("All");
  const [loading, setLoading] = React.useState(true);
  const admin = React.useContext(AdminContext);
  const location = useLocation().search;
  const userid = new URLSearchParams(location).get("id");

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${apiUrl()}?action=dashboard&mode=get_usercontactsexport&username=${
          admin.user.username
        }&token=${admin.user.token}&user_id=${userid}`
      )
      .then((res) => {
        setContacts(res.data);
        setfilteredContacts(res.data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Contact Details For User ID: {userid}
          </Text>
          <Flex>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                window.open(
                  `${apiUrl()}?action=dashboard&mode=export_usercontactsexport&username=${
                    admin.user.username
                  }&token=${admin.user.token}&user_id=${userid}`
                );
              }}
            >
              Export
            </Button>
            <Menu>
              <MenuButton p="0px">
                <Button
                  colorScheme="gray"
                  variant="outline"
                  style={{
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  TYPE
                </Button>
              </MenuButton>
              <MenuList p="0px" mt="10px" borderRadius="20px" border="none">
                {filterType.map((type, index) => {
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        if (type === "All") {
                          setfilteredContacts(apiContacts);
                        } else {
                          setfilteredContacts({
                            data: apiContacts.data.filter(
                              (data) => data.type === type
                            ),
                          });
                        }
                        setChecked(type);
                      }}
                    >
                      <Checkbox isChecked={checked === type}>{type}</Checkbox>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <TableContainer>
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Type</Th>
                <Th>Name</Th>
                <Th>Phone Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {loading ? (
                <Tr>
                  <Td colSpan="4" textAlign="center">
                    Loading...
                  </Td>
                </Tr>
              ) : filteredContacts.data.length === 0 ? (
                <Tr>
                  <Td colSpan="4" textAlign="center">
                    No Contacts Found
                  </Td>
                </Tr>
              ) : (
                filteredContacts.data.map(function (data, index) {
                  if (!filterType.includes(data.type)) {
                    filterType.push(data.type);
                  }
                  return (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{data.type}</Td>
                      <Td>{data.name}</Td>
                      <Td>
                        {(typeof data.phone === "string"
                          ? data.phone
                          : data.phone.map((phone) => phone.number)
                        ).toString()}
                      </Td>
                    </Tr>
                  );
                })
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
