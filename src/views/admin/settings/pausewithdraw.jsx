import {
  Box,
  Button,
  Icon,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { MdDelete } from "react-icons/md";
import { getAdminDashData } from "variables/functions";
import { setAdminDashData } from "variables/functions";

export default function PauseWithdrawal() {
  const [username, setUsername] = React.useState("");
  const [apiData, setApiData] = React.useState([]);
  const [value, setValue] = React.useState("1");
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_pausewithdrawal"
    ).then((res) => {
      setApiData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card px="10px">
        <Text fontSize="xl" mb="10px">
          Paush User Withdrawals
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
          <InputField
            name="username"
            type="text"
            placeholder="Enter the username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            onClick={() => {
              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "set_pausewithdrawal",
                {
                  value: "0",
                  user_id: username,
                }
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "User withdrawal has been paused",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                  setValue(value + 1);
                  setUsername("");
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
            Add
          </Button>
        </SimpleGrid>
      </Card>
      <br />
      <Card px="10px">
        <Text fontSize="xl" mb="10px">
          Paushed Users List
        </Text>
        <Table variant="striped" size="sm" w="100%">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Username</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {apiData.map((data, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{data.user_id}</Td>
                <Td>{data.first_name + " " + data.last_name}</Td>
                <Td>{data.telephone}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    mr="2"
                    onClick={() => {
                      setAdminDashData(
                        admin.user.username,
                        admin.user.token,
                        "set_pausewithdrawal",
                        {
                          user_id: data.user_id,
                          value: "1",
                        }
                      ).then((data) => {
                        if (data.error.code === "#200") {
                          toast({
                            title: "Success",
                            description: "User withdrawal has been unpaused",
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
                    <Icon as={MdDelete} />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}
