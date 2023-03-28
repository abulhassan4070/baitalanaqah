import { Text, Box, useToast, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { userApiUrl } from "variables/constants";
import { apiUrl } from "variables/constants";
import dayjs from "dayjs";
export default function SingleUserKycReport() {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [data, setData] = React.useState(null);
  const [bankData, setBankData] = React.useState([]);
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
          `${userApiUrl()}?action=dashboard&mode=getUserKycData&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          if (res.data.error.code === "#200") {
            setData(res.data.data.user);
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
      axios
        .get(
          `${userApiUrl()}?action=dashboard&mode=getBankDetails&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          if (res.data.error.code === "#200") {
            setBankData(res.data.data);
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
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" p="10px">
        {data && (
          <>
            <Text fontSize="xl" fontWeight="bold">
              KYC Details
            </Text>
            <br />
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
              <Box
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
                overflow="hidden"
              >
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign={{ sm: "center" }}
                >
                  Basic Details
                </Text>
                <br />
                {data.image !== "" && (
                  <img
                    src={data.image}
                    alt="profile"
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
                <Text fontSize="md">
                  <b>Name</b>: {data.first_name} {data.last_name}
                </Text>
                <Text fontSize="md">
                  <b>User Id</b>: {data.user_id}
                </Text>
                <Text fontSize="md">
                  <b>Email</b>: {data.email}
                </Text>
                <Text fontSize="md">
                  <b>Telephone</b>: {data.telephone}
                </Text>
                <Text fontSize="md">
                  <b>Gender</b>: {data.sex}
                </Text>
                <Text fontSize="md">
                  <b>State</b>: {data.state}
                </Text>
                <Text fontSize="md">
                  <b>City</b>: {data.city}
                </Text>
                <NavLink
                  to={"/admin/userreports/updateprofile?id=" + data.user_id}
                >
                  <Button colorScheme="blue" variant="outline">
                    Edit
                  </Button>
                </NavLink>
              </Box>
              {data.aadharNo !== "" ? (
                <Box
                  as="article"
                  maxW="sm"
                  p="5"
                  borderWidth="1px"
                  rounded="md"
                  overflow="hidden"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign={{ sm: "center" }}
                  >
                    Aadhar Details
                  </Text>
                  <br />
                  {data.aadharImage !== "" && (
                    <img
                      src={data.aadharImage}
                      alt="profile"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                  <Text fontSize="md">
                    <b>Aadhar Number</b>: {data.aadharNo}
                  </Text>
                  <Text fontSize="md">
                    <b>Aadhar DOB</b>: {data.aadharDob}
                  </Text>
                  <Text fontSize="md">
                    <b>Aadhar Name</b>: {data.aadharName}
                  </Text>
                  <Text fontSize="md">
                    <b>Aadhar Gender</b>: {data.aadharGender}
                  </Text>
                  <Text fontSize="md">
                    <b>Aadhar Address</b>: {data.aadharAddress}
                  </Text>
                  <Text fontSize="md">
                    <b>Aadhar Father Name</b>: {data.aadharFatherName}
                  </Text>
                  <Text fontSize="md">
                    <b>Aadhar Verify Date</b>:{" "}
                    {dayjs(data.aadharVerifyDate).format("DD-MM-YYYY hh:mm A")}
                  </Text>
                  <NavLink
                    to={"/admin/userreports/addaadhar?id=" + data.user_id}
                  >
                    <Button colorScheme="blue" variant="outline">
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete?")) {
                        axios
                          .get(
                            `${apiUrl()}?action=dashboard&mode=deleteAadharDetails&username=${
                              admin.user.username
                            }&token=${admin.user.token}&userid=${userid}`
                          )
                          .then((res) => {
                            if (res.data.error.code === "#200") {
                              toast({
                                title: "Success",
                                description: res.data.error.message,
                                status: "success",
                                duration: 9000,
                                isClosable: true,
                              });
                              setData(null);
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
                      }
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              ) : (
                <Box
                  as="article"
                  maxW="sm"
                  p="5"
                  borderWidth="1px"
                  rounded="md"
                  overflow="hidden"
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign={{ sm: "center" }}
                  >
                    Add Aadhar Details
                  </Text>
                  <br />
                  <NavLink
                    to={"/admin/userreports/addaadhar?id=" + data.user_id}
                  >
                    <Button colorScheme="blue" variant="outline">
                      Add
                    </Button>
                  </NavLink>
                </Box>
              )}
              {data.panNo !== "" ? (
                <Box
                  as="article"
                  maxW="sm"
                  p="5"
                  borderWidth="1px"
                  rounded="md"
                  overflow="hidden"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign={{ sm: "center" }}
                  >
                    Pan Details
                  </Text>
                  <br />
                  <Text fontSize="md">
                    <b>Pan Number</b>: {data.panNo}
                  </Text>
                  <Text fontSize="md">
                    <b>Pan Name</b>: {data.panName}
                  </Text>
                  <Text fontSize="md">
                    <b>Pan Verify Date</b>:{" "}
                    {dayjs(data.panVerifyDate).format("DD-MM-YYYY hh:mm A")}
                  </Text>
                  <NavLink to={"/admin/userreports/addpan?id=" + data.user_id}>
                    <Button colorScheme="blue" variant="outline">
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      variant="outline"
                      onClick={() => {
                        if (
                          window.confirm("Are you sure you want to delete?")
                        ) {
                          axios
                            .get(
                              `${apiUrl()}?action=dashboard&mode=deletePanDetails&username=${
                                admin.user.username
                              }&token=${admin.user.token}&userid=${userid}`
                            )
                            .then((res) => {
                              if (res.data.error.code === "#200") {
                                toast({
                                  title: "Success",
                                  description: res.data.error.message,
                                  status: "success",
                                  duration: 9000,
                                  isClosable: true,
                                });
                                setData(null);
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
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </NavLink>
                </Box>
              ) : (
                <Box
                  as="article"
                  maxW="sm"
                  p="5"
                  borderWidth="1px"
                  rounded="md"
                  overflow="hidden"
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign={{ sm: "center" }}
                  >
                    Add Pan Details
                  </Text>
                  <br />
                  <NavLink to={"/admin/userreports/addpan?id=" + data.user_id}>
                    <Button colorScheme="blue" variant="outline">
                      Add
                    </Button>
                  </NavLink>
                </Box>
              )}
              <Box
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
                overflow="hidden"
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign={{ sm: "center" }}
                >
                  Payment Details
                </Text>
                <br/> 
                {bankData.map((bank, index) => {
                  if (bank.ac_no.includes("@")) {
                    return (
                      <>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          textAlign={{ sm: "center" }}
                        >
                          UPI Details
                        </Text>
                        <Text fontSize="md">
                          <b>UPI Name</b>: {bank.acc_name}
                        </Text>
                        <Text fontSize="md">
                          <b>UPI ID</b>: {bank.ac_no}
                        </Text>

                        <Text fontSize="md">
                          <b>Verified Date</b>:
                          {dayjs(bank.created_at).format("DD-MM-YYYY hh:mm A")}
                        </Text>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          textAlign={{ sm: "center" }}
                        >
                          Bank Details
                        </Text>
                        <Text fontSize="md">
                          <b>Account Name</b>: {bank.acc_name}
                        </Text>
                        <Text fontSize="md">
                          <b>Account Number</b>: {bank.ac_no}
                        </Text>
                        <Text fontSize="md">
                          <b>Bank Name</b>: {bank.bank_name}
                        </Text>
                        <Text fontSize="md">
                          <b>IFSC code</b>: {bank.swift_code}
                        </Text>
                        <Text fontSize="md">
                          <b>Branch Name</b>: {bank.branch_nm}
                        </Text>
                        <Text fontSize="md">
                          <b>Verified Date</b>:{" "}
                          {dayjs(bank.created_at).format("DD-MM-YYYY hh:mm A")}
                        </Text>
                      </>
                    );
                  }
                })}

                <NavLink
                  to={"/admin/userreports/paymentmethods?id=" + data.user_id}
                >
                  <Button colorScheme="blue" variant="outline">
                    Manage
                  </Button>
                </NavLink>
              </Box>
            </SimpleGrid>
          </>
        )}
      </Card>
    </Box>
  );
}
