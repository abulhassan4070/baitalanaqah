import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";

import React from "react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { getAdminDashData } from "variables/functions";
import { uploadImage } from "variables/functions";
import { setAdminDashData } from "variables/functions";

export default function SingleImages() {
  const [banner, setBanner] = React.useState("");
  const [shareTamil, setShareTamil] = React.useState("");
  const [shareEnglish, setShareEnglish] = React.useState("");
  const [newRegisterTamil, setNewRegisterTamil] = React.useState("");
  const [newRegisterEnglish, setNewRegisterEnglish] = React.useState("");
  const [stayTuned, setStayTuned] = React.useState("");
  const [entryFull, setEntryFull] = React.useState("");
  const [hurryUp, setHurryUp] = React.useState("");
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getSingleImages"
    ).then((res) => {
      setBanner(res.data.banner);
      setShareTamil(res.data.shareTamil);
      setShareEnglish(res.data.shareEnglish);
      setNewRegisterTamil(res.data.newRegisterTamil);
      setNewRegisterEnglish(res.data.newRegisterEnglish);
      setStayTuned(res.data.stayTuned);
      setEntryFull(res.data.entryFull);
      setHurryUp(res.data.hurryUp);
    });
  }, [admin]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing="10px">
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Banner
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
              <img src={banner} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setBanner(res);
                  });
                }}
              />
            </Flex>
          </Container>
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Share Image Tamil
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
              <img src={shareTamil} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setShareTamil(res);
                  });
                }}
              />
            </Flex>
          </Container>{" "}
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Share Image English
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
              <img src={shareEnglish} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setShareEnglish(res);
                  });
                }}
              />
            </Flex>
          </Container>
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Activation Image Tamil
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
                src={newRegisterTamil}
                alt="share"
                style={{ height: "150px" }}
              />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setNewRegisterTamil(res);
                  });
                }}
              />
            </Flex>
          </Container>
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Activation Image English
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
                src={newRegisterEnglish}
                alt="share"
                style={{ height: "150px" }}
              />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setNewRegisterEnglish(res);
                  });
                }}
              />
            </Flex>
          </Container>
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Stay Tuned Image
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
              <img src={stayTuned} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setStayTuned(res);
                  });
                }}
              />
            </Flex>
          </Container>
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Entry Full Image
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
              <img src={entryFull} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setEntryFull(res);
                  });
                }}
              />
            </Flex>
          </Container>
          
          <Container>
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Hurry Up Image
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
              <img src={hurryUp} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setHurryUp(res);
                  });
                }}
              />
            </Flex>
          </Container>
        </SimpleGrid>
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          onClick={() => {
            admin.setLoading(true);
            setAdminDashData(
              admin.user.username,
              admin.user.token,
              "setSingleImages",
              {
                banner: banner,
                shareTamil: shareTamil,
                shareEnglish: shareEnglish,
                newRegisterTamil: newRegisterTamil,
                newRegisterEnglish: newRegisterEnglish,
                stayTuned: stayTuned,
                entryFull: entryFull,
                hurryUp: hurryUp,
              }
            ).then((res) => {
              admin.setLoading(false);
              toast({
                title: "Single Images Updated",
                description: "Single Images Updated Successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            });
          }}
        >
          Save Images
        </Button>
      </Card>
    </Box>
  );
}
