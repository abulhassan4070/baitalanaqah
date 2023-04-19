import { Box, Text, Stack, Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import videoFile from "../assets/video/banner.mp4";

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
        <source src={videoFile} type="video/mp4" />
      </video>
      <Center
        height={"100vh"}
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Swiper
          cssMode={true}
          pagination={{
            clickable: true,
            currentClass:
              "heropagination-active swiper-pagination-bullet-active",
            bulletClass: "heropagination swiper-pagination-bullet",
          }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide
              style={{
                padding: "0 100px",
              }}
            >
              <Box textAlign="center">
                <Text color="white">Fashion that tells your story.</Text>
                <Text
                  as={"h1"}
                  color="white"
                  fontSize={{
                    base: "3xl",
                    md: "4xl",
                    lg: "7xl",
                  }}
                  fontWeight="bold"
                >
                  BAIT AL ANAQAH
                </Text>
                <Text color="white" fontSize="lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magni perspiciatis, enim fugit illo architecto minus laborum
                  iure consequatur atque dolorum provident corrupti ipsum quas
                  ducimus reiciendis nostrum illum. Similique, a.
                </Text>
                <Flex justifyContent="center">
                  <Link to="/showrooms">
                    <Box className="buttonStyle outline white" mt="10px">
                      Appointment
                    </Box>
                  </Link>
                  <Box p={2}></Box>
                  <Link to="/showrooms">
                    <Box className="buttonStyle" mt="10px">
                      Contact Us
                    </Box>
                  </Link>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Center>
    </Stack>
  );
}

export default HeroSection;
