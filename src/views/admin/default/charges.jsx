import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button,
  FormLabel,
  Text,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function Charges() {
  const [apiData, setApiData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getChargesSettings"
    ).then((res) => {
      setApiData(res.data);
      console.log(res.data);
    });
  }, [admin]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {apiData && (
        <Card
          direction="column"
          w="100%"
          px="10px"
         
        >
          <Accordion allowToggle={true}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    User Charges
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <UpdateCharge
                  title="User Charges"
                  apiData={apiData}
                  apiKey="user"
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Delivery Boy Charges
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <UpdateCharge
                  title="Delivery boy Charges"
                  apiData={apiData}
                  apiKey="boy"
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Delivery Partner Charges
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <UpdateCharge
                  title="User Charges"
                  apiData={apiData}
                  apiKey="partner"
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Vendor Charges
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <UpdateCharge
                  title="User Charges"
                  apiData={apiData}
                  apiKey="vendor"
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Card>
      )}
    </Box>
  );
}

function UpdateCharge(props) {
  const { apiData, apiKey } = props;
  console.log(apiData);
  console.log(apiKey);
  const [serviceCharge, setServiceCharge] = React.useState(
    apiData[apiKey]["service_chrge"]
  );
  const [tds, setTds] = React.useState(apiData[apiKey]["tds"]);
  const [otherCharge, setOtherCharge] = React.useState(
    apiData[apiKey]["other_chrg"]
  );
  const [otherChargeRemark, setOtherChargeRemark] = React.useState(
    apiData[apiKey]["remark"]
  );
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px">
        <>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
            Service Charge
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder="in Percentage %"
            fontWeight="500"
            size="lg"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(e.target.value)}
          />
        </>
        <>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
            TDS
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder="in Percentage %"
            fontWeight="500"
            size="lg"
            value={tds}
            onChange={(e) => setTds(e.target.value)}
          />
        </>
        <>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
            Other Charges
            <Text color="gray.500" fontSize="sm">
              &nbsp;(leave 0 if not applicable)
            </Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder="in Percentage %"
            fontWeight="500"
            size="lg"
            value={otherCharge}
            onChange={(e) => setOtherCharge(e.target.value)}
          />
        </>
        <>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
            Other Charge Remark
            <Text color="gray.500" fontSize="sm">
              &nbsp;(leave blank if other charges is 0)
            </Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder="Explain about other charges"
            fontWeight="500"
            size="lg"
            value={otherChargeRemark}
            onChange={(e) => setOtherChargeRemark(e.target.value)}
          />
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
          apiData[apiKey]["service_chrge"] = serviceCharge;
          apiData[apiKey]["tds"] = tds;
          apiData[apiKey]["other_chrg"] = otherCharge;
          apiData[apiKey]["remark"] = otherChargeRemark;
          setAdminDashData(
            admin.user.username,
            admin.user.token,
            "setChargesSettings",
            apiData
          ).then((data) => {
            if (data.error.code === "#200") {
              toast({
                title: "Success",
                description: "Charges Updated Successfully",
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
