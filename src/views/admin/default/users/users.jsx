import {
  Flex,
  Text,
  Box,
  Button,
  Icon,
  SimpleGrid,
  Spacer,
  Container,
  HStack,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import DataTable from "react-data-table-component";
import { AdminContext } from "contexts/AdminContext";
import MiniStatistics from "components/card/MiniStatistics";
import { apiUrl } from "variables/constants";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { IoCash } from "react-icons/io5";
import { brandColor } from "variables/constants";
import IconBox from "components/icons/IconBox";
import { boxBg } from "variables/constants";
import { getAdminDashData } from "variables/functions";
import dayjs from "dayjs";
import DatePicker from "react-multi-date-picker";
export default function Users() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const admin = React.useContext(AdminContext);
  const [statsData, setstatsData] = React.useState(null);

  var date = new Date();
  var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [date1, setDate1] = React.useState([
    dayjs(last).format("YYYY-MM-DD"),
    dayjs(date).format("YYYY-MM-DD"),
  ]);

  React.useEffect(() => {
    console.log(admin);
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getReportStatsDetails",
      {
        type: "4",
      }
    ).then((data) => {
      console.log(data);
      if (data.error.code === "#200") {
        setstatsData(data.data);
      } else {
        console.log(data.error);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const returnSelector = (text, kyc, aadhar) => (
    <Text
      color={
        kyc === "1" && aadhar !== ""
          ? "green.500"
          : kyc === "0" && aadhar !== ""
          ? "red.500"
          : "grey.500"
      }
    >
      {text}
    </Text>
  );
  const columns = [
    {
      name: "S.No",
      selector: (row, index) =>
        returnSelector(index + 1, row.kyc_status.toString(), row.aadharNo),
    },
    {
      name: "User Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.user_id}`}>
          {returnSelector(row.user_id, row.kyc_status.toString(), row.aadharNo)}
        </NavLink>
      ),
    },
    {
      name: "Full Name",
      selector: (row) =>
        returnSelector(
          row.first_name + " " + row.last_name,
          row.kyc_status.toString(),
          row.aadharNo
        ),
    },
    {
      name: "Phone",
      selector: (row) =>
        returnSelector(row.telephone, row.kyc_status.toString(), row.aadharNo),
    },
    {
      name: "Invitee Id",
      selector: (row) => (
        <NavLink to={`/admin/userreports/singleuser?id=${row.ref_id}`}>
          {returnSelector(row.ref_id, row.kyc_status.toString(), row.aadharNo)}
        </NavLink>
      ),
    },
    {
      name: "Direct Invitees",
      selector: (row) =>
        returnSelector(
          row.active_direct_invites,
          row.kyc_status.toString(),
          row.aadharNo
        ),
    },
    {
      name: "Team Invitees",
      selector: (row) =>
        returnSelector(
          row.active_invites,
          row.kyc_status.toString(),
          row.aadharNo
        ),
    },
    {
      name: "Activation Date",
      selector: (row) =>
        returnSelector(
          dayjs(row.activation_date).format("DD-MM-YYYY hh:mm A"),
          row.kyc_status.toString(),
          row.aadharNo
        ),
    },
    {
      name: "Registration Date",
      selector: (row) =>
        returnSelector(
          dayjs(row.registration_date).format("DD-MM-YYYY hh:mm A"),
          row.kyc_status.toString(),
          row.aadharNo
        ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [value, setValue] = React.useState(1);
  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const fetchEpins = async () => {
    setLoading(true);
    const response = await axios.get(
      `${apiUrl()}?action=dashboard&mode=getUsersDetails&page=${currentPage}&per_page=${perPage}&username=${
        admin.user.username
      }&token=${admin.user.token}&type=${value}&search=${search}&from_date=${
        date1[0]
      }&to_date=${date1[1]}`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const onclickable = async (string) => {
    setSearch(string);
  };
  React.useEffect(() => {
    fetchEpins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, currentPage, perPage, search, date1]);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {statsData && (
        <SimpleGrid columns={{ base: 1, md: 2, "2xl": 3 }} gap="20px" mb="20px">
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="Total Users"
            value={statsData.totalUsers}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="Active users"
            value={statsData.paidUsers}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="Inactive users"
            value={statsData.freeUsers}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="KYC Verified users"
            value={statsData.kycVerified}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="KYC Mismatch users"
            value={statsData.kycNotVerified}
          />

          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={<Icon w="32px" h="32px" as={IoCash} color={brandColor} />}
              />
            }
            name="KYC Pending users"
            value={statsData.kycPending}
          />
        </SimpleGrid>
      )}
      <Card direction="column" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Users List
          </Text>
          <Spacer />
          <Button
            colorScheme="blue"
            mr="2"
            onClick={() => {
              window.open(
                `${apiUrl()}?action=dashboard&mode=exportUsersDetails&username=${
                  admin.user.username
                }&token=${
                  admin.user.token
                }&type=${value}&search=${search}&from_date=${
                  date1[0]
                }&to_date=${date1[1]}`
              );
            }}
          >
            Export
          </Button>
          <DatePicker
            zIndex={1000}
            value={date1}
            onChange={(e) => {
              if (e.length === 2) {
                var date1 = dayjs(e[0]).format("YYYY-MM-DD");
                var date2 = dayjs(e[1]).format("YYYY-MM-DD");
                setDate1([date1, date2]);
              } else {
                setDate1([dayjs(e[0]).format("YYYY-MM-DD")]);
              }
            }}
            range
            style={{
              width: "100%",
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
          <SearchBar id="userSearch" onclickable={onclickable} />
        </Flex>
        <Container mb={4} ms={2}>
          <HStack>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio value="1" onChange={() => setValue(1)} checked>
                  Active Users
                </Radio>
                <Radio value="0" onChange={() => setValue(0)}>
                  Inactive Users
                </Radio>
              </Stack>
            </RadioGroup>
          </HStack>
        </Container>
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
