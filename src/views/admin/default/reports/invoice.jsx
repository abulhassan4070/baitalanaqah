import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { useLocation } from "react-router-dom";
import { pageUrl } from "variables/constants";
import { AdminContext } from "contexts/AdminContext";

export default function OfferPurchaseInvoice() {
  const location = useLocation().search;
  const userid = new URLSearchParams(location).get("id");
  const orderid = new URLSearchParams(location).get("orderid");

  const admin = React.useContext(AdminContext);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" px="0px">
        <Text fontSize="xl" fontWeight="bold">
          Direct Report
        </Text>
        <Center>
          <iframe
            src={`${pageUrl()}/cdn/api/appview.php?page=invoice&inv=${orderid}&username=${
              admin.user.username
            }&token=${admin.user.token}&userid=${userid}`}
            height="700px"
            width="100%"
            title="Invoice"
          />
        </Center>
      </Card>
    </Box>
  );
}
