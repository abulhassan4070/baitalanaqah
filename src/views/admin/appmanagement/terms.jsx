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
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function Termsapp() {
  const [termsTamil, settermsTamil] = React.useState("");
  const [termsEnglish, settermsEnglish] = React.useState("");
  const toast = useToast();
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_termsapp"
    ).then((res) => {
      console.log(res.data);
      settermsTamil(res.data.terms_tm);
      settermsEnglish(res.data.terms_en);
    });
  }, [admin]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" px="10px">
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
              <Textarea
                label="Points"
                value={termsTamil}
                onChange={(e) => settermsTamil(e.target.value)}
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
              <Textarea
                label="Points"
                value={termsEnglish}
                onChange={(e) => settermsEnglish(e.target.value)}
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
              "set_termsapp",
              {
                terms_tm: termsTamil,
                terms_en: termsEnglish,
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
    </Box>
  );
}
