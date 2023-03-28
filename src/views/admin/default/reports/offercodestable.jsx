import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import dayjs from "dayjs";
import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import DatePicker from "react-multi-date-picker";
import MiniStatistics from "components/card/MiniStatistics";
import { getAdminDashData } from "variables/functions";
import { FaMoneyBillWave } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import IconBox from "components/icons/IconBox";

export default function OfferCodesTable() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const [checkedItems, setCheckedItems] = React.useState([true, true]);
  const [data1, setData1] = React.useState(null);
 
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const toast = useToast();
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
      selector: (row) => row.user_id,
    },
    {
      name: "Offer Code",
      selector: (row) => row.pin_no,
    },
    {
      name: "Status",
      selector: (row) =>
        row.status.toString() === "1" ? "Inactive" : "Active",
    },
    {
      name: "Used By",
      selector: (row) => row.used_by,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.create_at).format("DD-MM-YYYY hh:mm A"),
    },
    {
      name: "Action",
      selector: (row) =>
        row.used_by === "" && (
          <Button
            size="sm"
            colorScheme="red"
            onClick={() => {
              var res = window.confirm("Are you sure you want to delete?");
              if (res) {
                axios
                  .get(
                    `${apiUrl()}?action=dashboard&mode=deleteOfferCode&username=${
                      admin.user.username
                    }&token=${admin.user.token}&offerCode=${row.pin_no}`
                  )
                  .then((res) => {
                    if (res.data.error.code === "#200") {
                      toast({
                        title: "Deleted Successfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                      fetchActivationDetails(
                        currentPage,
                        perPage,
                        search,
                        value
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >
            Delete
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
      `${apiUrl()}?action=dashboard&mode=getOffercodeDetails&page=${page}&per_page=${size}&username=${
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
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getReportStatsDetails",
      {
        type: "5",
      }
    ).then((data) => {
        if (data.error.code === "#200") {
        setData1(data.data);
      } else {
        console.log(data.error);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {data1 && (
        <Box p="20px">
          <Text fontSize="2xl" fontWeight="bold" mb="20px">
            Offer Codes
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2, "2xl": 3 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              value={data1.totalOffers}
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={FaMoneyBillWave}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Total Offercodes"
            />
            <MiniStatistics
              value={data1.activeOffers}
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={TbDiscount2}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Active Offercodes"
            />
            <MiniStatistics
              value={data1.inactiveOffers}
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={TbDiscount2}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Inactive Offercodes"
            />
          </SimpleGrid>
        </Box>
      )}
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            Offer Codes Details
          </Text>
          <Flex>
            <Button
              colorScheme="blue"
              mr="2"
              onClick={() => {
                window.open(
                  `${apiUrl()}?action=dashboard&mode=exportOffercodeDetails&username=${
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
                  Offer Type
                </Button>
              </MenuButton>
              <MenuList p="0px" mt="10px" borderRadius="20px" border="none">
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
                    ACTIVE
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
                    INACTIVE
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
