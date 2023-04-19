import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Text, Container } from "@chakra-ui/layout";
import { Image, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { HeaderText } from "widgets/header";

export default function ListOfAbaya() {
  return (
    <Container maxW={"7xl"}>
      <br/>
      <HeaderText title="ABAYA" subtitle="Top selling abaya" />
      <br/>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{
          overflowY: "show",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"].map(
          (category) => (
            <SwiperSlide height="400px">
              <Box
                height="100%"
                width="100%"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  backgroundColor: "white",
                }}
              >
                <Box height="100%" width="100%">
                  <Image
                    src="https://images.pexels.com/photos/7249214/pexels-photo-7249214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </Box>

                <Box p={2}>
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                    }}
                    spacing={{
                      base: 0,
                      md: 2,
                    }}
                    justifyContent={"space-between"}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      ABAYA
                    </Text>
                    <Flex justifyContent="flex-end">
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                    </Flex>
                  </SimpleGrid>
                  <Text fontSize="12px">
                    Erat ipsum justo amet duo et elitr dolor, est duoErat ipsum
                    justo amet duo et elitr dolor, est duo
                  </Text>
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                    }}
                    spacing={{
                      base: 0,
                      md: 2,
                    }}
                  >
                    <Box className="buttonStyle small" mt="10px">
                      Add to Cart
                    </Box>
                    <Box className="buttonStyle small outline" mt="10px">
                      Buy Now
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <br />
      <br />
    </Container>
  );
}
