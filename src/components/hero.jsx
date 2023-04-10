import { AbsoluteCenter, Box, Text, Stack, Flex } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Stack position="relative" height="100vh">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source
          src="https://www.baitalanaqah.com/img/video.mp4"
          type="video/mp4"
        />
      </video>
      <AbsoluteCenter height="100vh" width="50%" display={"flex"}>
        <Flex justifyContent="center" alignItems="center" display={"flex"}>
          <Box textAlign="center">
            <Text color="white" fontSize="3xl" fontWeight="bold">
              BAIT AL ANAQAH
            </Text>
            <Text color="white">Fashion that tells your story.</Text>
            <br />
            <Flex justifyContent="center">
              <Box width="fit-content" className="content borderWhite">
                <Box
                  className="outer borderLeftRight borderWhite"
                  mt="-5px"
                ></Box>
                <Box
                  width="fit-content"
                  className="innerContent borderLeftRight borderWhite"
                  color="white"
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                >
                  <Text p="10px 15px" textTransform="uppercase">
                    Book an Appointment
                  </Text>
                </Box>
                <Box
                  className="outer borderLeftRight borderWhite"
                  mb="-5px"
                ></Box>
              </Box>
              <Box p={3}></Box>
              <Box width="fit-content" className="content borderWhite">
                <Box
                  className="outer borderLeftRight borderWhite"
                  mt="-5px"
                ></Box>
                <Box
                  width="fit-content"
                  className="innerContent borderLeftRight borderWhite"
                  color="white"
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                >
                  <Text p="10px 15px" textTransform="uppercase">
                    Customize Your Suit
                  </Text>
                </Box>
                <Box
                  className="outer borderLeftRight borderWhite"
                  mb="-5px"
                ></Box>
              </Box>
            </Flex>
            <Box p={70}></Box>
          </Box>
        </Flex>
      </AbsoluteCenter>
    </Stack>
  );
}

export default HeroSection;
