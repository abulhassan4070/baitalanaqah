import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import blog from "../../assets/img/blog/blog.jpg";

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
      <Image
        borderRadius="full"
        boxSize="40px"
        src={
          "https://100k-faces.glitch.me/random-image?random=" + Math.random()
        }
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const BlogsList = () => {
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
            <NavLink to="/">Home</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            Blogs
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {[1, 2, 3, 4].map((item) => {
        return (
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
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
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    src={blog}
                    alt="some good alt text"
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
              marginTop={{ base: "3", sm: "0" }}
            >
              <BlogTags tags={["Design", "Product"]} />
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Blog article title
                </Link>
              </Heading>
              <Text as="p" marginTop="2" fontSize="lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name="Mohammed Ismail"
                date={new Date("2021-04-06T19:01:27Z")}
              />
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default BlogsList;
