import { Text, Box, useToast } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { userApiUrl } from "variables/constants";
import DataTable from "react-data-table-component";
import dayjs from "dayjs";
export default function SingleUserWithdrawalReport() {
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [data, setData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  const toast = useToast();
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
          `${userApiUrl()}?action=dashboard&mode=getAllWithdrawals&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          if (res.data.error.code === "#200") {
            setData(res.data.data);
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
  }, [userid]);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "Transaction ID",
      sortable: true,
      selector: (row, index) => row.transaction_number,
    },
    {
      name: "User ID",
      selector: (row) => (
        <>
          <NavLink to={`/admin/userreports/singleuser?id=${row.user_id}`}>
            {row.user_id}
          </NavLink>
        </>
      ),
      sortable: true,
    },
    {
      name: "Account Details",
      selector: (row) => {
        if (row.pay_mode === "UPI") {
          return (
            <>
              <Text fontSize="sm">
                <b>UPI Name:</b>
                <br /> {row.acc_name}
              </Text>
              <Text fontSize="sm">
                <b>UPI Number:</b>
                <br /> {row.acc_number}
              </Text>
            </>
          );
        } else {
          return (
            <>
              <Text fontSize="sm">
                <b>Account Name:</b>
                <br /> {row.acc_name}
              </Text>
              <Text fontSize="sm">
                <b>Account Number:</b>
                <br /> {row.acc_number}
              </Text>
              <Text fontSize="sm">
                <b>IFSC Code:</b>
                <br /> {row.swift_code}
              </Text>
              <Text fontSize="sm">
                <b>Bank Name:</b>
                <br /> {row.bank_nm}
              </Text>
              <Text fontSize="sm">
                <b>Branch Name:</b>
                <br /> {row.branch_nm}
              </Text>
            </>
          );
        }
      },
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => {
        return (
          <>
            <Text fontSize="sm">
              Requested: {row.total_paid_amount}
              <br />
              Approved: {row.request_amount}
            </Text>
          </>
        );
      },
      sortable: true,
    },
    {
      name: "Charge",
      selector: (row) => {
        return (
          <>
            <Text fontSize="sm">
              Service Charge: {row.adminCharge}
              <br />
              Other Charges: {row.extraCharge}
              <br />
              TDS: {row.tdsCharge}
            </Text>
          </>
        );
      },
    },
    {
      name: "Date",
      selector: (row) => dayjs(row.updated_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
  ];
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="10px">
        {data && (
          <>
            <Text fontSize="xl" fontWeight="bold">
              Withdrawal Details
            </Text>
            <DataTable columns={columns} data={data} />
          </>
        )}
      </Card>
    </Box>
  );
}
