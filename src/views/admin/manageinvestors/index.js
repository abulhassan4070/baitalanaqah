// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Icon,
  Container,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import dayjs from "dayjs";
import React from "react";
import DataTable from "react-data-table-component";
import { MdDelete, MdEdit } from "react-icons/md";
import { NavLink, Switch } from "react-router-dom";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function ManageInvestors() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const admin = React.useContext(AdminContext);
  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.telephone,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.created_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
    {
      cell: (row) => (
        <>
          <NavLink to={`/admin/editinvestor?userid=${row.id}`}>
            <Button colorScheme="blue" mr="2">
              <Icon as={MdEdit} />
            </Button>
          </NavLink>
          <Button
            colorScheme="red"
            mr="2"
            onClick={() => {
              var r = window.confirm(
                "Are you sure you want to delete this investor?"
              );
              if (r === true) {
                setAdminDashData(
                  admin.user.username,
                  admin.user.token,
                  "deleteInvestor",
                  {
                    id: row.id,
                  }
                ).then((res) => {
                  getAdminDashData(
                    admin.user.username,
                    admin.user.token,
                    "getAllInvestors"
                  ).then((res) => {
                    setData(res.data);
                    setLoading(false);
                  });
                });
              }
            }}
          >
            <Icon as={MdDelete} />
          </Button>
        </>
      ),
    },
  ];

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getAllInvestors"
    ).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [admin]);

  return (
    <Switch>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Card direction="column" w="100%" px="0px">
          <Flex px="25px" justify="space-between" mb="20px" align="center">
            <Text
              color={textColor}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
            >
              All Investors
            </Text>
          </Flex>
          <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
            <NavLink
              to="/admin/editinvestor"
              style={{ textDecoration: "none" }}
            >
              <Button fontSize="sm" variant="brand" fontWeight="500" mb="20px">
                Add Investor
              </Button>
            </NavLink>
          </Container>
          <DataTable columns={columns} data={data} progressPending={loading} />
        </Card>
      </Box>
    </Switch>
  );
}
