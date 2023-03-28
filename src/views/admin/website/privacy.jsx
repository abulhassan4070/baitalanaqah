// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  useToast,
  Button,
} from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import React, { useRef } from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function PrivacyPolicy() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState("");
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_privacycontent"
    ).then((res) => {
      setData(res.data);
    });
  }, [admin]);
  const editorRef = useRef(null);

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
            Privacy Policy
          </Text>
        </Flex>
        {data && (
          <Editor
            apiKey="zp2lotgk8u8h2xyf7umhkyndgfd23y0em64da9rdeyj52k9q"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={data}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        )}
        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          type="submit"
          w="100%"
          h="50"
          mt="24px"
          onClick={() => {
            if (editorRef.current) {
              var data2 = editorRef.current.getContent();
              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "set_privacycontent",
                {
                  data: data2,
                }
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "Terms Updated Successfully",
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
            }
          }}
        >
          Save
        </Button>
      </Card>
    </Box>
  );
}
