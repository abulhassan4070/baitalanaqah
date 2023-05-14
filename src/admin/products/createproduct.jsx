import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Select,
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

export default function CreateProduct(props) {
  const [productname, setproductname] = React.useState('');
  const [productdescription, setproductDescription] = React.useState('');
  const [productimages, setproductImages] = React.useState([]);
  const [productCategory, setProductCategory] = React.useState('');
  const [totalCategories, setTotalCategories] = React.useState([]);
  const [productSizes, setProductSizes] = React.useState([]);
  const [productPrice, setProductPrice] = React.useState('');
  const toast = useToast();
  var productSizesArray = [
    {
      sizeId: 'S',
      sizeName: 'Small',
    },
    {
      sizeId: 'M',
      sizeName: 'Medium',
    },
    {
      sizeId: 'L',
      sizeName: 'Large',
    },
  ];
  const fetchUserDetails = async () => {
    const response = await axios.get(`${apiUrl()}getProductCategories`);
    setTotalCategories(response.data);
  };

  React.useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submitForm(e) {
    e.preventDefault();
    //   {
    //     "categoryId":"1",
    //     "productName":"Navy Blue Suit",
    //     "productPrice":"500.00",
    //     "productDescription":"Navy Blue Suit",
    //     "productImages":[
    //         {
    //             "productImageName": "1680862184_e59372c8ff9d968b8953.png",
    //             "productImageUrl": "https://baitalanaqah.chargurev.com/images/productImages/1680862184_e59372c8ff9d968b8953.png"
    //         },
    //         {
    //             "productImageName": "1680862184_f83d499c9b0f23fc19b0.png",
    //             "productImageUrl": "https://baitalanaqah.chargurev.com/images/productImages/1680862184_f83d499c9b0f23fc19b0.png"
    //         },
    //         {
    //             "productImageName": "1680862184_8236b9126b8fb09d9b6d.png",
    //             "productImageUrl": "https://baitalanaqah.chargurev.com/images/productImages/1680862184_8236b9126b8fb09d9b6d.png"
    //         }
    //     ],
    //     "productSizes":["S","M","L"]
    // }
    if (productname === '' || productdescription === '' || productPrice === '' || productCategory === '' || productSizes.length === 0 || productimages.length === 0) {
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
        categoryId: productCategory,
        productName: productname,
        productPrice: productPrice,
        productDescription: productdescription,
        productImages: productimages,
        productSizes: productSizes,
      };
      axios
        .post(`${apiUrl()}createProduct`, jsonData, {
          headers: headers,
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            toast({
              title: 'Success',
              description: 'Product Created Successfully',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            setproductname('');
            setproductDescription('');
            setProductCategory('');
            setProductPrice('');
            setProductSizes([]);
            setproductImages([]);
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
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Product Category
          </FormLabel>
          <Select
            placeholder="Product Category"
            value={productCategory}
            onChange={e => {
              setProductCategory(e.target.value);
            }}
            required
          >
            {totalCategories.map(category => (
              <option value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </Select>
          <br />
          <InputField
            label="Product Name"
            name="name"
            type="text"
            placeholder="Enter Product Name"
            value={productname}
            onChange={e => setproductname(e.target.value)}
            required
          />
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Product Description
          </FormLabel>
          <Textarea
            name="description"
            rows={10}
            placeholder="Enter Product Description"
            value={productdescription}
            onChange={e => setproductDescription(e.target.value)}
            required
          />
          {/* price */}
          <InputField
            label="Product Price"
            name="price"
            type="number"
            placeholder="Enter Product Price"
            value={productPrice}
            onChange={e => setProductPrice(e.target.value)}
            required
          />
          {/* size */}
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: 'pointer' }}
          >
            Product Size
          </FormLabel>
          <Flex direction="row">
            {productSizesArray.map(size => (
              <Flex direction="row" alignItems="center" p={'10px'}>
                <input
                  type="checkbox"
                  id={size.sizeId}
                  name={size.sizeId}
                  value={size.sizeId}
                  onChange={e => {
                    if (e.target.checked) {
                      setProductSizes([...productSizes, size.sizeId]);
                    } else {
                      var newSizes = productSizes.filter(
                        sizeId => sizeId !== size.sizeId
                      );
                      setProductSizes(newSizes);
                    }
                  }}
                />
                <label htmlFor={size.sizeId}>{size.sizeName}</label>
              </Flex>
            ))}
          </Flex>
          <Flex direction="column" mb={'30px'}>
            <FormLabel
              display="flex"
              ms="10px"
              fontSize="sm"
              fontWeight="bold"
              _hover={{ cursor: 'pointer' }}
            >
              Product Image
            </FormLabel>
            {productimages.length > 0 ? (
              <SimpleGrid columns={{ sm: 3, md: 4, lg: 6 }} gap="5px">
                {productimages.map((image, index) => (
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
                        src={image.productImageUrl}
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
                        var newimages = productimages.filter(
                          img => img !== image
                        );
                        setproductImages(newimages);
                      }}
                    >
                      Remove
                    </Text>
                  </Container>
                ))}
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
                  setproductImages([...productimages, res.data[0]]);
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
            Add Product
          </Button>
        </form>
      </Card>
    </Box>
  );
}
