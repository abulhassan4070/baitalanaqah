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

export default function EditProduct(props) {
  const [productname, setproductname] = React.useState('');
  const [productdescription, setproductDescription] = React.useState('');
  const [productimages, setproductImages] = React.useState([]);
  const [productCategory, setProductCategory] = React.useState('');
  const [totalCategories, setTotalCategories] = React.useState([]);
  const [productSizes, setProductSizes] = React.useState([]);
  const [productPrice, setProductPrice] = React.useState('');
  const toast = useToast();
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

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
    const response2 = await axios.get(`${apiUrl()}getProductById/${productId}`);
    setproductname(response2.data.productName);
    setproductDescription(response2.data.productDescription);
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i].categoryId === response2.data.categoryId) {
        setProductCategory(response.data[i].categoryId);
      }
    }
    setProductPrice(response2.data.productPrice);
    if (typeof response2.data.productSizes === 'string') {
      setProductSizes(JSON.parse(response2.data.productSizes));
    } else {
      setProductSizes(response2.data.productSizes);
    }
    console.log(productSizes);
    setproductImages(response2.data.productImages);
  };

  React.useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submitForm(e) {
    e.preventDefault();
    if (
      productname === '' ||
      productdescription === '' ||
      productPrice === '' ||
      productCategory === '' ||
      productSizes.length === 0 ||
      productimages.length === 0
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
      var jsonData = {
        categoryId: productCategory,
        productName: productname,
        productPrice: productPrice,
        productDescription: productdescription,
        productImages: productimages,
        productSizes: productSizes,
      };
      axios
        .post(`${apiUrl()}updateProductsByCategoryId/${productId}`, jsonData, {
          headers: headers,
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            toast({
              title: 'Success',
              description: 'Product Updated Successfully',
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
            defaultValue={productCategory}
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
                  value={productSizes.includes(size.sizeId)}
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
