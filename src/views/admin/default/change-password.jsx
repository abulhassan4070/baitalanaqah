import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { setAdminDashData } from "variables/functions";
import { AdminContext } from "contexts/AdminContext";

export default function ChangePassword(props) {
  const [show2, setshow2] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <Box pt={props.pt ? props.pt : { base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <form onSubmit={submitForm}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
            New Password<Text>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Enter your password"
              mb="24px"
              size="lg"
              type={show2 ? "text" : "password"}
              variant="auth"
              fontWeight="500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement display="flex" alignItems="center" mt="4px">
              <Icon
                _hover={{ cursor: "pointer" }}
                onClick={() => setshow2(!show2)}
                as={show2 ? RiEyeCloseLine : MdOutlineRemoveRedEye}
              />
            </InputRightElement>
          </InputGroup>
          <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
            Confirm New Password<Text>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Enter your password"
              mb="24px"
              size="lg"
              type={"password"}
              variant="auth"
              fontWeight="500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputGroup>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
            onClick={() => {
              if (password !== confirmPassword || password === "") {
                toast({
                  title: "Error",
                  description: "Password and confirm password does not match",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "setAdminPassword",
                {
                  password: password,
                }
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "User wallet updated successfully",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                  setPassword("");
                  setConfirmPassword("");
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
            Change Password
          </Button>
        </form>
      </Card>
    </Box>
  );
}
