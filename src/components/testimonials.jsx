import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "../assets/img/testimonials.jpg";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";
import { HeaderText } from "widgets/header";
import { paigeColoOpacity } from "variables/constants";
import { Box } from "@chakra-ui/react";

export default function TestimonialSection() {
  return (
    <Box bg={paigeColoOpacity["5"]}>
      <section id="testimonials" class="testimonials">
        <br />
        <HeaderText
          title="Testimonials"
          subtitle="What they are saying about us"
        />
        <div
          class="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            navigation={true}
            spaceBetween={30}
            keyboard={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            loop={true}
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
                    <Icon icon="material-symbols:star-rounded" color={"gold"} />
                    <Icon icon="material-symbols:star-rounded" color={"gold"} />
                    <Icon icon="material-symbols:star-rounded" color={"gold"} />
                    <Icon icon="material-symbols:star-rounded" color={"gold"} />
                    <Icon icon="material-symbols:star-rounded" color={"gold"} />
                  </div>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div class="profile mt-auto">
                    <img src={testimonial} class="testimonial-img" alt="" />
                    <h3>Mohammed Ismail</h3>
                    <h4>Client</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Box>
  );
}
