import {
  Text,
  Box,
  useToast,
  Button,
  Select,
  Flex,
  Container,
  Input,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { userApiUrl } from "variables/constants";
import InputField from "components/fields/InputField";
import { statesList } from "variables/constants";
import { setAdminDashData } from "variables/functions";
import { uploadImage } from "variables/functions";
export default function SingleUserUpdateProfile() {
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [data, setData] = React.useState(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [state, setState] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [userImage, setUserImage] = React.useState("");

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
          `${userApiUrl()}?action=dashboard&mode=getUserData&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          if (res.data.error.code === "#200") {
            setData(res.data.data.user);
            setFirstName(res.data.data.user.first_name);
            setLastName(res.data.data.user.last_name);
            setEmail(res.data.data.user.email);
            var dob = res.data.data.user.dob.split("-");
            setDob(dob[2] + "-" + dob[1] + "-" + dob[0]);
            setGender(res.data.data.user.sex);
            setWhatsapp(res.data.data.user.whatsapp_no);
            setDistrict(res.data.data.user.city);
            setPincode(res.data.data.user.zipcode);
            setState(res.data.data.user.state);
            setUserImage(res.data.data.user.image);
          } else {
            toast({
              title: "Error",
              description: res.data.error.message,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    } else {
      setData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);
  var allStates = Object.keys(statesList);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="20px">
        {data && (
          <>
            <Text fontSize="xl" fontWeight="bold">
              Update Profile
            </Text>
            <Card w="100%" p="10px">
              <Text fontWeight="bold" fontSize="md">
                User Image
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
                  <img
                    src={userImage}
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
                        setUserImage(res);
                      });
                    }}
                  />
                </Flex>
              </Container>
              <InputField
                label="First Name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <InputField
                label="Last Name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <InputField
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputField
                label="Date of Birth"
                placeholder="Enter your date of birth"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                type="date"
              />
              <InputField
                label="Whatsapp"
                placeholder="Enter your whatsapp number"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
                type="number"
              />
              <Text fontSize="md" fontWeight="bold">
                Gender
              </Text>
              <Select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                defaultValue={gender}
              >
                <option value="">Select a Gender</option>
                <option
                  value="male"
                  selected={gender === "male" ? "selected" : ""}
                >
                  Male
                </option>
                <option
                  value="female"
                  selected={gender === "female" ? "selected" : ""}
                >
                  Female
                </option>
                <option
                  value="others"
                  selected={gender === "others" ? "selected" : ""}
                >
                  Others
                </option>
              </Select>
              <br />
              <Text fontSize="md" fontWeight="bold">
                State
              </Text>
              <Select
                onChange={(e) => {
                  setState(e.target.value);
                }}
                defaultValue={state}
              >
                <option value="">Select a State</option>
                {allStates.map((stateVal, index) => {
                  return (
                    <option
                      value={stateVal}
                      key={index}
                      selected={stateVal === state ? "selected" : ""}
                    >
                      {stateVal}
                    </option>
                  );
                })}
              </Select>
              {state && (
                <>
                  <br />
                  <Text fontSize="md" fontWeight="bold">
                    District
                  </Text>
                  <Select
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    defaultValue={district}
                  >
                    <option value="">Select a District</option>
                    {statesList[state].districts.map((districtVal, index) => {
                      return (
                        <option
                          value={districtVal}
                          key={index}
                          selected={districtVal === district ? "selected" : ""}
                        >
                          {districtVal}
                        </option>
                      );
                    })}
                  </Select>
                </>
              )}
              <br />
              <InputField
                label="Pincode"
                placeholder="Enter your pincode"
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                type="number"
              />
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                type="submit"
                w="100%"
                h="50"
                mt="24px"
                onClick={() => {
                  var emailRegex = new RegExp(
                    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
                  );
                  if (
                    firstName === "" ||
                    lastName === "" ||
                    email === "" ||
                    dob === "" ||
                    whatsapp === "" ||
                    gender === "" ||
                    state === "" ||
                    district === "" ||
                    pincode === ""
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
                  if (emailRegex.test(email) === false) {
                    toast({
                      title: "Error",
                      description: "Please enter valid email and phone number",
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                    });
                    return;
                  }
                  setAdminDashData(
                    admin.user.username,
                    admin.user.token,
                    "setUserProfileDetails",
                    {
                      userid: userid,
                      firstname: firstName,
                      lastname: lastName,
                      image: userImage,
                      email: email,
                      dob: dob,
                      whatsapp: whatsapp,
                      gender: gender,
                      state: state,
                      district: district,
                      pincode: pincode,
                    }
                  ).then((data) => {
                    if (data.error.code === "#200") {
                      toast({
                        title: "Success",
                        description: "Profile updated successfully",
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
          </>
        )}
      </Card>
    </Box>
  );
}
