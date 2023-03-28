import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button,
  Text,
  useToast,
  Container,
  Flex,
  Textarea,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { uploadImage } from "variables/functions";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function Howitworks() {
  const [apiData, setApiData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getHowItWorks"
    ).then((res) => {
      setApiData(res.data);
      console.log(res.data);
    });
  }, [admin]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {apiData && (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10px">
          <Card
            direction="column"
            w="100%"
            px="10px"
           
          >
            <Accordion allowToggle={true}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Offer Wallet Tamil
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Offer Wallet Tamil"
                    apiData={apiData}
                    language="tamil"
                    apiKey="offer"
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Live Wallet Tamil
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Live Wallet Tamil"
                    apiData={apiData}
                    language="tamil"
                    apiKey="live"
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Epin Wallet Tamil
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Epin Wallet Tamil"
                    apiData={apiData}
                    language="tamil"
                    apiKey="epin"
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Reward Wallet Tamil
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Reward Wallet Tamil"
                    apiData={apiData}
                    language="tamil"
                    apiKey="reward"
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card
            direction="column"
            w="100%"
            px="10px"
           
          >
            <Accordion allowToggle={true}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Offer Wallet English
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Offer Wallet English"
                    apiData={apiData}
                    language="english"
                    apiKey="offer"
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Live Wallet English
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Live Wallet English"
                    apiData={apiData}
                    language="english"
                    apiKey="live"
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Epin Wallet English
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Epin Wallet English"
                    apiData={apiData}
                    language="english"
                    apiKey="epin"
                  />
                </AccordionPanel>
              </AccordionItem>   <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Reward Wallet English
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={10}>
                  <UpdateCharge
                    title="Reward Wallet English"
                    apiData={apiData}
                    language="english"
                    apiKey="reward"
                  />
                </AccordionPanel>
              </AccordionItem>
           
            </Accordion>
          </Card>
        </SimpleGrid>
      )}
    </Box>
  );
}

function UpdateCharge(props) {
  const { apiData, apiKey, language } = props;
  console.log(apiData);
  console.log(apiKey);
  const [title, setTitle] = React.useState(apiData[language][apiKey]["title"]);
  const [message, setMessage] = React.useState(
    apiData[language][apiKey]["message"]
  );
  const [image, setImage] = React.useState(apiData[language][apiKey]["image"]);
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  return (
    <>
      <InputField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        mt="10px"
        rows={5}
      />
      <Container>
        <Text fontSize="22px" fontWeight="700" lineHeight="100%">
          Image
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
      <Button
        fontSize="sm"
        variant="brand"
        fontWeight="500"
        type="submit"
        w="100%"
        h="50"
        mt="24px"
        onClick={() => {
          apiData[language][apiKey]["title"] = title;
          apiData[language][apiKey]["message"] = message;
          apiData[language][apiKey]["image"] = image;
          setAdminDashData(
            admin.user.username,
            admin.user.token,
            "setHowItWorks",
            apiData
          ).then((data) => {
            if (data.error.code === "#200") {
              toast({
                title: "Success",
                description: "How it works Updated Successfully",
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
