import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Button, FormLabel, useToast } from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import InputField from "components/fields/InputField";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { useLocation } from "react-router-dom";
import { setAdminDashData } from "variables/functions";

export default function EditCareers(props) {
  const [carrername, setCarrerName] = React.useState("");
  const [carrerdescription, setCarrerDescription] = React.useState(null);
  const [carrerOpenings, setCarrerOpenings] = React.useState("");
  const [carrerSkills, setCarrerSkills] = React.useState("");
  const [carrerLocation, setCarrerLocation] = React.useState("");
  const [carrerExperience, setCarrerExperience] = React.useState("");
  const editorRef = useRef(null);

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const admin = React.useContext(AdminContext);
  React.useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (id != 0 && id != null) {
      setAdminDashData(
        admin.user.username,
        admin.user.token,
        "getSingleCareer",
        {
          id: id,
        }
      ).then((data) => {
        setCarrerName(data.data.title);
        setCarrerDescription(data.data.description);
        setCarrerOpenings(data.data.openings);
        setCarrerSkills(data.data.skills);
        setCarrerLocation(data.data.location);
        setCarrerExperience(data.data.experience);
      });
    } else {
      setCarrerDescription("");
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
      formData.append("mode", "update_career");
      formData.append("id", id);
    } else {
      formData.append("mode", "add_career");
    }
    formData.append("title", carrername);
    formData.append("description", editorRef.current.getContent());
    formData.append("openings", carrerOpenings);
    formData.append("skills", carrerSkills);
    formData.append("location", carrerLocation);
    formData.append("experience", carrerExperience);
    axios.post(apiUrl(), formData).then((data) => {
      console.log(data);
      admin.setLoading(false);
      if (data.data.error.code === "#200") {
        toast({
          title: "Success",
          description: "Career Saved Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setCarrerName("");
        setCarrerDescription("");
        setCarrerOpenings("");
        setCarrerSkills("");
        setCarrerLocation("");
        setCarrerExperience("");
      } else {
        toast({
          title: "Error",
          description: data.data.error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  }
  return (
    <Box pt={props.pt ? props.pt : { base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <form onSubmit={submitForm}>
          <InputField
            label="Career Name"
            name="name"
            type="text"
            placeholder="Enter Career Name"
            value={carrername}
            onChange={(e) => setCarrerName(e.target.value)}
          />
          <InputField
            label="Career Openings"
            name="openings"
            type="text"
            placeholder="Enter Career Openings"
            value={carrerOpenings}
            onChange={(e) => setCarrerOpenings(e.target.value)}
          />
          <InputField
            label="Career Skills"
            name="skills"
            type="text"
            placeholder="Enter Career Skills"
            value={carrerSkills}
            onChange={(e) => setCarrerSkills(e.target.value)}
          />
          <InputField
            label="Career Location"
            name="location"
            type="text"
            placeholder="Enter Career Location"
            value={carrerLocation}
            onChange={(e) => setCarrerLocation(e.target.value)}
          />
          <InputField
            label="Career Experience"
            name="experience"
            type="text"
            placeholder="Enter Career Experience"
            value={carrerExperience}
            onChange={(e) => setCarrerExperience(e.target.value)}
          />
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Career Description
          </FormLabel>
          {carrerdescription !== null ? (
            <Editor
              apiKey="zp2lotgk8u8h2xyf7umhkyndgfd23y0em64da9rdeyj52k9q"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={carrerdescription}
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
          ) : (
            <></>
          )}
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
          >
            Save Career
          </Button>
        </form>
      </Card>
    </Box>
  );
}
