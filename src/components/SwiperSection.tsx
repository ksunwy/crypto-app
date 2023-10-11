"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const SwiperSection = () => {
  return (
    <Swiper
      className='bg-[#232328] dark:bg-[#18181D] mb-[120px] text-white lg:pt-[196px] pt-8 relative group'
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide"
      }}
      // pagination={{
      //   el: '.pagination',
      //   clickable: true,
      //   type: 'fraction',
      //   formatFractionCurrent: function (number) {
      //     return ('0' + number).slice(-2);
      //   },
      //   formatFractionTotal: function (number) {
      //     return ('0' + number).slice(-2);
      //   },
      //   renderFraction: function (currentClass, totalClass) {
      //     return '<span class="' + currentClass + '"></span>' + '</br>' +
      //       ' | ' + '</br>' + 
      //       ' | ' + '</br>' + 
      //       ' | ' + '</br>' +
      //       '<span class="' + totalClass + '"></span>';
      //   }
      // }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <div className="lg:flex justify-center items-center mx-auto lg:my-[196px] my-8 relative">

          <div className='lg:w-[488px] w-[335px] lg:h-[488px] h-[335px] flex justify-center items-center lg:mx-0 mx-auto'>
            <Image src={'/slider1.jpg'} alt={'slider'} width={488} height={488} className="rounded-[40px]" />
          </div>

          <div
            className="flex-col lg:text-[56px] text-[32px] max-w-[480px] lg:ml-[122px] flex 
            lg:justify-start justify-center lg:items-start items-center lg:mx-0 mx-auto"
          >
            <h2 className='lg:leading-[62px] leading-[35px] font-semibold tracking-tight lg:mt-0 mt-8 text-center lg:text-left'>
              <span className='text-[#41A4DF]'>Instant Auto Sales:</span><br />
              Boost conversion
            </h2>
            <p
              className='lg:text-xl text-lg lg:leading-[24px] leading-[22px] 
              max-w-[350px] mt-6 mb-[54px] lg:my-8 text-center lg:text-left'
            >
              Immediately deliver digital products and services to your users.
            </p>
            <button
              className='justify-center items-center lg:px-[42px] px-[105px] py-[18px] lg:inline-block
                rounded-full text-[13px] lg:text-lg transition text-white
              bg-[#41A4DF] hover:bg-[#297EE2]'
            >
              Open API Docs
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:flex justify-center items-center mx-auto lg:my-[196px] my-8 relative">

          <div className="lg:w-[488px] w-[335px] lg:h-[488px] h-[335px] flex justify-center items-center lg:mx-0 mx-auto">
            <Image src={'/slider2.jpg'} alt={'slider'} width={488} height={488} className="rounded-[40px]" />
          </div>

          <div
            className="flex-col lg:text-[56px] text-[32px] max-w-[480px] lg:ml-[122px] flex lg:justify-start justify-center lg:items-start items-center lg:mx-0 mx-auto">
            <h2 className='lg:leading-[62px] leading-[35px] font-semibold tracking-tight lg:mt-0 mt-8 text-center lg:text-left'>
              <span className='text-[#41A4DF]'>Channels integration: </span><br />
              Seamless access
            </h2>
            <p
              className='lg:text-xl text-lg lg:leading-[24px] leading-[22px] max-w-[350px] mt-6 mb-[54px] lg:my-8 text-center lg:text-left'>
              Automatically unlock exclusive content to your users.
            </p>
            <button
              className='justify-center items-center lg:px-[42px] px-[105px] py-[18px] lg:inline-block
                rounded-full text-[13px] lg:text-lg transition text-white
              bg-[#41A4DF] hover:bg-[#297EE2]'
            >
              Open API Docs
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:flex justify-center items-center mx-auto lg:my-[196px] my-8 relative">

          <div className="lg:w-[488px] w-[335px] lg:h-[488px] h-[335px] flex justify-center items-center lg:mx-0 mx-auto">
            <Image src={'/slider3.jpg'} alt={'slider'} width={488} height={488} className="rounded-[40px]" />
          </div>

          <div
            className="flex-col lg:text-[56px] text-[32px] max-w-[480px] lg:ml-[122px] flex 
            lg:justify-start justify-center lg:items-start items-center lg:mx-0 mx-auto"
          >
            <h2 className='lg:leading-[62px] leading-[35px] font-semibold tracking-tight lg:mt-0 mt-8 text-center lg:text-left'>
              <span className='text-[#41A4DF] text-center lg:text-start'>Endless customization: </span>
              <br />
              with Webhooks
            </h2>
            <p
              className='lg:text-xl text-lg lg:leading-[24px] leading-[22px] lg:max-w-[420px] 
              max-w-[335px] lg:my-8 text-center lg:text-left mt-6 mb-[54px]'
            >
              Receive successful payment notifications in real-time. Integrate to any scenario of your service.
            </p>
            <button
              className='justify-center items-center lg:px-[42px] px-[105px] py-[18px] lg:inline-block
                rounded-full text-[13px] lg:text-lg transition text-white
              bg-[#41A4DF] hover:bg-[#297EE2]'
            >
              Open API Docs
            </button>
          </div>
        </div>
      </SwiperSlide>


      <div
        className="top-[50%] absolute z-10 button-prev-slide group-hover:left-3 -left-[23rem] 
        duration-500 grid place-items-center cursor-pointer"
      >
        <HiOutlineArrowNarrowLeft size={'2em'} />
      </div>
      <div
        className="top-[50%] absolute z-10 button-next-slide group-hover:right-3 -right-[23rem] 
        duration-500 grid place-items-center cursor-pointer"
      >
        {" "}
        <HiOutlineArrowNarrowRight size={'2em'} />
      </div>

      {/* <div className="pagination absolute right-[117px] bottom-[50%] text-sm"></div> */}

    </Swiper>
  )
}

export default SwiperSection;