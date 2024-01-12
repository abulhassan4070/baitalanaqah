import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { HeaderText } from "widgets/header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { CategoryItem } from "views/shop/helpers/category";

export default function ListOfProducts(props) {
  const { t } = useTranslation();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    if (props.id === "" || props.id === undefined) {
      return;
    }
    axios
      .get(`${apiUrl()}getAllProductsByCategories/${props.id}`)
      .then((response) => {
        localStorage.setItem(
          `categoriesdata${props.id}`,
          JSON.stringify(response.data)
        );
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);
  return (
    <Box id="abaya">
      <Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
        <HeaderText
          title={props.name}
          subtitle={t("topSelling") + " " + props.name}
        />
        <br />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          style={{
            overflowY: "show",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide height="400px">
              <Link to={`/products/${product.productId}`}>
                <CategoryItem key={product.productId} product={product} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
