import { Text, Box, useToast, Icon, Button } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import DataTable from "react-data-table-component";
import { FaMapMarkerAlt } from "react-icons/fa";
import { apiUrl } from "variables/constants";
export default function SingleUserLocationReport() {
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
          `${apiUrl()}?action=dashboard&mode=getUserLocationDetails&username=${
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
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Latitude",
      selector: (row) => row.lat,
      sortable: true,
    },
    {
      name: "Longitude",
      selector: (row) => row.lng,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => dayjs(row.created_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
    {
      name: "View",
      selector: (row) => (
        <Button
          onClick={() => {
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${row.lat},${row.lng}`
            );
          }}
        >
          <Icon as={FaMapMarkerAlt}></Icon>
        </Button>
      ),
    },
  ];
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="10px">
        {data && (
          <>
            <Text fontSize="xl" fontWeight="bold">
              User Login History
            </Text>
            <DataTable columns={columns} data={data} />
          </>
        )}
      </Card>
    </Box>
  );
}
