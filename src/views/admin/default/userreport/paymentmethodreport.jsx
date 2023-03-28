import { Text, Box, useToast, Button } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import dayjs from "dayjs";
import { AdminContext } from "contexts/AdminContext";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { userApiUrl } from "variables/constants";
import DataTable from "react-data-table-component";
export default function SingleUserPaymentMethodsReport() {
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [id, setId] = React.useState(1);
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
          `${userApiUrl()}?action=dashboard&mode=getBankDetails&username=${
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
  }, [userid, id]);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
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
      name: "Type",
      selector: (row) => {
        if (row.ac_no.includes("@")) {
          return <Text fontSize="sm">UPI</Text>;
        } else {
          return <Text fontSize="sm">Bank</Text>;
        }
      },
      sortable: true,
    },
    {
      name: "Account Name",
      selector: (row) => row.acc_name,
      sortable: true,
    },
    {
      name: "Account Number",
      selector: (row) => row.ac_no,
      sortable: true,
    },
    {
      name: "Bank Name",
      selector: (row) => row.bank_name,
      sortable: true,
    },
    {
      name: "IFSC code",
      selector: (row) => row.swift_code,
      sortable: true,
    },
    {
      name: "Branch Name",
      selector: (row) => row.branch_nm,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => dayjs(row.create_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to delete this payment method?"
              )
            ) {
              axios
                .get(
                  `${userApiUrl()}?action=dashboard&mode=deletePaymentMethod&username=${
                    admin.user.username
                  }&token=${admin.user.token}&id=${row.id}&userid=${userid}`
                )
                .then((res) => {
                  if (res.data.error.code === "#200") {
                    toast({
                      title: "Success",
                      description: res.data.error.message,
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                    setId(id + 1);
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
            }
          }}
        >
          Delete
        </Button>
      ),
      sortable: true,
    },
  ];
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="10px">
        {data && (
          <>
            <Text fontSize="xl" fontWeight="bold">
              Payment Method Details
            </Text>
            <DataTable columns={columns} data={data} />
          </>
        )}
      </Card>
    </Box>
  );
}
