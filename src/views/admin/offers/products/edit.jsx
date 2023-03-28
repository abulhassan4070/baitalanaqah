import React from "react";
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
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import InputField from "components/fields/InputField";
import { uploadImage } from "variables/functions";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { useLocation } from "react-router-dom";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { getAdminDashData } from "variables/functions";

export default function EditOfferProduct(props) {
  const [producttype, setProductType] = React.useState("");
  const [productname, setproductname] = React.useState("");
  const [productdescription, setproductDescription] = React.useState("");
  const [productdate, setproductDate] = React.useState("");
  const [eventdate, setEventDate] = React.useState("");
  const [eventtime, setEventTime] = React.useState("");
  const [productcategory, setProductCategory] = React.useState("");
  const [allcategories, setAllCategories] = React.useState([]);
  const [productimages, setproductImages] = React.useState("");
  const [tagline, setTagLine] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [addons, setAddons] = React.useState();
  const [contactPersonName, setContactPersonName] = React.useState("");
  const [contactPersonNumber, setContactPersonNumber] = React.useState("");
  const [eventvenue, setEventVenue] = React.useState("");
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const admin = React.useContext(AdminContext);
  const [lat, setLat] = React.useState("");
  const [lng, setLng] = React.useState("");
  const mapRef = React.useRef();

  const onLoad = React.useCallback(function callback(map) {
    var center = {
      lat: lat !== "" ? parseFloat(lat) : 13.0827,
      lng: lng !== "" ? parseFloat(lng) : 80.2707,
    };
    mapRef.current = map;
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (id != 0 && id != null) {
      var formData = new FormData();
      formData.append("action", "dashboard");
      formData.append("username", admin.user.username);
      formData.append("token", admin.user.token);
      formData.append("mode", "getOffer");
      formData.append("id", id);
      axios.post(apiUrl(), formData).then((data) => {
        console.log(data);
        setProductType(data.data.data.type);
        setProductCategory(data.data.data.category);
        setAddons(data.data.data.addons);
        setproductname(data.data.data.name);
        setproductDescription(data.data.data.description);
        setproductDate(data.data.data.date.split(" ")[0]);
        setTagLine(data.data.data.tagline);
        setproductImages(data.data.data.image.split(","));
        setQuantity(data.data.data.inv_qty);
        setEventVenue(data.data.data.address);
        setLat(data.data.data.latitude);
        setLng(data.data.data.longitude);
        setContactPersonName(data.data.data.contactperson);
        setContactPersonNumber(data.data.data.contactnumber);
        setEventDate(data.data.data.date.split(" ")[0]);
        setEventTime(data.data.data.date.split(" ")[1]);
        if (data.data.data.latitude !== "") {
          const bounds = new window.google.maps.LatLngBounds({
            lat: parseFloat(data.data.data.latitude),
            lng: parseFloat(data.data.data.longitude),
          });
          mapRef.current.fitBounds(bounds);
        }
      });
    }
  }, [admin, id]);

  const toast = useToast();

  function submitForm(e) {
    e.preventDefault();
    admin.setLoading(true);
    var formData = new FormData();
    formData.append("action", "dashboard");
    formData.append("username", admin.user.username);
    formData.append("token", admin.user.token);
    // eslint-disable-next-line eqeqeq
    if (id != 0 && id != null) {
      formData.append("mode", "update_offerproduct");
      formData.append("id", id);
    } else {
      formData.append("mode", "add_offerproduct");
    }
    formData.append("type", producttype);
    formData.append("category", productcategory);
    formData.append("name", productname);
    formData.append("description", productdescription);
    formData.append("date", productdate);
    formData.append("addons", addons);
    formData.append("tagline", tagline);
    formData.append("qty", quantity);
    formData.append("address", eventvenue);
    formData.append("latitude", lat);
    formData.append("longitude", lng);
    formData.append("imageNames", productimages);
    formData.append("contactperson", contactPersonName);
    formData.append("contactnumber", contactPersonNumber);
    axios.post(apiUrl(), formData).then((data) => {
      console.log(data);
      admin.setLoading(false);
      if (data.error.code === "#200") {
        toast({
          title: "Success",
          description: data.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        props.history.push("/admin/offers");
      }
    });
  }

  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "get_offercategories"
    ).then((res) => {
      setAllCategories(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box pt={props.pt ? props.pt : { base: "130px", md: "80px", xl: "80px" }}>
      <Card w="100%" px="10px">
        <form onSubmit={submitForm}>
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Product Type
          </FormLabel>
          <Select
            placeholder="Product Type"
            value={producttype}
            onChange={(e) => {
              setProductType(e.target.value);
            }}
          >
            <option value="1">Event</option>
            <option value="2">Delivery</option>
            <option value="3">Others</option>
          </Select>
          <br />
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Product Category
          </FormLabel>
          <Select
            placeholder="Product Category"
            value={productcategory}
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
          >
            {allcategories.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </Select>
          <br />
          <InputField
            label="Product Name"
            name="name"
            type="text"
            placeholder="Enter Product Name"
            value={productname}
            onChange={(e) => setproductname(e.target.value)}
            required
          />
          <InputField
            label="Product Tag Line"
            name="name"
            type="text"
            placeholder="Enter Product Tag Line"
            value={tagline}
            onChange={(e) => setTagLine(e.target.value)}
            required
          />
          <FormLabel
            display="flex"
            ms="10px"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Product Description
          </FormLabel>
          <Textarea
            name="description"
            rows={10}
            placeholder="Enter Product Description"
            value={productdescription}
            onChange={(e) => setproductDescription(e.target.value)}
            required
          />
          <br />
          <br />
          {producttype === "2" && (
            <InputField
              label="Snack Delivery Start Date"
              name="date"
              type="date"
              placeholder="Pick Snack Delivery Start Date"
              required
              value={productdate}
              onChange={(e) => setproductDate(e.target.value)}
            />
          )}
          {producttype === "1" && (
            <>
              <InputField
                label="Food Types"
                type="text"
                placeholder="Enter Food Types"
                value={addons}
                onChange={(e) => setAddons(e.target.value)}
                required
              />
              <InputField
                label="Event Date"
                name="date"
                type="date"
                placeholder="Enter Event Date"
                value={eventdate}
                onChange={(e) => {
                  setEventDate(e.target.value);
                  setproductDate(e.target.value + " " + eventtime);
                }}
              />
              <InputField
                label="Event Time"
                name="time"
                type="time"
                placeholder="Enter Event Time"
                value={eventtime}
                onChange={(e) => {
                  setEventTime(e.target.value);
                  setproductDate(eventdate + " " + e.target.value);
                }}
              />
              <InputField
                label="Event Venue"
                name="venue"
                type="text"
                placeholder="Enter Event Venue"
                required
                value={eventvenue}
                onChange={(e) => {
                  setEventVenue(e.target.value);
                }}
              />
              <GoogleMap
                mapContainerStyle={{
                  height: "400px",
                  width: "100%",
                }}
                onClick={(e) => {
                  setLat(e.latLng.lat());
                  setLng(e.latLng.lng());
                }}
                center={{
                  lat: lat !== "" ? parseFloat(lat) : 13.0827,
                  lng: lng !== "" ? parseFloat(lng) : 80.2707,
                }}
                zoom={10}
                onLoad={onLoad}
              >
                {lat !== "" && lng !== "" && (
                  <Marker
                    position={{ lat: lat, lng: lng }}
                    onClick={() => {
                      console.log("You clicked me!");
                    }}
                  />
                )}
              </GoogleMap>
              <InputField
                label="Latitude"
                name="lat"
                type="number"
                placeholder="Enter Latitude"
                required
                value={lat}
                onChange={(e) => setLat(e.target.value)}
              />
              <InputField
                label="Longitude"
                name="lng"
                type="number"
                placeholder="Enter Longitude"
                required
                value={lng}
                onChange={(e) => setLng(e.target.value)}
              />
            </>
          )}
          {producttype === "3" && (
            <>
              <InputField
                label="Contact Person Name"
                name="name"
                type="text"
                placeholder="Enter Contact Person Name"
                required
                value={contactPersonName}
                onChange={(e) => setContactPersonName(e.target.value)}
              />
              <InputField
                label="Contact Person Phone Number"
                name="phone"
                type="text"
                placeholder="Enter Contact Person Phone Number"
                required
                value={contactPersonNumber}
                onChange={(e) => setContactPersonNumber(e.target.value)}
              />
            </>
          )}
          <InputField
            label="No of Quantity Available"
            name="quantity"
            type="text"
            placeholder="Enter No of Quantity Available"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Flex direction="column" mb={"30px"}>
            <FormLabel
              display="flex"
              ms="10px"
              fontSize="sm"
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
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
                        src={image}
                        alt="snack"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Flex>
                    <Text
                      variant="brand"
                      fontSize="sm"
                      fontWeight="500"
                      w="100%"
                      cursor={"pointer"}
                      h="30px"
                      mt="5px"
                      onClick={() => {
                        var newimages = productimages.filter(
                          (img) => img !== image
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
              onChange={(e) => {
                uploadImage(e.target.files[0]).then((res) => {
                  setproductImages([...productimages, res]);
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
