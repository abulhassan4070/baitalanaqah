import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Button,
  Checkbox,
  Icon,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { TbBoxMargin } from "react-icons/tb";
import MiniStatistics from "components/card/MiniStatistics";
import dayjs from "dayjs";
import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import DatePicker from "react-multi-date-picker";
import { brandColor } from "variables/constants";
import { IoCash } from "react-icons/io5";
import { shadow } from "variables/constants";
import { NavLink } from "react-router-dom";

export default function WithdrawalTableReport() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
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
      name: "User Id",
      selector: (row) => (
        <>
          <NavLink to={`/admin/userreports/singleuser?id=${row.user_id}`}>
            {row.user_id}
          </NavLink>
        </>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.first_name + " " + row.last_name,
    },
    {
      name: "Payout",
      selector: (row) => row.request_amount + "/" + row.total_paid_amount,
    },
    {
      name: "status",
      selector: (row) => (row.status === "2" ? "Processing" : "Paid"),
    },
    {
      name: "TDS",
      selector: (row) => row.tdsCharge,
    },
    {
      name: "Service Charge",
      selector: (row) => row.adminCharge,
    },
    {
      name: "Other Charges",
      selector: (row) => row.extraCharge,
    },
    {
      name: "Pay Mode",
      selector: (row) => row.pay_mode,
    },
    {
      name: "Ac No / UPI",
      selector: (row) => row.acc_number,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.created_at).format("DD-MM-YYYY hh:mm A"),
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

  const fetchActivationDetails = async (
    page,
    size = perPage,
    string = search,
    date = value,
    paymode = checkedItems
  ) => {
    setLoading(true);
    console.log(value);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getWithdrawalDetails&page=${page}&per_page=${size}&username=${
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
    fetchActivationDetails(1, perPage, string);
  };
  React.useEffect(() => {
    fetchActivationDetails(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {data.length === 0 ? (
        <Text></Text>
      ) : (
        <SimpleGrid columns={{ base: 2, md: 4, "2xl": 6 }} gap="20px" mb="20px">
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="Requested Amount"
            value={data.total_requested}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="Payout Amount"
            value={data.total_paid}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="TDS"
            value={data.total_tds}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="Service Charge"
            value={data.total_service_charge}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={
                  <Icon w="32px" h="32px" as={TbBoxMargin} color={brandColor} />
                }
              />
            }
            name="Other Charges"
            value={data.total_other_charge}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={
                  <Icon w="32px" h="32px" color={brandColor} as={FaUsers} />
                }
              />
            }
            name="Total Withdrawals"
            value={totalRows}
          />
        </SimpleGrid>
      )}
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            Withdrawal Details
          </Text>
          <Flex>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                window.open(
                  `${apiUrl()}?action=dashboard&mode=exportWithdrawalDetails&username=${
                    admin.user.username
                  }&token=${admin.user.token}&search=${search}&from_date=${
                    value[0]
                  }&to_date=${value[1]}&paymode=${checkedItems}`
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
                  fetchActivationDetails(1, perPage, search, [date1, date2]);
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
                  Pay Mode
                </Button>
              </MenuButton>
              <MenuList
                boxShadow={shadow}
                p="0px"
                mt="10px"
                borderRadius="20px"
                bg={"white"}
                border="none"
              >
                <MenuItem>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => {
                      var newValue = [e.target.checked, checkedItems[1]];
                      setCheckedItems(newValue);
                      fetchActivationDetails(
                        1,
                        perPage,
                        search,
                        value,
                        newValue
                      );
                    }}
                  >
                    BANK
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) => {
                      var newValue = [checkedItems[0], e.target.checked];
                      setCheckedItems(newValue);
                      fetchActivationDetails(
                        1,
                        perPage,
                        search,
                        value,
                        newValue
                      );
                    }}
                  >
                    UPI
                  </Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>
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
          paginationRowsPerPageOptions={[10, 50, 100, 500]}
        />
      </Card>
    </Box>
  );
}
