// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Container,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Accordion,
  AccordionItem,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { uploadVideo } from "variables/functions";
import { setAdminDashData } from "variables/functions";
import { uploadImage } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function HowItWorksVideo() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const admin = React.useContext(AdminContext);

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_howitworksvideo"
    ).then((res) => {
      setData(res.data);
    });
  }, [admin]);

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
            All How It Works Videos
          </Text>
        </Flex>
        <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            m="10px"
            onClick={() => {
              setData([
                ...data,
                {
                  lang: [],
                  thumb: "",
                  name: "New Video",
                },
              ]);
            }}
          >
            Add New Video
          </Button>
        </Container>
        {data && (
          <Card
            direction="column"
            w="100%"
            px="10px"
           
          >
            {data.map((item, index) => (
              <Accordion allowToggle={true}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {data[index]["name"]}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={10}>
                    <UpdateCharge
                      title="Offer Wallet"
                      apiData={data}
                      apiKey={index}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </Card>
        )}
      </Card>
    </Box>
  );
}

function UpdateCharge(props) {
  const { apiData, apiKey } = props;
  console.log(apiData);
  console.log(apiKey);
  const [title, setTitle] = React.useState(apiData[apiKey]["name"]);
  const [lang, setLang] = React.useState(apiData[apiKey]["lang"]);
  const [image, setImage] = React.useState(apiData[apiKey]["thumb"]);
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  return (
    <>
      <InputField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Container>
        <Text fontSize="22px" fontWeight="700" lineHeight="100%">
          Thumbnail
        </Text>
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
            alt="share"
            style={{ width: "200px", height: "200px" }}
          />
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            multiple={false}
            onChange={(e) => {
              uploadImage(e.target.files[0]).then((res) => {
                setImage(res);
              });
            }}
          />
        </Flex>
      </Container>
      <SimpleGrid columns={{ base: 3 }} spacing="10px">
        {lang.map((item, index) => (
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            m="10px"
            border="1px solid #ccc"
            borderRadius="5px"
            overflow="hidden"
          >
            {lang[index]["video"] === "" ? (
              <p>Upload Video</p>
            ) : (
              <>
                <iframe
                  src={lang[index]["video"]}
                  title="share"
                  style={{ width: "100%", height: "100%" }}
                />
              </>
            )}
            <InputField
              type="file"
              name="video"
              id="video"
              accept="video/*"
              multiple={false}
              onChange={(e) => {
                uploadVideo(e.target.files[0]).then((res) => {
                  lang[index]["video"] = res;
                  setLang([...lang]);
                });
              }}
            />
            <InputField
              label="Language"
              value={lang[index]["language"]}
              onChange={(e) => {
                lang[index]["language"] = e.target.value;
                setLang([...lang]);
              }}
            />
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              type="submit"
              w="100px"
              h="50"
              mb="14px"
              onClick={() => {
                lang.splice(index, 1);
                setLang([...lang]);
              }}
            >
              Delete
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
      <Button
        fontSize="sm"
        variant="brand"
        fontWeight="500"
        type="submit"
        w="100px"
        h="50"
        mt="24px"
        onClick={() => {
          setLang([...lang, { language: "", video: "" }]);
        }}
      >
        New Video
      </Button>
      <SimpleGrid columns={{ base: 2 }} spacing="10px">
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          onClick={() => {
            apiData[apiKey]["name"] = title;
            apiData[apiKey]["lang"] = lang;
            apiData[apiKey]["thumb"] = image;
            setAdminDashData(
              admin.user.username,
              admin.user.token,
              "set_howitworksvideo",
              apiData
            ).then((data) => {
              if (data.error.code === "#200") {
                toast({
                  title: "Success",
                  description: "How it works video Updated Successfully",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Error",
                  description: data.error.message,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
            });
          }}
        >
          Update
        </Button>
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          background="red"
          onClick={() => {
            apiData.splice(apiKey, 1);
            setAdminDashData(
              admin.user.username,
              admin.user.token,
              "set_howitworksvideo",
              apiData
            ).then((data) => {
              if (data.error.code === "#200") {
                toast({
                  title: "Success",
                  description: "How it works video Updated Successfully",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Error",
                  description: data.error.message,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
            });
          }}
        >
          Delete
        </Button>
      </SimpleGrid>
    </>
  );
}
