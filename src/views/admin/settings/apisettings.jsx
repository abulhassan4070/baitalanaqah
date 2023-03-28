import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { getAdminDashData } from "variables/functions";
import KycVerificationApi from "./api/kyc";
import UnderMaintenanceApi from "./api/maintenance";
import PayoutApi from "./api/payout";
import SmsApi from "./api/sms";

export default function ApiSettings() {
  const [apiData, setApiData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getApiSettings"
    ).then((res) => {
      setApiData(res.data);
    });
  }, [admin]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {apiData && (
        <Card direction="column" w="100%" px="10px">
          <Accordion allowToggle={true}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Payout API
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <PayoutApi apiData={apiData} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    KYC API
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <KycVerificationApi apiData={apiData} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SMS API
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SmsApi apiData={apiData} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Site Status
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnderMaintenanceApi apiData={apiData} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Card>
      )}
    </Box>
  );
}
