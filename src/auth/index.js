import React from 'react';
import {
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  Image,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import loginbanner from 'assets/img/login.jpg';
import { apiUrl } from 'variables/constants';
import InputField from 'components/InputField';
import { sendRequestWithToken } from 'variables/functions';
export default function Auth() {
  const [login, setLogin] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [otpSent, setOtpSent] = React.useState(false);
  const [loginType, setLoginType] = React.useState('email');
  const [otp, setOtp] = React.useState('');
  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
    if (otpSent) {
      sendRequestWithToken(
        {
          value: username,
          otp: otp,
        },
        `${apiUrl()}otpVerify`,
        'POST',
        ''
      )
        .then(data => {
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
            if (jsonData.role === '1' || jsonData.role === '2') {
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
        })
        .catch(error => {
          console.log(error);
          toast({
            title: 'Error',
            description: error.response.data.messages.error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        });
    } else {
      if (loginType === 'mobile') {
        sendRequestWithToken(
          {
            option: 'mobile',
            value: username,
          },
          `${apiUrl()}login`,
          'POST',
          ''
        )
          .then(data => {
            if (data.status === 200) {
              toast({
                title: 'Success',
                description: 'OTP Sent to your mobile',
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
              setOtpSent(true);
            } else {
              toast({
                title: 'Error',
                description: "This mobile number doesn't exist",
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
            }
          })
          .catch(error => {
            console.log(error);
            toast({
              title: 'Error',
              description: error.response.data.messages.error,
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          });
      } else {
        sendRequestWithToken(
          {
            email: username,
            password: password,
          },
          `${apiUrl()}loginEmail`,
          'POST',
          ''
        )
          .then(data => {
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
              if (jsonData.roleId === '1' || jsonData.roleId === '2') {
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
          })
          .catch(error => {
            console.log(error);
            toast({
              title: 'Error',
              description: error.response.data.messages.error,
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          });
      }
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
                <>
                  <InputField
                    isRequired={true}
                    type="email"
                    placeholder="Enter Email"
                    label="Email"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <InputField
                    isRequired={true}
                    type="password"
                    placeholder="Enter Password"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </>
              ) : (
                <InputField
                  isRequired={true}
                  type="number"
                  placeholder="phone number with country code"
                  label="Phone Number"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              )}
              {otpSent && (
                <InputField
                  isRequired={true}
                  type="number"
                  placeholder="Enter OTP"
                  label="OTP"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                />
              )}
              <Stack spacing={6}>
                <Button colorScheme={'blue'} variant={'solid'} type="submit">
                  {otpSent ? 'Verify OTP' : 'Send OTP'}
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
