// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Accordion,
  AccordionItem,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { uploadVideo } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function OnboardingVideo() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const admin = React.useContext(AdminContext);

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_onboardingvideo"
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
            All Onboarding Videos
          </Text>
        </Flex>
        <Accordion allowToggle={true}>
          {data.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">
                      Video {index + 1}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <OnboardingItem apiData={data} apiKey={index} key={index} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </Box>
  );
}

function OnboardingItem(props) {
  const { apiData, apiKey } = props;
  console.log(apiData);
  console.log(apiKey);
  const [lang, setLanguage] = React.useState(apiData[apiKey]["lang"]);
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  return (
    <>
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
                  setLanguage([...lang]);
                });
              }}
            />
            <InputField
              label="Language"
              value={lang[index]["language"]}
              onChange={(e) => {
                lang[index]["language"] = e.target.value;
                setLanguage([...lang]);
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
                setLanguage([...lang]);
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
          setLanguage([...lang, { language: "", video: "" }]);
        }}
      >
        New Video
      </Button>
      <Button
        fontSize="sm"
        variant="brand"
        fontWeight="500"
        type="submit"
        w="100%"
        h="50"
        mt="24px"
        onClick={() => {
          apiData[apiKey]["lang"] = lang;
          setAdminDashData(
            admin.user.username,
            admin.user.token,
            "set_onboardingvideo",
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
    </>
  );
}
