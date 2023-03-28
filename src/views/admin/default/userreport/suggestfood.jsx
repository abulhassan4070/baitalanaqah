import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Flex,
  Text,
  Box,
  useDisclosure,
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
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { NavLink } from "react-router-dom";
export default function SuggestFood() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const [search, setSearch] = React.useState("");
  const [userid, setUserid] = React.useState("");
  const [description, setDescription] = React.useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [value, setValue] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "User Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.user_id}`}>
          {row.user_id}
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "Suggestion",
      selector: (row) =>
        row.suggestion.length > 20
          ? row.suggestion.substring(0, 20) + "..."
          : row.suggestion,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.created_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button
          colorScheme="blue"
          onClick={() => {
            setUserid(row.user_id);
            setDescription(row.suggestion);
            onOpen();
          }}
        >
          View
        </Button>
      ),
    },
  ];
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    fetchData(page, newPerPage);
  };

  const fetchData = async (
    page,
    size = perPage,
    string = search,
    date = value
  ) => {
    setLoading(true);
    console.log(value);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getSuggestFoodDetails&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${admin.user.token}&search=${string}&from_date=${
        date[0]
      }&to_date=${date[1]}`
    );
    setData(response.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const onclickable = async (string) => {
    setSearch(string);
    fetchData(1, perPage, string);
  };
  React.useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Suggest Food List
          </Text>
          <Flex>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                window.open(
                  `${apiUrl()}?action=dashboard&mode=exportSuggestFoodDetails&username=${
                    admin.user.username
                  }&token=${admin.user.token}&search=${search}&from_date=${
                    value[0]
                  }&to_date=${value[1]}`
                );
              }}
            >
              Export
            </Button>
            <DatePicker
              value={value}
              onChange={(e) => {
                if (e.length === 2) {
                  var date1 = dayjs(e[0]).format("YYYY-MM-DD");
                  var date2 = dayjs(e[1]).format("YYYY-MM-DD");
                  setValue([date1, date2]);
                  fetchData(1, perPage, search, [date1, date2]);
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
        <DataTable
          columns={columns}
          data={data.data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          paginationDefaultPage={currentPage}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
        />

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                User Suggesstion
              </AlertDialogHeader>

              <AlertDialogBody>
                <Text>
                  <b>User Id : </b>
                  {userid}
                </Text>
                <Text>
                  <b>Suggestion : </b>
                  {description}
                </Text>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Card>
    </Box>
  );
}
