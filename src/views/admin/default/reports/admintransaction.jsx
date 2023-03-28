import { Text, Box, Icon, Flex, Button, Spacer, MenuButton, Menu, MenuList, MenuItem, Checkbox } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import axios from "axios";
import DataTable from "react-data-table-component";
import { apiUrl } from "variables/constants";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import dayjs from "dayjs";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import DatePicker from "react-multi-date-picker";
export default function AdminTransactionReport() {
  const [data, setData] = React.useState([]);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const [search, setSearch] = React.useState("");
  const [checkedItems, setCheckedItems] = React.useState([true, true]);
  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [value, setValue] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Transaction ID",
      selector: (row) => {
        if (row.type === "credit") {
          return (
            <Flex>
              <Icon color="green.500" as={FaArrowDown} />
              <Text color="green.500">{row.transaction_no}</Text>
            </Flex>
          );
        } else {
          return (
            <Flex>
              <Icon color="red.500" as={FaArrowUp} />
              <Text color="red.500">{row.transaction_no}</Text>
            </Flex>
          );
        }
      },
    },
    {
      name: "Amount",
      selector: (row) =>
        row.credit_amt.toString() === "0" ? row.debit_amt : row.credit_amt,
    },
    {
      name: "Receiver Id",
      selector: (row) => row.receiver_id,
    },
    {
      name: "Wallet Type",
      selector: (row) =>
        row.ewallet_used_by === "E Wallet"
          ? "Live Wallet"
          : row.ewallet_used_by === "Epin Wallet"
          ? "EPIN Wallet"
          : row.ewallet_used_by === "Shopping Wallet"
          ? "Offer Wallet"
          : "Reward Wallet",
    },
    {
      name: "Description",
      selector: (row) => row.ttype,
    },
    {
      name: "Date",
      selector: (row) => dayjs(row.ts).format("DD-MM-YYYY hh:mm A"),
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

  const fetchData = async () => {
    console.log(value);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getAdminTransactions&page=${currentPage}&per_page=${perPage}&username=${
        admin.user.username
      }&token=${admin.user.token}&search=${search}&from_date=${
        value[0]
      }&to_date=${value[1]}`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
  };

  const onclickable = async (string) => {
    setSearch(string);
    fetchData(1, perPage, string);
  };
  React.useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, perPage, search, value]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="10px">
        {data && (
          <>
            <Flex>
              <Text fontSize="xl" fontWeight="bold">
                Transaction Report
              </Text>
              <Spacer />
              <Button
                colorScheme="blue"
                mr="2"
                onClick={() => {
                  window.open(
                    `${apiUrl()}?action=dashboard&mode=exportAdminTransactions&username=${
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
                    Wallet Type
                  </Button>
                </MenuButton>
                <MenuList p="0px" mt="10px" borderRadius="20px" border="none">
                  <MenuItem>
                    <Checkbox
                      isChecked={checkedItems[0]}
                      onChange={(e) => {
                        var newValue = [e.target.checked, checkedItems[1]];
                        setCheckedItems(newValue);
                        fetchData(1, perPage, search, value, newValue);
                      }}
                    >
                      Live Wallet
                    </Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox
                      isChecked={checkedItems[1]}
                      onChange={(e) => {
                        var newValue = [checkedItems[0], e.target.checked];
                        setCheckedItems(newValue);
                        fetchData(1, perPage, search, value, newValue);
                      }}
                    >
                      Epin Wallet
                    </Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox
                      isChecked={checkedItems[1]}
                      onChange={(e) => {
                        var newValue = [checkedItems[0], e.target.checked];
                        setCheckedItems(newValue);
                        fetchData(1, perPage, search, value, newValue);
                      }}
                    >
                      Offer Wallet
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>

              <SearchBar
                id="activationPaymentSearch"
                onclickable={onclickable}
              />
            </Flex>
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationServer
              paginationTotalRows={totalRows}
              paginationDefaultPage={currentPage}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              paginationRowsPerPageOptions={[10, 50, 100, 500]}
            />
          </>
        )}
      </Card>
    </Box>
  );
}
