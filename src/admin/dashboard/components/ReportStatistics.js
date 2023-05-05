import { Flex, SimpleGrid, Stat, StatLabel, Text } from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
export default function ReportStatistics(props) {
  const { startContent, endContent, name, todayvalue, monthvalue, allvalue } =
    props;
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card  py="15px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "md",
            }}
          >
            {name}
          </StatLabel>
          <SimpleGrid columns={3} gap="10px">
            <div>
              <Text color="green.500" fontSize="xl" fontWeight="700" me="5px">
                {todayvalue}{" "}
              </Text>
              <Text as="span" fontSize="xs" color="secondaryGray.600">
                Today
              </Text>
            </div>
            <div>
              <Text color="green.500" fontSize="xl" fontWeight="700" me="5px">
                {monthvalue}{" "}
              </Text>
              <Text as="span" fontSize="xs" color="secondaryGray.600">
                This Month
              </Text>
            </div>
            <div>
              <Text color="green.500" fontSize="xl" fontWeight="700" me="5px">
                {allvalue}{" "}
              </Text>
              <Text as="span" fontSize="xs" color="secondaryGray.600">
                All Time
              </Text>
            </div>
          </SimpleGrid>
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
