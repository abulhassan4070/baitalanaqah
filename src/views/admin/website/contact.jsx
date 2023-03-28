import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Button,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { AdminContext } from "contexts/AdminContext";

export default function ContactMessages() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [errorDescription, setErrorDescription] = React.useState({});

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Created Date",
      selector: (row) => dayjs(row.date).format("DD-MM-YYYY hh:mm A"),
    },
    {
      name: "Actions",
      cell: (row) => (
        <Button
          colorScheme="blue"
          mr="2"
          onClick={() => {
            axios
              .get(
                `${apiUrl()}?action=dashboard&mode=getSingleContactMessage&id=${
                  row.id
                }&username=${admin.user.username}&token=${admin.user.token}`
              )
              .then((data) => {
                setErrorDescription(data.data.data);
                onOpen();
              });
          }}
        >
          View
        </Button>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchActivationDetails(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    fetchActivationDetails(page, newPerPage);
  };

  const fetchActivationDetails = async (page, size = perPage) => {
    setLoading(true);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getContactMessages&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${admin.user.token}`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchActivationDetails(1);
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
            Contact Messages
          </Text>
          <Flex>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                window.open(
                  `${apiUrl()}?action=dashboard&mode=exportContactMessages&username=${
                    admin.user.username
                  }&token=${admin.user.token}`
                );
              }}
            >
              Export
            </Button>
          </Flex>
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
      </Card>{" "}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Contact Message
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>Name: {errorDescription.name}</Text>
              <Text>Email: {errorDescription.email}</Text>
              <Text>Phone: {errorDescription.phone}</Text>
              <Text>Message: {errorDescription.message}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
