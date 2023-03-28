import {
  Text,
  Box,
  useToast,
  Button,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import InputField from "components/fields/InputField";
import { setAdminDashData } from "variables/functions";
import { apiUrl } from "variables/constants";
export default function AddPanCard() {
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [panName, setpanName] = React.useState("");
  const [panNumber, setpanNumber] = React.useState("");
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
          `${apiUrl()}?action=dashboard&mode=getPanDetails&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          setpanName(res.data.panName);
          setpanNumber(res.data.panNo);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="20px">
        <Text fontSize="xl" fontWeight="bold">
          Update User pan Card
        </Text>
        <Card w="100%" p="10px">
          <InputField
            label="PAN Name"
            placeholder="Enter your pan name"
            value={panName}
            onChange={(e) => {
              setpanName(e.target.value);
            }}
          />
          <InputField
            label="PAN Number"
            placeholder="Enter your pan number"
            value={panNumber}
            onChange={(e) => {
              setpanNumber(e.target.value);
            }}
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
              if (panName.length === 0 || panNumber.length === 0) {
                toast({
                  title: "Error",
                  description: "Please fill all the fields",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              if (panNumber.length !== 10) {
                toast({
                  title: "Error",
                  description: "Please enter a valid pan number",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "addPanDetails",
                {
                  panNo: panNumber,
                  panName: panName,
                  userid: userid,
                }
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "PAN details updated successfully",
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
