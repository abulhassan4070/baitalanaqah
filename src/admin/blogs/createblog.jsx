import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import { uploadImage } from 'variables/functions';
import axios from 'axios';
import { apiUrl } from 'variables/constants';

export default function CreateBlog(props) {
  const [blogname, setblogname] = React.useState('');
  const [blogdescription, setblogDescription] = React.useState('');
  const [blogimages, setblogImages] = React.useState('');
  const [blogCategory, setblogCategory] = React.useState('');
  const toast = useToast();
  function submitForm(e) {
    e.preventDefault();
    // {
    //   "userId":"2",
    //   "blogTitle":"Blog 2",
    //   "blogType":"Suits",
    //   "blogContent":"This is content",
    //   "blogImage":"https://baitalanaqah.chargurev.com/images/1680965513_d070100f9711fbfb6686.png"
    // }
    if (
      blogname === '' ||
      blogdescription === '' ||
      blogCategory === '' ||
      blogimages.length === 0
    ) {
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
      var userData = JSON.parse(localStorage.getItem('userdata'));
      var jsonData = {
        userId: userData.userId,
        blogTitle: blogname,
        blogType: blogCategory,
        blogContent: blogdescription,
        blogImage: blogimages,
      };
      axios
        .post(`${apiUrl()}createBlog`, jsonData, {
          headers: headers,
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            toast({
              title: 'Success',
              description: 'Blog Created Successfully',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            setblogname('');
            setblogDescription('');
            setblogCategory('');
            setblogImages('');
          } else {
            toast({
              title: 'Error',
              description: 'Something went wrong',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
        });
    }
  }

  return (
    <Box pt={props.pt ? props.pt : { base: '130px', md: '80px', xl: '80px' }}>
      <Card w="100%" px="10px">
        <form onSubmit={submitForm}>
          <InputField
            label="Blog Name"
            name="name"
            type="text"
            placeholder="Enter Blog Name"
            value={blogname}
            onChange={e => setblogname(e.target.value)}
            required
          />
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Blog Content
          </FormLabel>
          <Textarea
            name="description"
            rows={10}
            placeholder="Enter Blog Description"
            value={blogdescription}
            onChange={e => setblogDescription(e.target.value)}
            required
          />
          <InputField
            label="Blog Type"
            name="name"
            type="text"
            placeholder="Enter Blog Type"
            value={blogCategory}
            onChange={e => setblogCategory(e.target.value)}
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
              Blog Image
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
                  setblogImages([...blogimages, res.data[0].productImageUrl]);
                });
              }}
            />
          </Flex>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
          >
            Add Blog
          </Button>
        </form>
      </Card>
    </Box>
  );
}
