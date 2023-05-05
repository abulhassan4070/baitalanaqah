import React from 'react';

// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  return (
    <Flex align="center" direction="column">
      <Text
        color={useColorModeValue('secondaryGray.900', 'white')}
        fontSize="xl"
        fontWeight="700"
        lineHeight="100%"
      >
        Bait Al Anaqah
      </Text>
      <HSeparator mt="20px" />
    </Flex>
  );
}

export default SidebarBrand;
