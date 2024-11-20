import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";

import mountain from '../../assets/shutterstock_141027829.jpg';
import forestSnow from '../../assets/snowshoeing.jpg';
import forest from '../../assets/TPL06371.jpg';
import night from '../../assets/moab-utah-adventure-photographer-1.jpg';

const Banner = () => {
  return (
    <div className=" w-11/12 mx-auto  overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <div className="relative">
            <img className="md:w-full h-[580px]  md:h-[700px] object-cover " src={mountain} alt="Mountain" />
            <div className="absolute  inset-0  flex-col justify-center items-start p-8 text-white bg-gradient-to-t from-black/50 via-black/10 to-transparent">
            <div className=' md:w-8/12 lg:w-6/12 lg:pl-20 mt-14'>
            <span className="bg-black/30 text-xs text-white px-3 py-1 rounded-full">Adventure</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">
                Let's Explore Heaven Together
              </h1>
              <button className="mt-6 px-6 py-3 bg-black/50 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                Explore More <span className="text-2xl"><IoIosArrowRoundForward /></span>
              </button>
              <p className='hidden lg:flex mt-6 px-6 py-3 bg-black/50 text-white  shadow-lg items-center backdrop-blur-sm rounded-xl'>"Embark on a journey where adventure meets tranquility. Our expertly curated travel experiences are designed to help you explore breathtaking landscapes, from majestic mountains to serene forests and starlit skies. Whether you seek adrenaline-pumping thrills or peaceful escapes, we provide everything you need to turn your vacation into an unforgettable story. Let us take you closer to nature, one extraordinary destination at a time."</p>
            </div>
            </div>
            <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg w-72">
              <p className="text-black font-medium text-lg">
                We offer travel experiences designed to turn your vacation.
              </p>
              <div className="flex items-center justify-end mt-4">
                <button className="bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm">
                <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="relative">
            <img className="md:w-full h-[580px]  md:h-[700px] object-cover " src={forestSnow} alt="Snowy Forest" />
            <div className="absolute  inset-0  flex-col justify-center items-start p-8 text-white bg-gradient-to-t from-black/50 via-black/10 to-transparent">
            <div className='md:w-8/12 lg:w-6/12 lg:pl-20 mt-14'>
            <span className="bg-black/30 text-xs text-white px-3 py-1 rounded-full">Adventure</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Discover the Wonders of Snow
              </h1>
              
              <button className="mt-6 px-6 py-3 bg-black/50 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                Explore More <span className="text-2xl"><IoIosArrowRoundForward /></span>
              </button>
              <p className='mt-6 px-6 py-3 bg-black/50 text-white  shadow-lg hidden lg:flex items-center backdrop-blur-sm rounded-xl'>"Embark on a journey where adventure meets tranquility. Our expertly curated travel experiences are designed to help you explore breathtaking landscapes, from majestic mountains to serene forests and starlit skies. Whether you seek adrenaline-pumping thrills or peaceful escapes, we provide everything you need to turn your vacation into an unforgettable story. Let us take you closer to nature, one extraordinary destination at a time."</p>
          
            </div>
            </div>
            <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg w-72">
              <p className="text-black font-medium text-lg">
                We offer travel experiences designed to turn your vacation.
              </p>
              <div className="flex items-center justify-end mt-4">
                <button className="bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm">
                <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="relative">
            <img className="md:w-full h-[580px]  md:h-[700px] object-cover " src={forest} alt="Forest" />
            <div className="absolute  inset-0  flex-col justify-center items-start p-8 text-white bg-gradient-to-t from-black/50 via-black/10 to-transparent">
            <div className='md:w-8/12 lg:w-6/12 lg:pl-20 mt-14'>
            <span className="bg-black/30 text-xs text-white px-3 py-1 rounded-full">Adventure</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Breathe in the Forest Air
              </h1>
              <button className="mt-6 px-6 py-3 bg-black/50 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                Explore More <span className="text-2xl"><IoIosArrowRoundForward /></span>
              </button>

              <p className='mt-6 px-6 py-3 bg-black/50 text-white  shadow-lg hiddenlg:flex items-center backdrop-blur-sm rounded-xl'>"Embark on a journey where adventure meets tranquility. Our expertly curated travel experiences are designed to help you explore breathtaking landscapes, from majestic mountains to serene forests and starlit skies. Whether you seek adrenaline-pumping thrills or peaceful escapes, we provide everything you need to turn your vacation into an unforgettable story. Let us take you closer to nature, one extraordinary destination at a time."</p>
            </div>
            </div>
            <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg w-72">
              <p className="text-black font-medium text-lg">
                We offer travel experiences designed to turn your vacation.
              </p>
              <div className="flex items-center justify-end mt-4">
                <button className="bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm">
                <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div className="relative">
            <img className="md:w-full h-[580px]  md:h-[700px] object-cover " src={night} alt="Night Sky" />
            <div className="absolute  inset-0  flex-col justify-center items-start p-8 text-white bg-gradient-to-t from-black/50 via-black/10 to-transparent">
            <div className='md:w-8/12 lg:w-6/12 lg:pl-20 mt-14'>
            <span className="bg-black/30 text-xs text-white px-3 py-1 rounded-full">Adventure</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Experience Starry Nights
              </h1>
              <button className="mt-6 px-6 py-3 bg-black/50 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                Explore More <span className="text-2xl"><IoIosArrowRoundForward /></span>
              </button>
              <p className='mt-6 px-6 py-3 bg-black/50 text-white  shadow-lg hidden lg:flex items-center backdrop-blur-sm rounded-xl'>"Embark on a journey where adventure meets tranquility. Our expertly curated travel experiences are designed to help you explore breathtaking landscapes, from majestic mountains to serene forests and starlit skies. Whether you seek adrenaline-pumping thrills or peaceful escapes, we provide everything you need to turn your vacation into an unforgettable story. Let us take you closer to nature, one extraordinary destination at a time."</p>
            </div>
            </div>
            <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg w-72">
              <p className="text-black font-medium text-lg">
                We offer travel experiences designed to turn your vacation.
              </p>
              <div className="flex items-center justify-end mt-4">
                <button className="bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm">
                <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
