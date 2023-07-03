import React from 'react';
import {
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import loginbanner from 'assets/img/login.jpg';
import axios from 'axios';
import { apiUrl } from 'variables/constants';
import InputField from 'components/InputField';
export default function Auth() {
  const [login, setLogin] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
    var jsonValue = {
      email: username,
      password: password,
    };
    return axios
      .post(apiUrl() + 'loginEmail', jsonValue)
      .then(data => {
        console.log(data);
        if (data === undefined) {
          toast({
            title: 'Error',
            description: "OTP doesn't match",
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        } else {
          var jsonData = data.data;
          toast({
            title: 'Success',
            description: 'Login Successful',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          localStorage.setItem('token', jsonData.token);
          localStorage.setItem('userdata', JSON.stringify(jsonData));
          setLogin(true);
        }
      })
      .catch(err => {
        toast({
          title: 'Error',
          description: "Email & Password doesn't match",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  }
  const renderRedirect = () => {
    if (login) {
      return <Redirect to="/target" />;
    }
  };
  return (
    <Center>
      {renderRedirect()}
      {localStorage.getItem('token') ? <Redirect to="/admin" /> : null}
      <SimpleGrid columns={{ base: 1, md: 2 }} height={'100vh'}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Bait Al Anaqah Admin Panel</Heading>
            <FormLabel>Login with Email </FormLabel>
            <form onSubmit={submitForm}>
              <InputField
                id="email"
                isRequired={true}
                type="email"
                label="Email"
                placeholder="email address"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <InputField
                isRequired={true}
                type="password"
                placeholder="password"
                value={password}
                label="Password"
                onChange={e => setPassword(e.target.value)}
              />
              <Stack spacing={6}>
                <Button colorScheme={'blue'} variant={'solid'} type="submit">
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          height={'100vh'}
          width={{
            base: '100vw',
            md: '50vw',
          }}
        >
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={loginbanner}
            width={'100%'}
          />
        </Flex>
      </SimpleGrid>
    </Center>
  );
}
