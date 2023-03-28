import {
  Box,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { FaReceipt, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getAdminDashData } from "variables/functions";
import ReportStatistics from "../components/ReportStatistics";
export default function OfferPurchaseReport() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const admin = React.useContext(AdminContext);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    console.log(admin);
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getReportStatsDetails",
      {
        type: "1",
      }
    ).then((data) => {
      if (data.error.code === "#200") {
        setData(data.data);
      } else {
        console.log(data.error);
      }
    });
  }, [admin]);
  return (
    <>
      {data && (
        <NavLink
          to="/admin/reports/offerpurchasetablereport"
          style={{ textDecoration: "none" }}
        >
          <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Text fontSize="2xl" fontWeight="bold" mb="20px">
              Offer Purchase Reports
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, "2xl": 3 }} gap="20px">
              <ReportStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={FaReceipt}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="GST"
                todayvalue={data.today.gst}
                monthvalue={data.month.gst}
                allvalue={data.all.gst}
              />
              <ReportStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={FaShoppingCart}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Offer Purchases"
                todayvalue={data.today.snacks + data.today.events}
                monthvalue={data.month.snacks + data.month.events}
                allvalue={data.all.snacks + data.all.events}
              />
            </SimpleGrid>
          </Box>
        </NavLink>
      )}
    </>
  );
}
