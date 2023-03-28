import {
  Text,
  Box,
  useToast,
  Button,
  Select,
  Container,
  Flex,
  Input,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import InputField from "components/fields/InputField";
import { uploadImage } from "variables/functions";
import { setAdminDashData } from "variables/functions";
import { apiUrl } from "variables/constants";
import dayjs from "dayjs";
export default function AddAadharCard() {
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [aadharName, setAadharName] = React.useState("");
  const [aadharFatherName, setAadharFatherName] = React.useState("");
  const [aadharNumber, setAadharNumber] = React.useState("");
  const [aadharDob, setAadharDob] = React.useState("");
  const [aadharGender, setAadharGender] = React.useState("");
  const [aadharAddress, setAadharAddress] = React.useState("");
  const [aadharImage, setAadharImage] = React.useState("");
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  React.useEffect(() => {
    if (location) {
      const params = new URLSearchParams(location);
      const userid = params.get("id");
      setUserid(userid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (userid.length === 10) {
      axios
        .get(
          `${apiUrl()}?action=dashboard&mode=getAadharDetails&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          setAadharName(res.data.aadharName);
          setAadharFatherName(res.data.aadharFatherName);
          setAadharNumber(res.data.aadharNo);
          setAadharDob(dayjs(res.data.aadharDob).format("YYYY-MM-DD"));
          setAadharGender(res.data.aadharGender);
          setAadharImage(res.data.aadharImage);
          setAadharAddress(res.data.aadharAddress);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="20px">
        <Text fontSize="xl" fontWeight="bold">
          Update User Aadhar Card
        </Text>
        <Card w="100%" p="10px">
          <Text fontWeight="bold" fontSize="md">
            Aadhaar Image
          </Text>
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
              <img src={aadharImage} alt="share" style={{ height: "150px" }} />
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  uploadImage(e.target.files[0]).then((res) => {
                    setAadharImage(res);
                  });
                }}
              />
            </Flex>
          </Container>
          <InputField
            label="Aadhar Name"
            placeholder="Enter your aadhar name"
            value={aadharName}
            onChange={(e) => {
              setAadharName(e.target.value);
            }}
          />
          <InputField
            label="Aadhar Number"
            placeholder="Enter your aadhar number"
            value={aadharNumber}
            onChange={(e) => {
              setAadharNumber(e.target.value);
            }}
          />
          <InputField
            label="Aadhar Father Name"
            placeholder="Enter your aadhar father name"
            value={aadharFatherName}
            onChange={(e) => {
              setAadharFatherName(e.target.value);
            }}
          />
          <InputField
            label="Aadhar address"
            placeholder="Enter your aadhar address"
            value={aadharAddress}
            onChange={(e) => {
              setAadharAddress(e.target.value);
            }}
          />
          <InputField
            label="Date of Birth"
            placeholder="Enter your date of birth"
            value={aadharDob}
            onChange={(e) => {
              setAadharDob(e.target.value);
            }}
            type="date"
          />
          <Text fontSize="md" fontWeight="bold">
            Gender
          </Text>
          <Select
            onChange={(e) => {
              setAadharGender(e.target.value);
            }}
            defaultValue={aadharGender}
          >
            <option value="">Select a Gender</option>
            <option
              value="male"
              selected={aadharGender === "male" ? "selected" : ""}
            >
              Male
            </option>
            <option
              value="female"
              selected={aadharGender === "female" ? "selected" : ""}
            >
              Female
            </option>
            <option
              value="others"
              selected={aadharGender === "others" ? "selected" : ""}
            >
              Others
            </option>
          </Select>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
            onClick={() => {
              if (
                aadharName.length === 0 ||
                aadharNumber.length === 0 ||
                aadharFatherName.length === 0 ||
                aadharDob.length === 0 ||
                aadharGender.length === 0 ||
                aadharAddress.length === 0 ||
                aadharImage.length === 0
              ) {
                toast({
                  title: "Error",
                  description: "Please fill all the fields",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              if (aadharNumber.length !== 12) {
                toast({
                  title: "Error",
                  description: "Please enter a valid aadhar number",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              if (aadharDob.length !== 10) {
                toast({
                  title: "Error",
                  description: "Please enter a valid date of birth",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "addAadharDetails",
                {
                  aadharNo: aadharNumber,
                  aadharImage: aadharImage,
                  aadharGender: aadharGender,
                  aadharName: aadharName,
                  aadharDob: dayjs(aadharDob).format("DD-MM-YYYY"),
                  aadharFatherName: aadharFatherName,
                  aadharAddress: aadharAddress,
                  userid: userid,
                }
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "Aadhar details updated successfully",
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
            Update Profile
          </Button>
        </Card>
      </Card>
    </Box>
  );
}
