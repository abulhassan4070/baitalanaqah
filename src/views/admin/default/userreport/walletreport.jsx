import {
  Text,
  Box,
  useToast,
  Container,
  HStack,
  RadioGroup,
  Stack,
  Radio,
  Icon,
  Flex,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import { apiUrl } from "variables/constants";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
export default function SingleUserWalletTransactionReport() {
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [data, setData] = React.useState(null);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  const [value, setValue] = React.useState("live");
  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [date1, setdate1] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);
  const [checkedItems, setCheckedItems] = React.useState([true, true]);
  React.useEffect(() => {
    if (location) {
      const params = new URLSearchParams(location);
      const userid = params.get("id");
      setUserid(userid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (userid.length === 10) {
      axios
        .get(
          `${apiUrl()}?action=dashboard&mode=getUserWalletDetails&username=${
            admin.user.username
          }&token=${
            admin.user.token
          }&userid=${userid}&type=${value}&page=${currentPage}&limit=${perPage}&from_date=${
            date1[0]
          }&to_date=${date1[1]}&paymode=${checkedItems}`
        )
        .then((res) => {
          if (res.data.error.code === "#200") {
            setData(res.data.data);
            setTotalRows(res.data.total);
          } else {
            toast({
              title: "Error",
              description: res.data.error.message,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    } else {
      setData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid, value, currentPage, perPage, checkedItems, date1]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

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
      selector: (row) => row.amount,
    },
    {
      name: "Receiver Id",
      selector: (row) => row.receiver_id,
    },
    {
      name: "Sender Id",
      selector: (row) => row.sender_id,
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
                    `${apiUrl()}?action=dashboard&mode=exportWalletTransactions&username=${
                      admin.user.username
                    }&token=${
                      admin.user.token
                    }&paymode=${checkedItems}&from_date=${date1[0]}&to_date=${
                      date1[1]
                    }&paymode=${checkedItems}&type=${value}&userid=${userid}`
                  );
                }}
              >
                Export
              </Button>
              <DatePicker
                value={date1}
                onChange={(e) => {
                  if (e.length === 2) {
                    var date1 = dayjs(e[0]).format("YYYY-MM-DD");
                    var date2 = dayjs(e[1]).format("YYYY-MM-DD");
                    setdate1([date1, date2]);
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
                    Transaction Type
                  </Button>
                </MenuButton>
                <MenuList p="0px" mt="10px" borderRadius="20px" border="none">
                  <MenuItem>
                    <Checkbox
                      isChecked={checkedItems[0]}
                      onChange={(e) => {
                        var newValue = [e.target.checked, checkedItems[1]];
                        setCheckedItems(newValue);
                      }}
                    >
                      Credit
                    </Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox
                      isChecked={checkedItems[1]}
                      onChange={(e) => {
                        var newValue = [checkedItems[0], e.target.checked];
                        setCheckedItems(newValue);
                      }}
                    >
                      Debit
                    </Checkbox>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Container mb={4} ms={2}>
              <HStack>
                <RadioGroup defaultValue="live">
                  <Stack spacing={5} direction="row" align="center">
                    <Radio
                      value="live"
                      onChange={() => setValue("live")}
                      isChecked={true}
                      checked={true}
                    >
                      Live Wallet
                    </Radio>
                    <Radio value="offer" onChange={() => setValue("shopping")}>
                      Offer Wallet
                    </Radio>
                    <Radio value="epin" onChange={() => setValue("epin")}>
                      EPIN Wallet
                    </Radio>

                    <Radio value="reward" onChange={() => setValue("reward")}>
                      Reward Wallet
                    </Radio>
                  </Stack>
                </RadioGroup>
              </HStack>
            </Container>
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
