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
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function FaqContent() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_faqcontent"
    ).then((res) => {
      setData(res.data);
    });
  }, [admin]);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%" p="10px">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            All FAQ Content
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
            Add New Question
          </Button>
        </Container>
        {data && (
          <Card direction="column" w="100%" px="10px">
            {data.map((item, index) => (
              <Accordion allowToggle={true}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {data[index]["question"]}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={10}>
                    <InputField
                      label="Question"
                      value={data[index]["question"]}
                      onChange={(e) => {
                        data[index]["question"] = e.target.value;
                        setData([...data]);
                      }}
                    />
                    <InputField
                      label="Answer"
                      value={data[index]["answer"]}
                      onChange={(e) => {
                        data[index]["answer"] = e.target.value;
                        setData([...data]);
                      }}
                    />
                    <Flex>
                      <Button
                        fontSize="sm"
                        bgColor={"red.500"}
                        fontWeight="500"
                        w="100%"
                        h="50"
                        mt="24px"
                        onClick={() => {
                          data.splice(index, 1);
                          setData([...data]);
                          setAdminDashData(
                            admin.user.username,
                            admin.user.token,
                            "set_faqcontent",
                            data
                          ).then((data) => {
                            if (data.error.code === "#200") {
                              toast({
                                title: "Success",
                                description: "FAQ Updated Successfully",
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
                      <div
                        style={{
                          padding: "0px 10px",
                        }}
                      ></div>
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
                            "set_faqcontent",
                            data
                          ).then((data) => {
                            if (data.error.code === "#200") {
                              toast({
                                title: "Success",
                                description: "FAQ Updated Successfully",
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
                    </Flex>
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
