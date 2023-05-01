import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ProductSliderItem } from "@/Core/index";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ProductSlider = () => {
  return (
    <div
      className={
        "pl-6 md:px-0 absolute -top-[40px] md:top-auto md:static w-full overflow-hidden"
      }
    >
      <Swiper
        breakpoints={{
          325: {
            slidesPerView: 2.5,
            spaceBetween: 12,
          },
          769: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },
        }}
        allowTouchMove={true}
        className="mySwiper "
      >
        <SlideNextButton />
        <SwiperSlide>
          <ProductSliderItem src={"/img/prod1.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderItem src={"/img/prod2.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderItem src={"/img/prod1.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <MdNavigateNext
      onClick={() => swiper.slideNext()}
      className="hidden md:block text-2xl absolute top-[35%] right-5 cursor-pointer !bg-transparent transition-all hover:scale-110 z-10 border border-body"
    />
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <MdNavigateBefore
      onClick={() => swiper.slidePrev()}
      className="text-5xl text-white absolute top-[35%] -left-3 cursor-pointer !bg-transparent transition-all hover:scale-110 z-10"
    />
  );
};

export default ProductSlider;
