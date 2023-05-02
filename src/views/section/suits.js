import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import abayaImage from "assets/img/suits.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function SuitsSection() {
  const { t } = useTranslation();
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
    >
      <Box background={"black"}>
        <Image
          src={abayaImage}
          alt={"Abaya"}
          rounded={"md"}
          width={"100%"}
          height={"100%"}
          fit={"cover"}
        />
      </Box>
      <Box
        background={"black"}
        p={8}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        dir={i18n.dir()}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <h5
            class="section-title text-white"
            style={{ color: "white", fontSize: "1.5rem" }}
          >
            {t("suits")}
          </h5>
          <Text
            as={"span"}
            position={"relative"}
            lineHeight={0}
            color={"white"}
          >
            {t("purchaseSuits1")}
            <br />
            {t("purchaseSuits2")}
          </Text>
        </Heading>
        <Text color={"gray.300"} mt={3}>
          {t("lorem")}
        </Text>
        <Flex
          style={{
            marginTop: "10px",
          }}
        >
          <Link to="/shop/suits">
            <Box className="buttonStyle white outline" mt="10px">
              {t("shopNow")}
            </Box>
          </Link>
        </Flex>
      </Box>
    </SimpleGrid>
  );
}
