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
import { FaMoneyBillWave, FaReceipt, FaUsers } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { TbBoxMargin, TbDiscount2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { getAdminDashData } from "variables/functions";
import ReportStatistics from "../components/ReportStatistics";
export default function ActivationReports() {
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
        type: "0",
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
          to="/admin/reports/activationtablereport"
          style={{ textDecoration: "none" }}
        >
          <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Text fontSize="2xl" fontWeight="bold" mb="20px">
              Activation Reports
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 2, "2xl": 3 }}
              gap="20px"
              mb="20px"
            >
              <ReportStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon w="32px" h="32px" as={FaUsers} color={brandColor} />
                    }
                  />
                }
                name="Active Users"
                todayvalue={data.today.activeUsers}
                monthvalue={data.month.activeUsers}
                allvalue={data.all.activeUsers}
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
                      <Icon w="32px" h="32px" as={MdSell} color={brandColor} />
                    }
                  />
                }
                name="Turnover"
                todayvalue={data.today.sales}
                monthvalue={data.month.sales}
                allvalue={data.all.sales}
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
                        as={TbBoxMargin}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Shared MOI Revenue"
                todayvalue={data.today.marginDistribution}
                monthvalue={data.month.marginDistribution}
                allvalue={data.all.marginDistribution}
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
                        as={FaMoneyBillWave}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Net Income"
                todayvalue={data.today.netIncome}
                monthvalue={data.month.netIncome}
                allvalue={data.all.netIncome}
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
                        as={TbDiscount2}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Discount"
                todayvalue={data.today.discount}
                monthvalue={data.month.discount}
                allvalue={data.all.discount}
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
                        as={TbDiscount2}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Instant Credit"
                todayvalue={data.today.instantCredit}
                monthvalue={data.month.instantCredit}
                allvalue={data.all.instantCredit}
              />
            </SimpleGrid>
          </Box>
        </NavLink>
      )}
    </>
  );
}
