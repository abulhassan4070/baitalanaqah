import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { uploadImage } from "variables/functions";
import { getAdminDashData } from "variables/functions";
import { setAdminDashData } from "variables/functions";

export default function SecondaryBanner(props) {
  const [images, setImages] = React.useState([]);
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getSecondaryBanner"
    ).then((res) => {
      setImages(res.data);
    });
  }, [admin]);
  return (
    <Box pt={props.pt ? props.pt : { base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <Flex direction="column" mb={"30px"}>
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Primary Banner Images
          </FormLabel>
          {images.length > 0 ? (
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="5px">
              {images.map((image, index) => (
                <Container>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    m="10px"
                    border="1px solid #ccc"
                    borderRadius="5px"
                    overflow="hidden"
                  >
                    <img
                      src={image}
                      alt="BannerImage"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Flex>
                  <Text
                    variant="brand"
                    fontSize="sm"
                    fontWeight="500"
                    w="100%"
                    cursor={"pointer"}
                    h="30px"
                    mt="5px"
                    onClick={() => {
                      var newimages = images.filter((img) => img !== image);
                      setImages(newimages);
                    }}
                  >
                    Remove
                  </Text>
                </Container>
              ))}
            </SimpleGrid>
          ) : (
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="center"
              mt="10px"
              mb="10px"
            >
              No images uploaded
            </Text>
          )}
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            multiple={false}
            onChange={(e) => {
              uploadImage(e.target.files[0]).then((res) => {
                setImages([...images, res]);
              });
            }}
          />
        </Flex>
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          onClick={() => {
            setAdminDashData(
              admin.user.username,
              admin.user.token,
              "setSecondaryBanner",
              images
            ).then((res) => {
              setImages(res.data);
              toast({
                title: "Success",
                description: "Secondary Banner Images Updated",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            });
          }}
        >
          Save
        </Button>
      </Card>
    </Box>
  );
}
