import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function OnboardingContent() {
  const [apiData, setApiData] = React.useState(null);
  const [title1Tamil, settitle1Tamil] = React.useState("");
  const [title2Tamil, settitle2Tamil] = React.useState("");
  const [title3Tamil, settitle3Tamil] = React.useState("");
  const [description1Tamil, setdescription1Tamil] = React.useState("");
  const [description2Tamil, setdescription2Tamil] = React.useState("");
  const [description3Tamil, setdescription3Tamil] = React.useState("");
  const [title1English, settitle1English] = React.useState("");
  const [title2English, settitle2English] = React.useState("");
  const [title3English, settitle3English] = React.useState("");
  const [description1English, setdescription1English] = React.useState("");
  const [description2English, setdescription2English] = React.useState("");
  const [description3English, setdescription3English] = React.useState("");
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_onboardingcontent"
    ).then((res) => {
      setApiData(res.data);
      settitle1Tamil(res.data.tamil["onboarding.title.1"]);
      settitle2Tamil(res.data.tamil["onboarding.title.2"]);
      settitle3Tamil(res.data.tamil["onboarding.title.3"]);
      setdescription1Tamil(res.data.tamil["onboarding.description.1"]);
      setdescription2Tamil(res.data.tamil["onboarding.description.2"]);
      setdescription3Tamil(res.data.tamil["onboarding.description.3"]);
      settitle1English(res.data.english["onboarding.title.1"]);
      settitle2English(res.data.english["onboarding.title.2"]);
      settitle3English(res.data.english["onboarding.title.3"]);
      setdescription1English(res.data.english["onboarding.description.1"]);
      setdescription2English(res.data.english["onboarding.description.2"]);
      setdescription3English(res.data.english["onboarding.description.3"]);
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
                <InputField
                  label="Title 1"
                  value={title1Tamil}
                  onChange={(e) => {
                    settitle1Tamil(e.target.value);
                  }}
                />
                <Textarea
                  label="Description 1"
                  value={description1Tamil}
                  onChange={(e) => {
                    setdescription1Tamil(e.target.value);
                  }}
                  rows={5}
                />
                <InputField
                  label="Title 2"
                  value={title2Tamil}
                  onChange={(e) => {
                    settitle2Tamil(e.target.value);
                  }}
                />
                <Textarea
                  label="Description 2"
                  value={description2Tamil}
                  onChange={(e) => {
                    setdescription2Tamil(e.target.value);
                  }}
                  rows={5}
                />
                <InputField
                  label="Title 3"
                  value={title3Tamil}
                  onChange={(e) => {
                    settitle3Tamil(e.target.value);
                  }}
                />
                <Textarea
                  label="Description 3"
                  value={description3Tamil}
                  onChange={(e) => {
                    setdescription3Tamil(e.target.value);
                  }}
                  rows={5}
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
                <InputField
                  label="Title 1"
                  value={title1English}
                  onChange={(e) => {
                    settitle1English(e.target.value);
                  }}
                />
                <Textarea
                  label="Description 1"
                  value={description1English}
                  onChange={(e) => {
                    setdescription1English(e.target.value);
                  }}
                  rows={5}
                />
                <InputField
                  label="Title 2"
                  value={title2English}
                  onChange={(e) => {
                    settitle2English(e.target.value);
                  }}
                />
                <Textarea
                  label="Description 2"
                  value={description2English}
                  onChange={(e) => {
                    setdescription2English(e.target.value);
                  }}
                  rows={5}
                />
                <InputField
                  label="Title 3"
                  value={title3English}
                  onChange={(e) => {
                    settitle3English(e.target.value);
                  }}
                />
                <Textarea
                  label="Description 3"
                  value={description3English}
                  onChange={(e) => {
                    setdescription3English(e.target.value);
                  }}
                  rows={5}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
                "set_onboardingcontent",
                {
                  tamil: {
                    "onboarding.title.1": title1Tamil,
                    "onboarding.title.2": title2Tamil,
                    "onboarding.title.3": title3Tamil,
                    "onboarding.description.1": description1Tamil,
                    "onboarding.description.2": description2Tamil,
                    "onboarding.description.3": description3Tamil,
                  },
                  english: {
                    "onboarding.title.1": title1English,
                    "onboarding.title.2": title2English,
                    "onboarding.title.3": title3English,
                    "onboarding.description.1": description1English,
                    "onboarding.description.2": description2English,
                    "onboarding.description.3": description3English,
                  },
                }
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
        </Card>
      )}
    </Box>
  );
}
