import { Flex, Text, Box, useToast, Button } from '@chakra-ui/react';
import React from 'react';

import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import axios from 'axios';
import { apiUrl } from 'variables/constants';

export default function CreateCategory() {
  const [categoryName, setCategoryName] = React.useState('');
  const toast = useToast();
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Card direction="column" w="100%" px="25px">
        <Flex justify="space-between" mb="20px" align="center">
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
                categoryName: 'Jackets',
              };
              axios.post(`${apiUrl()}createCategory`, jsonData, {
                headers: headers,
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
