import React from 'react';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import loginbanner from 'assets/img/login.jpg';
import { getLoginFromServer, getOtpFromServer } from 'variables/functions';
export default function Auth() {
  const [otp, setOtp] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [otpSent, setOtpSent] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [loginType, setLoginType] = React.useState('email');
  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
    if (otpSent) {
      getLoginFromServer(username, otp).then(data => {
        var jsonData = data.data;
        console.log(jsonData);
        if (jsonData === undefined) {
          toast({
            title: 'Error',
            description: "OTP doesn't match",
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        } else {
          if (jsonData.role === '2') {
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
          } else {
            toast({
              title: 'Error',
              description: 'You dont have access to this panel',
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          }
        }
      });
    } else {
      getOtpFromServer(username, loginType).then(data => {
        if (data.data === '"Success"' || data.data === 'Success') {
          toast({
            title: 'Success',
            description: 'OTP Sent to your ' + loginType,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          setOtpSent(true);
        } else {
          toast({
            title: 'Error',
            description: 'This ' + loginType + " doesn't exist",
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
            <FormLabel>Login with </FormLabel>
            <RadioGroup
              defaultValue={loginType}
              onChange={() => {
                setOtpSent(false);
                setLoginType(loginType === 'email' ? 'mobile' : 'email');
              }}
            >
              <Stack spacing={5} direction="row">
                <Radio colorScheme="blue" value="email">
                  Email
                </Radio>
                <Radio colorScheme="blue" value="mobile">
                  Phone Number
                </Radio>
              </Stack>
            </RadioGroup>
            <form onSubmit={submitForm}>
              {loginType === 'email' ? (
                <Input
                  isRequired={true}
                  type="email"
                  placeholder="email address"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              ) : (
                <Input
                  isRequired={true}
                  type="number"
                  placeholder="phone number with country code"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              )}
              <br />
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
                  <br />
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
