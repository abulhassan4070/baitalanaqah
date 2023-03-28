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
import { IoCash } from "react-icons/io5";
import { TbBoxMargin } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { getAdminDashData } from "variables/functions";
import ReportStatistics from "../components/ReportStatistics";
export default function WithdrawalReport() {
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
        type: "3",
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
          to="/admin/reports/withdrawaltablereport"
          style={{ textDecoration: "none" }}
        >
          <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Text fontSize="2xl" fontWeight="bold" mb="20px">
              Withdrawal Reports
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
                      <Icon w="32px" h="32px" as={IoCash} color={brandColor} />
                    }
                  />
                }
                name="Payout Amount"
                todayvalue={data.today.withdrawal}
                monthvalue={data.month.withdrawal}
                allvalue={data.all.withdrawal}
              />
              <ReportStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon w="32px" h="32px" as={IoCash} color={brandColor} />
                    }
                  />
                }
                name="TDS"
                todayvalue={data.today.tds}
                monthvalue={data.month.tds}
                allvalue={data.all.tds}
              />
              <ReportStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon w="32px" h="32px" as={IoCash} color={brandColor} />
                    }
                  />
                }
                name="Service Charge"
                todayvalue={data.today.adminCharge}
                monthvalue={data.month.adminCharge}
                allvalue={data.all.adminCharge}
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
                name="Other Charges"
                todayvalue={data.today.extraCharge}
                monthvalue={data.month.extraCharge}
                allvalue={data.all.extraCharge}
              />
            </SimpleGrid>
          </Box>
        </NavLink>
      )}
    </>
  );
}
