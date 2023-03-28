import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import InputField from "components/fields/InputField";
import { uploadImage } from "variables/functions";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { useLocation } from "react-router-dom";
import { setAdminDashData } from "variables/functions";

export default function EditPress(props) {
  const [eventname, setEventName] = React.useState("");
  const [eventdescription, setEventDescription] = React.useState("");
  const [eventimages, setEventImages] = React.useState([]);
  const [eventlink, setEventLink] = React.useState("");
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (id != 0 && id != null) {
      setAdminDashData(
        admin.user.username,
        admin.user.token,
        "getSinglePress",
        {
          id: id,
        }
      ).then((data) => {
        setEventName(data.data.title);
        setEventDescription(data.data.description);
        setEventLink(data.data.link);
        setEventImages(data.data.image);
      });
    }
  }, [admin, id]);

  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
    admin.setLoading(true);
    var formData = new FormData();
    formData.append("action", "dashboard");
    formData.append("username", admin.user.username);
    formData.append("token", admin.user.token);
    // eslint-disable-next-line eqeqeq
    if (id != 0 && id != null) {
      formData.append("mode", "update_press");
      formData.append("id", id);
    } else {
      formData.append("mode", "add_press");
    }
    formData.append("category", "1");
    formData.append("title", eventname);
    formData.append("description", eventdescription);
    formData.append("link", eventlink);
    formData.append("imageNames", eventimages.join(","));
    axios.post(apiUrl(), formData).then((data) => {
      console.log(data);
      admin.setLoading(false);
      toast({
        title: "Suceess",
        description: "Press Added Successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  }
  return (
    <Box pt={props.pt ? props.pt : { base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <form onSubmit={submitForm}>
          <InputField
            label="Press Name"
            name="name"
            type="text"
            placeholder="Enter Press Name"
            value={eventname}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Press Description
          </FormLabel>
          <Textarea
            name="description"
            rows={10}
            placeholder="Enter Press Description"
            value={eventdescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
          <InputField
            label="Link"
            name="link"
            type="text"
            placeholder="Enter Link"
            value={eventlink}
            onChange={(e) => setEventLink(e.target.value)}
          />
          <Flex direction="column" mb={"30px"}>
            <FormLabel
              display="flex"
              ms="10px"
              fontSize="sm"
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
            >
              Press Image
            </FormLabel>
            {eventimages.length > 0 ? (
              <SimpleGrid columns={{ sm: 3, md: 4, lg: 6 }} gap="5px">
                {eventimages.map((image, index) => (
                  <Container>
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
                        alt="event"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Flex>
                    <Text
                      variant="brand"
                      fontSize="sm"
                      fontWeight="500"
                      w="100%"
                      cursor={"pointer"}
                      h="30px"
                      mt="5px"
                      onClick={() => {
                        var newimages = eventimages.filter(
                          (img) => img !== image
                        );
                        setEventImages(newimages);
                      }}
                    >
                      Remove
                    </Text>
                  </Container>
                ))}
              </SimpleGrid>
            ) : (
              <Text
                fontSize="sm"
                color="gray.500"
                textAlign="center"
                mt="10px"
                mb="10px"
              >
                No images uploaded
              </Text>
            )}
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              multiple={false}
              onChange={(e) => {
                uploadImage(e.target.files[0]).then((res) => {
                  setEventImages([...eventimages, res]);
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
          >
            Add Press
          </Button>
        </form>
      </Card>
    </Box>
  );
}
