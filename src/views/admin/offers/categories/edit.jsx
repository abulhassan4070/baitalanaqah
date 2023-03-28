import React from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import InputField from "components/fields/InputField";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { useLocation } from "react-router-dom";
import { getAdminDashData } from "variables/functions";

export default function EditCategory(props) {
  const [name, setName] = React.useState("");
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (id != 0 && id != null) {
      getAdminDashData(
        admin.user.username,
        admin.user.token,
        "get_singleoffercategory",
        {
          id: id,
        }
      ).then((data) => {
        setName(data.data.name);
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
      formData.append("mode", "update_offercategory");
      formData.append("id", id);
    } else {
      formData.append("mode", "add_offercategory");
    }
    formData.append("name", name);
    axios.post(apiUrl(), formData).then((data) => {
      console.log(data);
      admin.setLoading(false);
      toast({
        title: "Suceess",
        description: "Category Updated",
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
            label="Category Name"
            name="name"
            type="text"
            placeholder="Enter Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Box>
  );
}
