import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Text, Container } from "@chakra-ui/layout";
import { Image, Box, Center } from "@chakra-ui/react";

export default function ShopByCategory() {
  var categories = [
    {
      image:
        "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "SUITS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "SHIRTS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "TROUSERS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604006852748-903fccbc4019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "POLO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "TSHIRTS",
    },
  ];
  return (
    <Container maxW={"7xl"}>
      <Text fontSize="30px" fontWeight="bold" textAlign="center" p={10}>
        Discover your Elegance
      </Text>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={10}
      >
        {categories.map((category) => (
          <SwiperSlide height="400px">
            <Box height="100%" width="100%">
              <Image
                src={category.image}
                height="100%"
                width="100%"
                objectFit="cover"
              />
            </Box>
            <br />
            <Center>
              <h3 style={{ color: "black", fontSize: "20px" }}>
                {category.title}
              </h3>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
    </Container>
  );
}
