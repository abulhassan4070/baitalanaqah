import { Box, Button, useToast } from "@chakra-ui/react";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { getAdminDashData } from "variables/functions";

export default function ExportDatabase() {
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  const [loading, setLoading] = React.useState(false);
  return (
    <Box
      mt={{ base: "130px", md: "80px", xl: "80px" }}
      backgroundColor="#fff"
      p="20px"
    >
      <Button
        fontSize="sm"
        variant="brand"
        fontWeight="500"
        type="submit"
        w="100%"
        h="50"
        mt="24px"
        onClick={() => {
          setLoading(true);
          getAdminDashData(
            admin.user.username,
            admin.user.token,
            "exportDatabaseDetails"
          ).then((data) => {
            setLoading(false);
            if (data.error.code === "#200") {
              toast({
                title: "Success",
                description: "Exported Successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              window.location.href = data.data.dburl;
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
        {loading ? "Exporting..." : "Export Database"}
      </Button>
    </Box>
  );
}
