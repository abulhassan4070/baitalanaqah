import React from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import InputField from "components/fields/InputField";
import { getAdminDashData } from "variables/functions";

export default function CreateEPIN() {
  const [epinUsername, setEpinUsername] = React.useState("");
  const [epinAmount, setEpinAmount] = React.useState("");
  const [epinQuantity, setEpinQuantity] = React.useState("");
  const admin = React.useContext(AdminContext);

  const toast = useToast();

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <InputField
          label="EPIN Username"
          name="username"
          type="text"
          placeholder="Enter EPIN Username"
          value={epinUsername}
          onChange={(e) => setEpinUsername(e.target.value)}
          required
        />
        <InputField
          label="EPIN Amount"
          name="amount"
          type="text"
          placeholder="Enter EPIN Amount"
          value={epinAmount}
          onChange={(e) => setEpinAmount(e.target.value)}
          required
        />
        <InputField
          label="Number of EPINs"
          name="quantity"
          type="text"
          placeholder="Enter Number of EPINs"
          value={epinQuantity}
          onChange={(e) => setEpinQuantity(e.target.value)}
          required
        />
        <Button
          variant="brand"
          w="100%"
          mt="10px"
          onClick={() => {
            if (
              epinUsername === "" ||
              epinAmount === "" ||
              epinQuantity === ""
            ) {
              toast({
                title: "Error",
                description: "Please fill all the fields",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else {
              getAdminDashData(
                admin.user.username,
                admin.user.token,
                "createEpin",
                {
                  userid: epinUsername,
                  amount: epinAmount,
                  count: epinQuantity,
                }
              ).then((res) => {
                if (res.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: res.error.message,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  });
                  setEpinUsername("");
                  setEpinAmount("");
                  setEpinQuantity("");
                } else {
                  toast({
                    title: "Error",
                    description: res.error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                }
              });
            }
          }}
        >
          Create EPIN
        </Button>
      </Card>
    </Box>
  );
}
