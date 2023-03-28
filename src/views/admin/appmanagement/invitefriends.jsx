import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button,
  useToast,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { uploadImage } from "variables/functions";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function InviteFriends() {
  const [apiData, setApiData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_invitefriends"
    ).then((res) => {
      setApiData(res.data);
      console.log(res.data);
    });
  }, [admin]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {apiData && (
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
                    Tamil
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <UpdateWhyShouldYouPay
                  title="Tamil Content"
                  apiData={apiData}
                  apiKey="tamil"
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    English
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <UpdateWhyShouldYouPay
                  title="English Content"
                  apiData={apiData}
                  apiKey="english"
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Card>
      )}
    </Box>
  );
}

function UpdateWhyShouldYouPay(props) {
  const { apiData, apiKey } = props;
  console.log(apiData);
  console.log(apiKey);
  const [title, settitle] = React.useState(apiData[apiKey]["title"]);
  const [message, setmessage] = React.useState(apiData[apiKey]["message"]);
  const [points, setpoints] = React.useState(apiData[apiKey]["points"]);
  const [image, setimage] = React.useState(apiData[apiKey]["image"]);
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  return (
    <>
      <InputField
        label="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <InputField
        label="Message"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      />
      <Textarea
        label="Points"
        value={points}
        onChange={(e) => setpoints(e.target.value)}
        rows={5}
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
          src={image}
          alt="share"
          style={{ width: "100px" }}
        />
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          multiple={false}
          onChange={(e) => {
            uploadImage(e.target.files[0]).then((res) => {
              setimage(res);
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
          apiData[apiKey]["title"] = title;
          apiData[apiKey]["message"] = message;
          apiData[apiKey]["points"] = points;
          apiData[apiKey]["image"] = image;
          setAdminDashData(
            admin.user.username,
            admin.user.token,
            "set_invitefriends",
            apiData
          ).then((data) => {
            if (data.error.code === "#200") {
              toast({
                title: "Success",
                description: "Updated Successfully",
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
