import {
  Text,
  Box,
  useColorModeValue,
  Button,
  Input,
  FormLabel,
  InputGroup,
  Select,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { useLocation } from "react-router-dom";
import { setAdminDashData } from "variables/functions";

export default function AddOrDeduct() {
  const toast = useToast();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [amount, setAmount] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [transtype, setTranstype] = React.useState("credit");
  const [wallettype, setWallettype] = React.useState("live");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const admin = React.useContext(AdminContext);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card
        direction="column"
        w="100%"
        px="25px"
       
      >
        <FormLabel
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          Username<Text>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          mb="24px"
          fontWeight="500"
          size="lg"
          value={id}
          readOnly={true}
        />
        <FormLabel
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          display="flex"
        >
          Enter Amount<Text>*</Text>
        </FormLabel>
        <InputGroup size="md">
          <Input
            isRequired={true}
            fontSize="sm"
            placeholder="Enter Amount in INR"
            mb="24px"
            size="lg"
            type="text"
            variant="auth"
            fontWeight="500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputGroup>

        <FormLabel
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          display="flex"
        >
          Enter Remarks<Text>*</Text>
        </FormLabel>
        <InputGroup size="md">
          <Input
            isRequired={true}
            fontSize="sm"
            placeholder="Enter Remarks"
            mb="24px"
            size="lg"
            type="text"
            variant="auth"
            fontWeight="500"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </InputGroup>

        <FormLabel
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          display="flex"
        >
          Transaction Type<Text>*</Text>
        </FormLabel>
        <Select
          mb="24px"
          placeholder="Select type"
          required
          value={transtype}
          onChange={(e) => {
            setTranstype(e.target.value);
          }}
        >
          <option value="debit">Deduct</option>
          <option value="credit">Add</option>
        </Select>
        <FormLabel
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          display="flex"
        >
          Wallet Type<Text>*</Text>
        </FormLabel>
        <Select
          mb="24px"
          placeholder="Select wallet"
          required
          value={wallettype}
          onChange={(e) => setWallettype(e.target.value)}
        >
          <option value="live">Live Wallet</option>
          <option value="reward">Reward Wallet</option>
          <option value="epin">EPIN Wallet</option>
          <option value="offer">Offer Wallet</option>
        </Select>
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          onClick={() => {
            if (amount === "" || remarks === "") {
              toast({
                title: "Error",
                description: "Please fill all the fields",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              return;
            }
            setAdminDashData(
              admin.user.username,
              admin.user.token,
              "setUserWalletDetails",
              {
                transtype: transtype,
                wallettype: wallettype,
                amount: amount,
                remarks: remarks,
                userid: id,
              }
            ).then((data) => {
              if (data.error.code === "#200") {
                toast({
                  title: "Success",
                  description: "User wallet updated successfully",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                setAmount("");
                setRemarks("");
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
    </Box>
  );
}
