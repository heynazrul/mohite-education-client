import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper ">
        <SwiperSlide>
          <div className="h-96 relative">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-base-100 w-2/5 p-4 absolute z-30 top-1/2 left-16 -translate-y-1/2 shadow-md space-y-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non odit eaque explicabo? Consequuntur cum
                laborum dignissimos repellat, ad architecto neque.
              </p>
              <button className="btn btn-neutral btn-xs">Get it Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 relative">
            <img
              src="https://images.unsplash.com/photo-1530971013997-e06bb52a2372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-base-100 w-2/5 p-4 absolute z-30 top-1/2 left-16 -translate-y-1/2 shadow-md space-y-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non odit eaque explicabo? Consequuntur cum
                laborum dignissimos repellat, ad architecto neque.
              </p>
              <button className="btn btn-neutral btn-xs">Get it Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
