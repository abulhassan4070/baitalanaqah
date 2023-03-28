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
import { FaIdCardAlt } from "react-icons/fa";
import { MdEmail, MdTextsms } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { getAdminDashData } from "variables/functions";
import ReportStatistics from "../components/ReportStatistics";
export default function ApiReports() {
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
        type: "2",
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
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
          <Text fontSize="2xl" fontWeight="bold" mb="20px">
            API Reports
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
                      as={RiBankFill}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Bank Verifications"
              todayvalue={data.today.bank}
              monthvalue={data.month.bank}
              allvalue={data.all.bank}
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
                      as={RiBankFill}
                      color={brandColor}
                    />
                  }
                />
              }
              name="UPI Verifications"
              todayvalue={data.today.upi}
              monthvalue={data.month.upi}
              allvalue={data.all.upi}
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
                      as={FaIdCardAlt}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Pan Verifications"
              todayvalue={data.today.pan}
              monthvalue={data.month.pan}
              allvalue={data.all.pan}
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
                      as={FaIdCardAlt}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Aadhar Verifications"
              todayvalue={data.today.aadhar}
              monthvalue={data.month.aadhar}
              allvalue={data.all.aadhar}
            />
            <ReportStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={MdTextsms} color={brandColor} />
                  }
                />
              }
              name="OTP Send"
              todayvalue={data.today.otp}
              monthvalue={data.month.otp}
              allvalue={data.all.otp}
            />
            <ReportStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={MdEmail} color={brandColor} />
                  }
                />
              }
              name="Mail Send"
              todayvalue={data.today.mails}
              monthvalue={data.month.mails}
              allvalue={data.all.mails}
            />
          </SimpleGrid>
        </Box>
      )}
    </>
  );
}
