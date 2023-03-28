import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Icon,
  Container,
  HStack,
  RadioGroup,
  Stack,
  Radio,
  useToast,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import dayjs from "dayjs";
import React, { useRef } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { setAdminDashData } from "variables/functions";
import { deleteOffer } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function AllOfferProducts() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [categoryData, setCategoryData] = React.useState([]);
  const [data, setData] = React.useState([]);
  const admin = React.useContext(AdminContext);
  const [value, setValue] = React.useState("");
  const [index, setIndex] = React.useState(1);
  const toast = useToast();
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.qty + " / " + row.inv_qty,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) =>
        row.type === "1" ? "Event" : row.type === "2" ? "Delivery" : "Others",
      sortable: true,
    },
    {
      name: "Delivery/Event Date",
      selector: (row) => {
        if (row.date === "0000-00-00 00:00:00") {
          return "N/A";
        } else {
          return dayjs(row.date).format("DD-MM-YYYY hh:mm A");
        }
      },
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => dayjs(row.created_date).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
    {
      cell: (row) => (
        <>
          <NavLink to={`/admin/offerproducts/editproduct?id=${row.id}`}>
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
                deleteOffer(admin.user.username, admin.user.token, row.id).then(
                  setIndex(index + 1),
                  (res) => {
                    toast({
                      title: "Offer Deleted",
                      description: "Offer deleted successfully",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                  }
                );
              }
            }}
          >
            <Icon as={MdDelete} />
          </Button>
        </>
      ),
    },
  ];

  const fetchData = (id) => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_offerproducts",
      {
        id: id,
      }
    ).then((res) => {
      setData(res.data);
    });
  };

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_offercategories"
    ).then((res) => {
      setCategoryData(res.data);
      setValue(res.data[0].id);
      fetchData(res.data[0].id);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    fetchData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, index]);

  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setData(copyListItems);
    var listOrder = [];
    copyListItems.map((item, index) => {
      listOrder.push({
        id: item.id,
        index: index,
      });
      return true;
    });
    setAdminDashData(
      admin.user.username,
      admin.user.token,
      "reOrderOffers",
      listOrder
    );
  };

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
            All Products
          </Text>
        </Flex>
        <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
          <NavLink
            to="/admin/offerproducts/addproduct"
            style={{ textDecoration: "none" }}
          >
            <Button fontSize="sm" variant="brand" fontWeight="500" mb="20px">
              Add New
            </Button>
          </NavLink>
        </Container>
        <Container mb={4} ms={2}>
          <HStack>
            <RadioGroup value={value}>
              <Stack spacing={5} direction="row">
                {categoryData.map((item, index) => (
                  <Radio
                    key={index}
                    value={item.id}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    checked={index === 0}
                  >
                    {item.name}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </HStack>
        </Container>
        <TableContainer>
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                {columns.map((column, index) => (
                  <Th key={index}>{column.name}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr
                  key={index}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                  draggable
                >
                  <Td>{index + 1}</Td>
                  {columns.map((column, index) => (
                    <Td key={index}>
                      {column.selector
                        ? column.selector(item, index)
                        : column.cell(item, index)}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
