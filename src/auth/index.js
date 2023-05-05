import React from 'react';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { getOtpFromServer, getLoginFromServer } from 'variables/functions';
import { Redirect } from 'react-router-dom';
import loginbanner from 'assets/img/login.jpg';
export default function Auth() {
  const [show, setShow] = React.useState(false);
  const [otp, setOtp] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [otpSent, setOtpSent] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
    if (otpSent) {
      getLoginFromServer(username, password, otp).then(data => {
        if (data.error.code === '#200') {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('username', data.data.username);
          setLogin(true);
        } else {
          toast({
            title: 'Error',
            description: data.error.description,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        }
      });
    } else {
      getOtpFromServer(username, password).then(data => {
        if (data.error.code === '#200') {
          setOtpSent(true);
        } else {
          toast({
            title: 'Error',
            description: data.error.description,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        }
      });
    }
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
            <form onSubmit={submitForm}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  isRequired={true}
                  type="email"
                  placeholder="Enter your email address"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    isRequired={true}
                    placeholder="Enter your password"
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <InputRightElement
                    display="flex"
                    alignItems="center"
                    mt="4px"
                  >
                    <Icon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() => setShow(!show)}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <br />
              {otpSent && (
                <>
                  <FormControl id="otp">
                    <FormLabel>OTP</FormLabel>
                    <Input
                      type="number"
                      isRequired={true}
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={e => setOtp(e.target.value)}
                    />
                  </FormControl>
                </>
              )}
              <Stack spacing={6}>
                <Button colorScheme={'blue'} variant={'solid'} type="submit">
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1} height={'100vh'} width={'50vw'}>
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
