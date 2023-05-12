import { Flex, Text, Box, useToast, Button } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import axios from 'axios';
import { apiUrl } from 'variables/constants';
import { Redirect } from 'react-router-dom';

export default function CreateCategory() {
  const [categoryName, setCategoryName] = React.useState('');
  const [reload, setReload] = React.useState(false);
  const toast = useToast();
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Card direction="column" w="100%" px="25px">
        <Flex justify="space-between" mb="20px" align="center">
          {
            reload ? <Redirect to="/admin/categories" /> : ''
          }
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
        <Button
          variant="brand"
          w="100%"
          onClick={() => {
            if (categoryName === '') {
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
              };
              axios.post(`${apiUrl()}createCategory`, jsonData, {
                headers: headers,
              }).then(res => {
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
