import {
  Flex,
  Text,
  Box,
  SimpleGrid,
  MenuItem,
  Checkbox,
  Menu,
  MenuButton,
  Button,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { AdminContext } from "contexts/AdminContext";
import { apiUrl } from "variables/constants";
import axios from "axios";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { FaMoneyBill } from "react-icons/fa";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { brandColor } from "variables/constants";
import { MdOutlinePin } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Epins() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const [checkedItems, setCheckedItems] = React.useState([true, true]);
  const [search, setSearch] = React.useState("");

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
    date = value,
    paymode = checkedItems
  ) => {
    setLoading(true);
    console.log(value);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getEpinDetails&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${
        admin.user.token
      }&search=${string}&paymode=${paymode}&from_date=${date[0]}&to_date=${
        date[1]
      }`
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
    <>
      {data.length === 0 ? (
        <Text></Text>
      ) : (
        <div>
          <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              mt="20px"
            >
              <Text fontSize="2xl" fontWeight="bold" mb="20px">
                EPIN Reports
              </Text>
              <NavLink
                to="/admin/createepin"
                style={{ textDecoration: "none" }}
              >
                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  mb="20px"
                >
                  Create EPIN
                </Button>
              </NavLink>
            </Flex>
            <SimpleGrid
              columns={{ base: 2, md: 4, "2xl": 4 }}
              gap="20px"
              mb="20px"
            >
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        color={brandColor}
                        as={FaMoneyBill}
                      />
                    }
                  />
                }
                name="Total Amount"
                value={data.total_amount}
              />
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdOutlinePin}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Total Epins"
                value={data.total}
              />
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdOutlinePin}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Active Epins"
                value={data.total_unused}
              />
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdOutlinePin}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Inactive Epins"
                value={data.total_used}
              />
            </SimpleGrid>
          </Box>

          <Box>
            <Card direction="column" w="100%" px="0px">
              <Flex px="25px" justify="space-between" mb="20px" align="center">
                <Text fontSize="22px" fontWeight="700" lineHeight="100%">
                  Epin List
                </Text>
                <Flex>
                  <Button
                    colorScheme="blue"
                    mr="2"
                    onClick={() => {
                      window.open(
                        `${apiUrl()}?action=dashboard&mode=exportEpinDetails&username=${
                          admin.user.username
                        }&token=${
                          admin.user.token
                        }&search=${search}&paymode=${checkedItems}&from_date=${
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
                        EPIN Status
                      </Button>
                    </MenuButton>
                    <MenuList
                      p="0px"
                      mt="10px"
                      borderRadius="20px"
                      border="none"
                    >
                      <MenuItem>
                        <Checkbox
                          isChecked={checkedItems[0]}
                          onChange={(e) => {
                            var newValue = [e.target.checked, checkedItems[1]];
                            setCheckedItems(newValue);
                            fetchData(1, perPage, search, value, newValue);
                          }}
                        >
                          Active
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
                          Inactive
                        </Checkbox>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <SearchBar
                    id="activationPaymentSearch"
                    onclickable={onclickable}
                  />
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
            </Card>
          </Box>
        </div>
      )}
    </>
  );
}
