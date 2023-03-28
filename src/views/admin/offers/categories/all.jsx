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
import { NavLink } from "react-router-dom";
import { getAdminDashData } from "variables/functions";

export default function AllOfferCategories() {
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
      name: "Name",
      selector: (row) => row.name,
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
          <NavLink to={`/admin/offerproducts/editcategory?id=${row.id}`}>
            <Button colorScheme="blue" mr="2">
              <Icon as={MdEdit} />
            </Button>
          </NavLink>
          <Button
            colorScheme="red"
            mr="2"
            onClick={() => {
              var r = window.confirm("Are you sure you want to delete this?");
              if (r === true) {
                getAdminDashData(
                  admin.user.username,
                  admin.user.token,
                  "delete_offercategory",
                  {
                    id: row.id,
                  }
                ).then((res) => {
                  data.splice(data.indexOf(row), 1);
                  setData([...data]);
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
      "get_offercategories"
    ).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [admin]);
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
            All Offer Categories
          </Text>
        </Flex>
        <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
          <NavLink
            to="/admin/offerproducts/addcategory"
            style={{ textDecoration: "none" }}
          >
            <Button fontSize="sm" variant="brand" fontWeight="500" mb="20px">
              Add New
            </Button>
          </NavLink>
        </Container>
        <DataTable columns={columns} data={data} progressPending={loading} />
      </Card>
    </Box>
  );
}
