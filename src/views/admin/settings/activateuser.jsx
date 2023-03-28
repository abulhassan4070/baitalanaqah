import {
  Box,
  Button,
  Container,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Stack,
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
import { NavLink } from "react-router-dom";
import { getAdminDashData } from "variables/functions";
import { setAdminDashData } from "variables/functions";

export default function ActivateUser() {
  const [username, setUsername] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [apiData, setApiData] = React.useState([]);
  const [value, setValue] = React.useState("1");
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_activateuser"
    ).then((res) => {
      setApiData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card px="10px">
        <FormLabel
          display="flex"
          ms="10px"
          fontSize="sm"
          fontWeight="bold"
          _hover={{ cursor: "pointer" }}
        >
          Activate User
        </FormLabel>
        <InputField
          name="username"
          type="text"
          placeholder="Enter the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          label="Amount"
          name="name"
          type="text"
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <FormLabel
          display="flex"
          ms="10px"
          fontSize="sm"
          fontWeight="bold"
          _hover={{ cursor: "pointer" }}
        >
          Activation Type
        </FormLabel>
        <Container mb={4} ms={2}>
          <HStack>
            <RadioGroup value={value}>
              <Stack spacing={5} direction="row">
                <Radio
                  value="ICICI"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                >
                  UPI
                </Radio>
                <Radio
                  value="RAZORPAY"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                >
                  RAZORPAY
                </Radio>
                <Radio
                  value="EPIN"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                >
                  EPIN
                </Radio>
              </Stack>
            </RadioGroup>
          </HStack>
        </Container>
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
              "activateUserAccount",
              {
                userid: username,
                amount: amount,
                paymenttype: value,
              }
            ).then((data) => {
              if (data.error.code === "#200") {
                toast({
                  title: "Success",
                  description: "User Activated Successfully",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                setValue(value + 1);
                setUsername("");
                setAmount("");
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
      </Card>
      <br />
      <Card px="10px">
        <Text fontSize="xl" mb="10px">
          Admin Activated Users
        </Text>
        <Table variant="striped" size="sm" w="100%">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Username</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            {apiData.map((data, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>
                  <NavLink
                    to={`/admin/userreports/singleuser?id=${data.user_id}`}
                  >
                    {data.user_id}
                  </NavLink>
                </Td>
                <Td>{data.first_name + " " + data.last_name}</Td>
                <Td>{data.telephone}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}
