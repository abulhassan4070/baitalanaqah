import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Stack,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { paigeColor } from "variables/constants";
import { HeaderText } from "widgets/header";

import {
  MdPhone,
  MdEmail,
  MdOutlineEmail,
  MdLocationPin,
  MdAccessTime,
} from "react-icons/md";
import { BsChat, BsPerson } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import { useState } from "react";
import { apiUrl } from "variables/constants";
import axios from "axios";
export default function ContactPage() {
  const { t } = useTranslation();
  const toast = useToast();
  const [contactName, setContactName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailId.length === 0) {
      toast({
        description: "Email should not be blank",
        title: "Sorry",
        status: "error",
        isClosable: true,
      });
      return;
    } else {
      if (!emailId.match(validEmailRegex)) {
        toast({
          description: "Email should be a valid one",
          title: "Sorry",
          status: "error",
          isClosable: true,
        });
        return;
      }
    }
    if (contactName.length === 0) {
      toast({
        description: "Name should not be blank",
        title: "Sorry",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (subject.length === 0) {
      toast({
        description: "Subject should not be blank",
        title: "Sorry",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (message.length === 0) {
      toast({
        description: "Message should not be blank",
        title: "Sorry",
        status: "error",
        isClosable: true,
      });
      return;
    }
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiUrl() + "contactForm",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contactName: contactName,
        emailId: emailId,
        subject: subject,
        message: message,
      },
    };
    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          toast({
            title: "Success",
            description: "Your message has been sent successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setContactName("");
          setEmailId("");
          setMessage("");
          setSubject("");
        } else {
          toast({
            title: "Error",
            description: "Your message has not been sent",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Your message has not been sent",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.log(error);
      });
  };
  return (
    <Container maxW={"7xl"} p="12" dir={i18n.dir()}>
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        spacing="8px"
        textTransform="uppercase"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/">{t("home")}</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            {t("contact")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <br />
      <HeaderText
        title={t("ofContact.title")}
        subtitle={t("ofContact.subtitle")}
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} p={5}>
        <SimpleGrid columns={{ base: 2, md: 2 }} gap={5}>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdLocationPin} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              {t("ofContact.address.title")}
            </Text>
            <Text fontSize={12}>{t("ofContact.address.text1")},</Text>
            <Text fontSize={12}>{t("ofContact.address.text2")}</Text>
          </Stack>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdPhone} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              {t("ofContact.callUs.title")}
            </Text>
            <Text fontSize={12}>+971 565777763</Text>
          </Stack>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdEmail} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              {t("ofContact.emailUs.title")}
            </Text>
            <Text fontSize={12}>{t("ofContact.emailUs.text")}</Text>
          </Stack>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdAccessTime} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              {t("ofContact.openHours.title")}
            </Text>
            <Text fontSize={12}>{t("ofContact.openHours.text1")}</Text>
            <Text fontSize={12}>{t("ofContact.openHours.text2")}</Text>
          </Stack>
        </SimpleGrid>
        <Box>
          <iframe
            height="100%"
            width="100%"
            title="contact_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0326903283!2d54.8978318798675!3d25.075658402515966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1682401880672!5m2!1sen!2sin"
          />
        </Box>
      </SimpleGrid>
      <br />
      <br />
      <HeaderText
        title={t("ofContact.contactForm.title")}
        subtitle={t("ofContact.contactForm.subtitle")}
      />
      <Box p={4} width={{ base: "100%", md: "100%" }}>
        <Box m={8} color="#0B0E3F">
          <form>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <FormControl id="name">
                <FormLabel>{t("ofContact.contactForm.name")}</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input
                    type="text"
                    size="md"
                    placeholder="Please enter your name"
                    value={contactName}
                    onChange={(event) =>
                      setContactName(event.currentTarget.value)
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>{t("ofContact.contactForm.email")}</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input
                    type="email"
                    placeholder="Please enter your email"
                    size="md"
                    value={emailId}
                    onChange={(event) => setEmailId(event.currentTarget.value)}
                  />
                </InputGroup>
              </FormControl>
            </SimpleGrid>
            <br />
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <FormControl id="subject">
                <FormLabel>{t("ofContact.contactForm.subject")}</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsChat color="gray.800" />}
                  />
                  <Input
                    type="text"
                    size="md"
                    value={subject}
                    placeholder="Please enter your subject"
                    onChange={(event) => setSubject(event.currentTarget.value)}
                  />
                </InputGroup>
              </FormControl>
            </SimpleGrid>
            <br />
            <FormControl id="name">
              <FormLabel>{t("ofContact.contactForm.message")}</FormLabel>
              <Textarea
                borderColor="gray.300"
                rows={5}
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="Please enter your message"
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
              />
            </FormControl>
            <br />

            <FormControl id="name" float="right">
              <Box className="buttonStyle" color="white" onClick={handleSubmit}>
                {t("ofContact.contactForm.send")}
              </Box>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
