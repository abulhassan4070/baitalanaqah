// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Container,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { uploadImage } from "variables/functions";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function AllCategories() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const admin = React.useContext(AdminContext);

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_categories"
    ).then((res) => {
      setData(res.data);
    });
  }, [admin]);
  const toast = useToast();
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card
        direction="column"
        w="100%"
        p="10px"
       
      >
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            All Categories
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 3, md: 4, lg: 6 }} spacing="20px">
          {data.map((item, index) => (
            <Box>
              <InputField
                key={index}
                label="Category Name"
                placeholder="Enter Category Name"
                value={item.name}
                onChange={(e) => {
                  let temp = [...data];
                  temp[index].name = e.target.value;
                  setData(temp);
                }}
              />
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
                  src={item.image}
                  alt="share"
                  style={{ width: "100%", height: "100%" }}
                />
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => {
                    uploadImage(e.target.files[0]).then((res) => {
                      let temp = [...data];
                      temp[index].image = res;
                      setData(temp);
                    });
                  }}
                />
              </Flex>
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                mb="20px"
                onClick={() => {
                  let temp = [...data];
                  temp.splice(index, 1);
                  setData(temp);
                }}
              >
                Delete
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            mx="10px"
            onClick={() => {
              setData([...data, { name: "New Category" }]);
            }}
          >
            Add New Category
          </Button>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            mx="10px"
            onClick={() => {
              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "update_categories",
                data
              ).then((res) => {
                toast({
                  title: "Categories Updated",
                  description: "Categories Updated",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              });
            }}
          >
            Update
          </Button>
        </Container>
      </Card>
    </Box>
  );
}
