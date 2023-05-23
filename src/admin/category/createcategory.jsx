import {
  Flex,
  Text,
  Box,
  useToast,
  Button,
  FormLabel,
  SimpleGrid,
  Container,
} from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import axios from 'axios';
import { apiUrl } from 'variables/constants';
import { Redirect } from 'react-router-dom';
import { uploadImage } from 'variables/functions';

export default function CreateCategory() {
  const [categoryName, setCategoryName] = React.useState('');
  const [blogimages, setblogImages] = React.useState('');
  const [reload, setReload] = React.useState(false);
  const toast = useToast();
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Card direction="column" w="100%" px="25px">
        <Flex justify="space-between" mb="20px" align="center">
          {reload ? <Redirect to="/admin/categories" /> : ''}
          <Text fontSize="22px" fontWeight="700" lineHeight="100%">
            Create Category
          </Text>
        </Flex>
        <InputField
          label="Category Name"
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
          type="text"
          required
        />
        <Flex direction="column" mb={'30px'}>
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Category Image
          </FormLabel>
          {blogimages !== '' ? (
            <SimpleGrid columns={{ sm: 3, md: 4, lg: 6 }} gap="5px">
              <Container>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  m="10px"
                  border="1px solid #ccc"
                  borderRadius="5px"
                  overflow="hidden"
                >
                  <img
                    src={blogimages}
                    alt="snack"
                    style={{ width: '100%', height: '100%' }}
                  />
                </Flex>
                <Text
                  variant="brand"
                  fontSize="sm"
                  fontWeight="500"
                  w="100%"
                  cursor={'pointer'}
                  h="30px"
                  mt="5px"
                  onClick={() => {
                    setblogImages('');
                  }}
                >
                  Remove
                </Text>
              </Container>
            </SimpleGrid>
          ) : (
            <Text
              fontSize="sm"
              color="gray.500"
              textAlign="center"
              mt="10px"
              mb="10px"
            >
              No images uploaded
            </Text>
          )}
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            multiple={false}
            onChange={e => {
              uploadImage(e.target.files[0]).then(res => {
                setblogImages(res.data[0].productImageUrl);
              });
            }}
          />
        </Flex>

        <Button
          variant="brand"
          w="100%"
          onClick={() => {
            if (categoryName === '' || blogimages === '') {
              toast({
                title: 'Error',
                description: 'Please fill all the fields',
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            } else {
              var headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
              };
              var jsonData = {
                categoryName: categoryName,
                categoryImage: blogimages,
              };
              axios
                .post(`${apiUrl()}createCategory`, jsonData, {
                  headers: headers,
                })
                .then(res => {
                  console.log(res);
                  if (res.status === 200) {
                    setReload(true);
                    toast({
                      title: 'Success',
                      description: 'Category Created Successfully',
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                    });
                  } else {
                    toast({
                      title: 'Error',
                      description: 'Category Not Created',
                      status: 'error',
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                });
            }
          }}
        >
          Create Category
        </Button>
      </Card>
    </Box>
  );
}
