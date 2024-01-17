import { Box, Text, Stack, Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import videoFile from "../assets/video/banner.mp4";
import TrustBox from "widgets/trustpilot";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();
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
            <SwiperSlide>
              <Box
                textAlign="center"
                style={{
                  padding: "0 10px",
                  maxWidth: "1000px",
                  width: "95%",
                  margin: "0 auto",
                }}
              >
                <Text color="white">Welcome To</Text>
                <Text
                  as={"h1"}
                  color="white"
                  fontSize={{
                    base: "3xl",
                    md: "4xl",
                    lg: "7xl",
                  }}
                  fontFamily={"Trajan Pro Bold!important"}
                  fontWeight="bold"
                >
                  {t("title")}
                </Text>
                <Text color="white" fontSize="lg">
                  {t("aboutDesc")}
                </Text>
                <Flex justifyContent="center">
                  <Link to="/shop">
                    <Box className="buttonStyle outline white" mt="10px">
                      {t("discoverMore")}
                    </Box>
                  </Link>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Center>
      <Box
        style={{
          width: "100%",
          position: "absolute",
          bottom: "70px",
          left: "10px",
          zIndex: "1",
          textAlign: "left",
        }}
      >
        <Box width={100}>
          <TrustBox />
        </Box>
      </Box>
    </Stack>
  );
}

export default HeroSection;
