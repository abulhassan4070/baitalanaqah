import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { BlogAuthor } from "./blog";

function BlogView() {
  const { t } = useTranslation();
  return (
    <Container maxW={"7xl"} p="12">
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        spacing="8px"
        textTransform="uppercase"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/">{t("home")}</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/blogs">{t("blogs")}</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            {t("blog")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Center>
        <VStack
          width={{ base: "100%", md: "75%" }}
          marginLeft={{ base: "0", md: "5%" }}
          marginTop="5%"
        >
          <Heading paddingBottom="10">{t("ofBlogs.article.title")}</Heading>
          <Image
            borderRadius="lg"
            src={require("../../assets/img/blog/blog.jpg")}
            alt="blog"
            objectFit="contain"
          />
          <Text as="p" paddingTop={10} fontSize="lg">
            {t("ofBlogs.article.text")}
          </Text>
          <BlogAuthor
            name={t("ofBlogs.article.name")}
            date={new Date("2021-04-06T19:01:27Z")}
          />
          <Heading pt="60px">You may also like</Heading>
          <SimpleGrid
            gridTemplateColumns={{
              base: "1fr",
              md: "1fr 1fr 1fr",
            }}
            gridTemplateRows={{
              base: "auto",
              md: "auto",
            }}
            spacing={4}
            pt="40px"
          >
            <Image
              borderRadius="lg"
              src={require("../../assets/img/blog/blog.jpg")}
              alt="blog"
              objectFit="contain"
            />
            <Image
              borderRadius="lg"
              src={require("../../assets/img/blog/blog.jpg")}
              alt="blog"
              objectFit="contain"
            />
            <Image
              borderRadius="lg"
              src={require("../../assets/img/blog/blog.jpg")}
              alt="blog"
              objectFit="contain"
            />
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}

export default BlogView;
