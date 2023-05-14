import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { BlogAuthor } from "./blog";
import axios from "axios";
import { apiUrl } from "variables/constants";

function BlogView() {
  const [data, setData] = React.useState({
    blogTitle: "",
  });
  const toast = useToast();
  const { t } = useTranslation();
  const location = useLocation();
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    let config = {
      method: "get",
      url: apiUrl() + "getBlogById/" + id,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        } else {
          toast({
            title: "Error",
            description: "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {data.blogTitle}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Center>
        {data.blogImage && (
          <VStack
            width={{ base: "100%", md: "75%" }}
            marginLeft={{ base: "0", md: "5%" }}
            marginTop="5%"
          >
            <Heading paddingBottom="10">{data.blogTitle}</Heading>
            <Image
              borderRadius="lg"
              src={data.blogImage}
              alt="blog"
              objectFit="contain"
            />
            <Text as="p" paddingTop={10} fontSize="lg">
              {data.blogContent}
            </Text>
            <BlogAuthor
              name={data.fullName}
              date={new Date(data.dateCreated)}
            />
            <Heading pt="60px">You may also like</Heading>
          </VStack>
        )}
      </Center>
    </Container>
  );
}

export default BlogView;
