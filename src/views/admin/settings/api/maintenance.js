import {
    Button,
    FormLabel,
    HStack,
    Radio,
    RadioGroup,
    SimpleGrid,
    Stack,
    useToast,
  } from "@chakra-ui/react";
  import { AdminContext } from "contexts/AdminContext";
  import React from "react";
  import { setAdminDashData } from "variables/functions";
  
  export default function UnderMaintenanceApi(props) {
    const toast = useToast();
    const { apiData } = props;
    const [value, setValue] = React.useState(apiData.underMaintenance);
    const admin = React.useContext(AdminContext);
    return (
      <>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px">
          <>
            <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
                Website Status
            </FormLabel>
            <HStack spacing="24px">
              <RadioGroup defaultValue={value}>
                <Stack spacing={5} direction="row">
                  <Radio value="active" onChange={() => setValue("active")}>
                    Active
                  </Radio>
                  <Radio
                    value="inactive"
                    onChange={() => setValue("inactive")}
                  >
                    Inactive
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
            apiData.underMaintenance = value;
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
  