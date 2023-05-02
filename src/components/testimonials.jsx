import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "../assets/img/testimonials.jpg";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";
import { HeaderText } from "widgets/header";
import { paigeColoOpacity } from "variables/constants";
import { Box, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  const { t } = useTranslation();
  return (
    <Box id="abaya" bg={paigeColoOpacity["5"]}>
      <Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
        <section id="testimonials" class="testimonials">
          <br />
          <HeaderText
            title={t("testimonialsTitle")}
            subtitle={t("testimonialsSubtitle")}
          />
          <div class="testimonials-slider swiper">
            <Swiper
              navigation={true}
              spaceBetween={30}
              keyboard={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              loop={false}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <SwiperSlide>
                  <div class="testimonial-item">
                    <div class="stars">
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        color={"gold"}
                      />
                    </div>
                    <p>{t("testimonialsText")}</p>
                    <div class="profile mt-auto">
                      <img src={testimonial} class="testimonial-img" alt="" />
                      <h3>{t("testimonialsUser")}</h3>
                      <h4>{t("testimonialsUsertype")}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Container>
    </Box>
  );
}
