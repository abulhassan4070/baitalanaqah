import { Box, Text, useToast, Button, Flex } from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { brandColor } from "variables/constants";
import { getAdminDashData } from "variables/functions";
export default function StorageSettings() {
  const [apiData, setApiData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  const getServerDet = () => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getServerStorageDetails"
    ).then((res) => {
      setApiData(res.data);
    });
  };
  React.useEffect(() => {
    getServerDet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearUnusedImages = () => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "clear_images"
    ).then((res) => {
      getServerDet();
      toast({
        title: "Images Deleted",
        description:
          res.data.used.length +
          " Images is used & " +
          res.data.removed.length +
          " removed in server",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };
  const clearUnusedVideos = () => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "clear_videos"
    ).then((res) => {
      getServerDet();
      toast({
        title: "Videos Deleted",
        description:
          res.data.used.length +
          " Videos is used & " +
          res.data.removed.length +
          " removed in server",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };
  const clearUnusedpdfs = () => {
    getAdminDashData(admin.user.username, admin.user.token, "clear_pdfs").then(
      (res) => {
        getServerDet();
        toast({
          title: "pdfs Deleted",
          description:
            res.data.used.length +
            " pdfs is used & " +
            res.data.removed.length +
            " removed in server",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    );
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {apiData && (
        <Card
          direction="column"
          w="100%"
          px="10px"
         
        >
          <Flex>
            <Button
              fontSize="sm"
              color={brandColor}
              fontWeight="500"
              mb="20px"
              onClick={clearUnusedImages}
            >
              Clear Unused Images
            </Button>
            <Button
              fontSize="sm"
              color={brandColor}
              fontWeight="500"
              mb="20px"
              onClick={clearUnusedVideos}
            >
              Clear Unused Videos
            </Button>
            <Button
              fontSize="sm"
              color={brandColor}
              fontWeight="500"
              mb="20px"
              onClick={clearUnusedpdfs}
            >
              Clear Unused PDF
            </Button>
          </Flex>
          <Text>
            Server Space Details <br />
            <b>FREE : </b> {apiData.free}<br />
            <b>USED : </b> {apiData.used}<br />
            <b>TOTAL : </b> {apiData.total}<br />
            <br/>
            <b>Site Size : </b> {apiData.site} <br />
            <b>Hosting Size : </b> {apiData.server} <br />
            <b>Uploads Size : </b> {apiData.uploads} <br />
          </Text>
        </Card>
      )}
    </Box>
  );
}
