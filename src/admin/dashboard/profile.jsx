import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  Text,
  useToast,
} from '@chakra-ui/react';

import React from 'react';
import Card from 'components/card/Card';
export default function Profile() {
  function submitForm(e) {
    e.preventDefault();
  }
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const toast = useToast();
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Card w="100%" p="10px">
        <Text fontWeight="bold" textAlign="start" fontSize="2xl">
          Complete your profile
        </Text>
        <form onSubmit={submitForm}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
            Name<Text>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Enter your Name"
              mb="24px"
              size="lg"
              type="text"
              variant="auth"
              fontWeight="500"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputGroup>
          <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
            Email<Text>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Enter your password"
              mb="24px"
              size="lg"
              type="email"
              variant="auth"
              fontWeight="500"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputGroup>
          <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
            Phone<Text>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Enter your phone"
              mb="24px"
              size="lg"
              type="number"
              variant="auth"
              fontWeight="500"
              value={phone}
              onChange={e => setPhone(e.target.value)}
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
              var emailRegex = new RegExp(
                '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
              );
              var phoneRegex = new RegExp('^[0-9]{10}$');
              if (name === '' || email === '' || phone === '') {
                toast({
                  title: 'Error',
                  description: 'Please fill all the fields',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              if (
                emailRegex.test(email) === false ||
                phoneRegex.test(phone) === false
              ) {
                toast({
                  title: 'Error',
                  description: 'Please enter valid email and phone number',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
            }}
          >
            Update Profile
          </Button>
        </form>
      </Card>
    </Box>
  );
}
