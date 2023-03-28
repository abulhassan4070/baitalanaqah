// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Icon,
  Container,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import dayjs from "dayjs";
import React from "react";
import DataTable from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";

export default function InstantCodes() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState([]);
  const [event, setEvent] = React.useState("");
  const [mbid, setMahabhojanId] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const admin = React.useContext(AdminContext);

  const columns = [
    {
      name: "S.No",
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: "Mahabhojan Id",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.value,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => dayjs(row.create_at).format("DD-MM-YYYY hh:mm A"),
      sortable: true,
    },
    {
      cell: (row) => (
        <>
          <Button
            colorScheme="red"
            mr="2"
            onClick={() => {
              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "delete_instantcode",
                {
                  discountid: row.id,
                }
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "Instant Credit Code Deleted Successfully",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                  setEvent(row.id);
                  setMahabhojanId("");
                  setAmount("");
                  setRemarks("");
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
            <Icon as={MdDelete} />
          </Button>
        </>
      ),
    },
  ];

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_instantcodes"
    ).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [admin, event]);
  const toast = useToast();
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {event === "add" && (
        <Card
          direction="column"
          w="100%"
          p="10px"
          mb="20px"
         
        >
          <InputField
            label="Mahabhojan Id"
            name="name"
            type="text"
            placeholder="Enter Mahabhojan Id"
            value={mbid}
            onChange={(e) => setMahabhojanId(e.target.value)}
            required
          />
          <InputField
            label="Amount"
            name="amount"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <InputField
            label="Remarks"
            name="remarks"
            type="text"
            placeholder="Enter Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
          <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              mb="20px"
              onClick={() => {
                setAdminDashData(
                  admin.user.username,
                  admin.user.token,
                  "add_instantcode",
                  {
                    mahabhojan_id: mbid,
                    amount: amount,
                    remarks: remarks,
                  }
                ).then((data) => {
                  if (data.error.code === "#200") {
                    toast({
                      title: "Success",
                      description: "Instant Credit Code Added Successfully",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                    setEvent("");
                    setMahabhojanId("");
                    setAmount("");
                    setRemarks("");
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
              Add/Update
            </Button>
          </Container>
        </Card>
      )}
      <Card
        direction="column"
        w="100%"
        px="0px"
       
      >
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            All Instant Credit Codes
          </Text>
        </Flex>
        <Container textAlign={{ base: "right", md: "right" }} maxW="100%">
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            mb="20px"
            onClick={() => {
              setEvent("add");
              setMahabhojanId("");
              setAmount("");
              setRemarks("");
            }}
          >
            Add Instant Credit Code
          </Button>
        </Container>
        <DataTable columns={columns} data={data} progressPending={loading} />
      </Card>
    </Box>
  );
}
