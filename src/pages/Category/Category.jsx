import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../assets/swipe/swipe1.jpg";
import slide2 from "../../assets/swipe/swipe2.jpg";
import slide3 from "../../assets/swipe/swipe3.jpg";
import slide4 from "../../assets/swipe/swipe4.jpg";
import slide5 from "../../assets/swipe/swipe5.jpg";

import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 9.00am to 4.00pm"}
        heading={"See Details"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Academic
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Admission
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Graduate
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Library
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-2xl uppercase text-center -mt-16 text-white">
            Work & Life
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
