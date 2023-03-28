import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Button,
  Checkbox,
  Icon,
  SimpleGrid,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { FaMoneyBillWave, FaReceipt, FaUsers } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { TbBoxMargin, TbDiscount2 } from "react-icons/tb";
import MiniStatistics from "components/card/MiniStatistics";
import dayjs from "dayjs";
import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import DatePicker from "react-multi-date-picker";
import { brandColor } from "variables/constants";
import { NavLink } from "react-router-dom";

export default function ActivationTableReport() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const [checkedItems, setCheckedItems] = React.useState([true, true, true]);
  const [totalGst, setTotalGst] = React.useState(0);
  const [totalSales, setTotalSales] = React.useState(0);
  const [totalMargin, setTotalMargin] = React.useState(0);
  const [totalDiscount, setTotalDiscount] = React.useState(0);
  const [totalInstantCredit, setTotalInstantCredit] = React.useState(0);

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
        <NavLink to={`/admin/userreports/singleuser?id=${row.user_id}`}>
          {row.user_id}
        </NavLink>
      ),
    },
    {
      name: "Activation Price",
      selector: (row) =>
        parseFloat(row.gst_price) + parseFloat(row.total_price),
    },
    {
      name: "GST ",
      selector: (row) => row.gst_price,
    },
    {
      name: "Shared Moi",
      selector: (row) => row.margin_price,
    },
    {
      name: "Payment Mode",
      selector: (row) => row.payment_method,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
    },
    {
      name: "Instant Credit",
      selector: (row) => row.instant_credit,
    },
    {
      name: "Activation Date",
      selector: (row) => row.created_at.split(" ")[0],
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
      `${apiUrl()}?action=dashboard&mode=getActivationDetails&page=${page}&per_page=${size}&username=${
        admin.user.username
      }&token=${
        admin.user.token
      }&search=${string}&paymode=${paymode}&from_date=${date[0]}&to_date=${
        date[1]
      }`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setTotalSales(response.data.total_sales);
    setTotalInstantCredit(response.data.total_instant_credit);
    setTotalDiscount(response.data.total_discount);
    setTotalGst(response.data.total_gst);
    setTotalMargin(response.data.total_margin_price);
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
                icon={
                  <Icon w="32px" h="32px" color={brandColor} as={FaUsers} />
                }
              />
            }
            name="Total Users"
            value={totalRows}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={
                  <Icon w="32px" h="32px" color={brandColor} as={FaReceipt} />
                }
              />
            }
            name="GST"
            value={totalGst}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={<Icon w="32px" h="32px" color={brandColor} as={MdSell} />}
              />
            }
            name="Sales"
            value={totalSales}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={
                  <Icon w="32px" h="32px" color={brandColor} as={TbBoxMargin} />
                }
              />
            }
            name="Shared MOI Revenue"
            value={totalMargin}
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
                    color={brandColor}
                    as={FaMoneyBillWave}
                  />
                }
              />
            }
            name="Net Income"
            value={totalSales}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={
                  <Icon w="32px" h="32px" color={brandColor} as={TbDiscount2} />
                }
              />
            }
            name="Discount"
            value={totalDiscount}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                icon={
                  <Icon w="32px" h="32px" color={brandColor} as={TbDiscount2} />
                }
              />
            }
            name="Instant Credit"
            value={totalInstantCredit}
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
            Activation Payment Details
          </Text>
          <Flex>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                window.open(
                  `${apiUrl()}?action=dashboard&mode=exportActivationDetails&username=${
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
              <MenuList p="0px" mt="10px" borderRadius="20px" border="none">
                <MenuItem>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => {
                      var newValue = [
                        e.target.checked,
                        checkedItems[1],
                        checkedItems[2],
                      ];
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
                    ICICI
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) => {
                      var newValue = [
                        checkedItems[0],
                        e.target.checked,
                        checkedItems[2],
                      ];
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
                    RAZORPAY
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    isChecked={checkedItems[2]}
                    onChange={(e) => {
                      var newValue = [
                        checkedItems[0],
                        checkedItems[1],
                        e.target.checked,
                      ];
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
                    EPIN
                  </Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>
            <SearchBar id="activationPaymentSearch" onclickable={onclickable} />
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
      </Card>
    </Box>
  );
}
