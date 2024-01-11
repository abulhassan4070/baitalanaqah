import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import axios from "axios";
import { apiUrl } from "variables/constants";

const BlogsList = () => {
  const toast = useToast();
  const [items, setItems] = React.useState([]);
  const { t } = useTranslation();
  React.useEffect(() => {
    let config = {
      method: "get",
      url: apiUrl() + "getAllBlogs",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          setItems(response.data);
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
    <Container maxW={"7xl"} p="12" dir={i18n.dir()}>
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

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            {t("blogs")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {items.map((item) => {
        return (
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link
                  to={`/blogs/blog?id=${item.blogId}`}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Image
                    borderRadius="lg"
                    src={item.blogImage}
                    alt="alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", md: "5" }}
            >
              <BlogTags tags={[item.blogType]} />
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {item.blogTitle}
                </Link>
              </Heading>
              <Text as="p" marginTop="2" fontSize="lg">
                {item.blogContent.substring(0, 200) + "..."}
              </Text>
              <BlogAuthor
                name={item.fullName}
                date={new Date(item.dateCreated)}
              />
            </Box>
          </Box>
        );
      })}
      {items.length === 0 && (
        <Heading className={"title"}>
          No Blogs Found. Please check back later.
        </Heading>
      )}
    </Container>
  );
};

export default BlogsList;

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            color="white"
            background="black"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
