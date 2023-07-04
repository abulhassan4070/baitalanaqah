// Chakra imports
import {
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
// Custom components
import React from "react";

export default function InputField(props) {
  const { id, label, extra, placeholder, type, mb, padding, ...rest } = props;
  // Chakra Color Mode
  return (
    <Flex direction="column" mb={mb ? mb : "30px"}>
      <FormLabel
        display="flex"
        ms="10px"
        htmlFor={id}
        fontSize="sm"
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
      >
        {label}
        <Text fontSize="sm" fontWeight="400" ms="2px">
          {extra}
        </Text>
      </FormLabel>
      <Input
        {...rest}
        type={type}
        id={id}
        fontWeight="500"
        placeholder={placeholder}
        _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
        h="44px"
        maxh="44px"
        padding={padding ? padding : "0 10px"}
      />
    </Flex>
  );
}
