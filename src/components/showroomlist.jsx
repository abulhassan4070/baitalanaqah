import React from "react";
import { Box, Text, Link, SimpleGrid, Flex } from "@chakra-ui/react";



export default function ShowroomsList(props) {
  return (
    <SimpleGrid
      columns={props.columns ? props.columns : { base: 1, md: 2, lg: 3 }}
      spacing="10px"
    >
      {props.cities.map((cityObj) => {
        return (
          <Box
            key={cityObj.city}
            h="wrap"
            px="20px"
            py="10px"
            boxShadow="lg"
            border={"1px solid rgb(240, 240, 240)"}
            _hover={{ boxShadow: "md" }}
          >
            <Link style={{ textDecoration: "none" }}>
              <Text pt="5px">{cityObj.city}</Text>
              <Text pt="5px" color="gray.500">
                {cityObj.street}
              </Text>
              <Text color="gray.500">{cityObj.state}</Text>
              <Box mt="10px"></Box>
              {props.button && (
                <Flex>
                  <Box className="buttonStyle" mt="10px">
                    <span>Book Now</span>
                  </Box>
                </Flex>
              )}
            </Link>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
