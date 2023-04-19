import { Box, Text } from "@chakra-ui/react";

export function HeaderText({ title, subtitle }) {
  return (
    <Box textAlign={"center"}>
      <h2>{title}</h2>
      <Text className="hfont" fontSize={"4xl"} fontWeight={"bold"}>
        {subtitle}
      </Text>
    </Box>
  );
}
