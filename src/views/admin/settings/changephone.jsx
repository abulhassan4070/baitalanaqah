import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import dayjs from "dayjs";
import React from "react";
import DataTable from "react-data-table-component";
import { getAdminDashData } from "variables/functions";
import { setAdminDashData } from "variables/functions";

export default function ChangePhone() {
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_phonechangehistory"
    ).then((data) => {
      if (data.error.code === "#200") {
        setData(data.data);
      } else {
        toast({
          title: "Error",
          description: data.error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "Mahabhojan Id",
      selector: (row) => row.user_id,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) =>
        "Phone number changed to " + row.telephone2 + " from " + row.telephone1,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.created_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px">
          <InputField
            label="MB Username"
            name="username"
            type="text"
            placeholder="Enter the username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />{" "}
          <InputField
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="Enter the phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </SimpleGrid>
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          onClick={() => {
            setAdminDashData(
              admin.user.username,
              admin.user.token,
              "set_userphonenumber",
              {
                user_id: username,
                telephone: phone,
              }
            ).then((data) => {
              if (data.error.code === "#200") {
                toast({
                  title: "Success",
                  description: "Phone number updated",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                setValue(value + 1);
              } else {
                toast({
                  title: "Error",
                  description: data.error.message,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
            });
          }}
        >
          Update
        </Button>
      </Card>
      <Card direction="column" mt="20px" w="100%" px="0px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Phone Change History
          </Text>
        </Flex>
        <DataTable columns={columns} data={data} />
      </Card>
    </Box>
  );
}
