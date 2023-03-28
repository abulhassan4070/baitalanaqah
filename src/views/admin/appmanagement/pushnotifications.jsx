import React from "react";
import { Box, Button, Container, Flex, Text, useToast } from "@chakra-ui/react";
import Card from "components/card/Card";
import { setAdminDashData } from "variables/functions";
import { AdminContext } from "contexts/AdminContext";
import InputField from "components/fields/InputField";
import { uploadImage } from "variables/functions";
export default function PushNotifications(props) {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  return (
    <Box pt={props.pt ? props.pt : { base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <InputField
          label="Title"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputField
          label="Description"
          value={description}
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
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
          <Container p={5}>
            {image ? (
              <img
                src={image}
                alt="share"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Text fontSize="22px" fontWeight="700" lineHeight="100%">
                Push Notification Image
              </Text>
            )}
            <br />
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
          </Container>
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
              "sendNotification",
              {
                title: title,
                message: description,
                image: image,
              }
            ).then((data) => {
              if (data.error.code === "#200") {
                toast({
                  title: "Success",
                  description: "Notification sent successfully",
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
          Push Notification
        </Button>
      </Card>
    </Box>
  );
}
