import {
  Button,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";

export default function PayoutApi(props) {
  const toast = useToast();
  const { apiData } = props;
  console.log(apiData);
  const [value, setValue] = React.useState(apiData.payOutApi);
  const [minPayoutAmount, setMinPayoutAmount] = React.useState(
    apiData.payOutApiLimit
  );
  const admin = React.useContext(AdminContext);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px">
        <>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
            Minimum Payout Amount
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="email"
            value={minPayoutAmount}
            onChange={(e) => setMinPayoutAmount(e.target.value)}
            placeholder="in INR"
            fontWeight="500"
            size="lg"
          />
        </>
        <>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
            API Provider
          </FormLabel>
          <HStack spacing="24px">
            <RadioGroup defaultValue={value}>
              <Stack spacing={5} direction="row">
                <Radio value="cashfree" onChange={() => setValue("cashfree")}>
                  Cashfree
                </Radio>
                <Radio
                  value="instantpay"
                  onChange={() => setValue("instantpay")}
                >
                  Instantpay
                </Radio>
                <Radio value="off" onChange={() => setValue("off")}>
                  Off
                </Radio>
              </Stack>
            </RadioGroup>
          </HStack>
        </>
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
          apiData.payOutApi = value;
          apiData.payOutApiLimit = minPayoutAmount;
          setAdminDashData(
            admin.user.username,
            admin.user.token,
            "setApiSettings",
            apiData
          ).then((data) => {
            if (data.error.code === "#200") {
              toast({
                title: "Success",
                description: "Api Settings Updated",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
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
    </>
  );
}
