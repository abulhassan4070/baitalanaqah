import React from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export function SearchBar(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  const [search, setSearch] = React.useState("");
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");

  return (
    <InputGroup w={{ base: "100%", md: "200px" }} {...rest}>
      <Input
        variant="search"
        fontSize="sm"
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          props.onclickable(e.target.value);
        }}
        placeholder={placeholder ? placeholder : "Search..."}
      />
      <InputRightElement
        children={
          <IconButton
            bg="inherit"
            borderRadius="inherit"
            id={props.id}
            _hover="none"
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
          ></IconButton>
        }
      />
    </InputGroup>
  );
}
