import {
  Flex,
  Text,
  Box,
  Button,
  Icon,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import DataTable from 'react-data-table-component';
import { apiUrl } from 'variables/constants';
import axios from 'axios';
import { IoMdEye } from 'react-icons/io';

export default function ContactForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [errorDescription, setErrorDescription] = React.useState({});

  const [data, setData] = React.useState([]);
  const columns = [
    {
      name: 'S.No',
      sortable: true,
      selector: (row, index) => index + 1,
    },
    {
      name: 'name',
      selector: row => row.contactName,
      sortable: true,
    },
    {
      name: 'email',
      selector: row => row.emailId,
      sortable: true,
    },
    {
      name: 'subject',
      selector: row => row.subject,
      sortable: true,
    },
    {
      name: 'created at',
      selector: row => row.dateCreated.split(' ')[0],
      sortable: true,
    },
    {
      cell: row => (
        <Button
          colorScheme="blue"
          mr="2"
          onClick={() => {
            setErrorDescription({
              name: row.contactName,
              email: row.emailId,
              subject: row.subject,
              message: row.message,
            });
            onOpen();
          }}
        >
          <Icon as={IoMdEye} />
        </Button>
      ),
    },
  ];

  const fetchUserDetails = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiUrl() + 'getContactForm',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios
      .request(config)
      .then(response => {
        var jsonData = response.data;
        setData(jsonData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Card direction="column" w="100%" px="0px">
          <Flex px="25px" justify="space-between" mb="20px" align="center">
            <Text fontSize="22px" fontWeight="700" lineHeight="100%">
              Contact Messages
            </Text>
          </Flex>
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationRowsPerPageOptions={[10, 50, 100, 500]}
          />
        </Card>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Contact Message
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>Name: {errorDescription.name}</Text>
              <Text>Email: {errorDescription.email}</Text>
              <Text>Subject: {errorDescription.subject}</Text>
              <Text>Message: {errorDescription.message}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
