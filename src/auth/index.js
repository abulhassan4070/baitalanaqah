import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { getOtpFromServer, getLoginFromServer } from 'variables/functions';
import { Redirect } from 'react-router-dom';

export default function Auth() {
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
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
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '14vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Mahabhojanam Admin
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Please enter your Admin Username and password to login !
          </Text>
        </Box>

        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
          <form onSubmit={submitForm}>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Username or Email<Text>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: '0px', md: '0px' }}
              type="text"
              placeholder="Enter your email or username"
              mb="24px"
              fontWeight="500"
              size="lg"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Enter your password"
                mb="24px"
                size="lg"
                type={show ? 'text' : 'password'}
                variant="auth"
                fontWeight="500"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => setShow(!show)}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                />
              </InputRightElement>
            </InputGroup>
            {/* otpSent */}
            {otpSent && (
              <>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  display="flex"
                >
                  OTP<Text>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Enter OTP"
                  mb="24px"
                  size="lg"
                  type="text"
                  variant="auth"
                  fontWeight="500"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                />
              </>
            )}
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              type="submit"
              w="100%"
              h="50"
              mb="24px"
            >
              Sign In
            </Button>
          </form>
        </Flex>
      </Flex>
    </Center>
  );
}
