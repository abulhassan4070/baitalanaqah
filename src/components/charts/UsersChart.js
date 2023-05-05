import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";
import { getAdminDashData } from "variables/functions";
import { AdminContext } from "contexts/AdminContext";

export default function UserChart(props) {
  const admin = React.useContext(AdminContext);
  const [data, setData] = React.useState({
    freeusers: 0,
    paidusers: 0,
    totalusers: 0,
    deliverypartners: 0,
    deliveryboys: 0,
    vendors: 0,
  });
  React.useEffect(() => {
    console.log(admin);
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getDashboardDetails"
    ).then((data) => {
      if (data.error.code === "#200") {
        setData(data.data);
      } else {
        console.log(data.error);
      }
    });
  }, [admin]);
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          User Activation Status
        </Text>
      </Flex>
      {data.paidusers > 0 && (
        <PieChart
          h="100%"
          w="100%"
          chartData={[data.paidusers, data.freeusers]}
          chartOptions={pieChartOptions(
            ["#4318FF", "#6AD2FF"],
            ["Paid Users", "Free Users"]
          )}
        />
      )}
      <Card flexDirection="row" w="100%" p="15px" px="20px" mt="15px" mx="auto">
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#4318FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Paid Users
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {((data.paidusers / data.totalusers) * 100).toFixed(2)}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Free Users
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {((data.freeusers / data.totalusers) * 100).toFixed(2)}%
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
