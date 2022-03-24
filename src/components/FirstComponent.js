import React from 'react'
// import { useState } from 'react';
import { useRef } from 'react';
import{Swiper, SwiperSlide} from 'swiper/react'
import firstImage from '../firstImage.svg';
import secondImage from '../secondImage.svg';    
import thirdImage from '../thirdImage.svg';
import fourthImage from '../fourthImage.svg';
import fifthImage from '../fifthImage.svg';


import  'swiper/css'

import { Navigation,Pagination,Autoplay} from "swiper" 
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


// import  SwiperCore from 'swiper'
// import swiperStyles from 'swiper/swiper-bundle.css'


export default function FirstComponent() {
    const swiperRef = useRef(null)
   


           

       

  

    
  return (
      <React.Fragment>
        <div className='h-[400px] bg-[#08001A]  -z-10'>
           


        <div className="firstElement text-[#8F60FF] mx-2 ">
            CryptoPayments
        </div>


        <h1 className={`secondElement font-bold text-xl md:text-2xl lg:text-4xl text-center flex justify-center items-center m-auto md:w-[45%] my-6 text-white  `}>
        Crypto payments is a crypto
exchange for everyone
        </h1>
  
    
         <div onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      
>
         
        
        <Swiper 
        // className='swiper-container'
        spaceBetween={10}
        
        ref={swiperRef}
        breakpoints={{

            // when window width is >= 640px
            320:{
                width:320,
                slidesPerView:1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1350: {
                width: 1350,
                slidesPerView: 5
            }
          }}
        
        

        modules={[ Autoplay]}
        autoplay={
            {
                delay: 1000,
                disableOnInteraction: false,
            }} 
            slidesPerView={5}
            centeredSlides
            
            loop={true}
          
        >



            <SwiperSlide>
                <div className="rounded-[12px] container  group flex flex-col hover:bg-white boxShadow hover:w-[250px] hover:h-[380px]">

               
                <div className=' bg-[#FEC9DD] mx-auto my-4  rounded-[12px] w-[230px] h-[200px] flex justify-center items-center'>
                <img src={firstImage} alt="" className="w-[160px] h-[160px]  " />
                </div>
               <h1 className='my-2 mx-[20px] font-bold hidden group-hover:block'>Create your Account</h1>
               <p className="  mx-[20px] text-[12px]   hidden group-hover:block" >Easy Set up of your account with marketplace CryptoPayments</p>
                

                </div>
                    

                {/* background: linear-gradient(134.49deg, #BEA9ED 2.8%, #BCD4FA 92.19%);
border-radius: 12px; */}

            </SwiperSlide>
            <SwiperSlide >
                <div className="rounded-[12px] container boxShadow group flex flex-col hover:bg-white hover:w-[250px] hover:h-[380px]">

              
            <div className='bg-[#EFCEFF] mx-auto my-4 rounded-[12px] w-[230px] h-[200px] flex justify-center items-center'>

           
            <img src={secondImage} alt=""  className="w-[125px] h-[170px]   " />
            </div>
                        <h1 className='my-2 mx-[20px] font-bold hidden group-hover:block'>Create your Account</h1>
            <p className="  mx-[20px] text-[12px] hidden group-hover:block">Easy Set up of your account with marketplace CryptoPayments</p>
            </div>  
            </SwiperSlide>
            <SwiperSlide >
                <div className="rounded-[12px] container boxShadow group  flex flex-col hover:bg-white hover:w-[250px] hover:h-[380px]">

                
                <div className='myBackground mx-auto my-4 rounded-[12px] w-[230px] h-[200px] flex justify-center items-center'>
               
            <img src={thirdImage} alt=""  className="w-[130px] h-[150px]   " />
            </div>  
                          <h1 className='my-2 mx-[20px] font-bold hidden group-hover:block'>Create your Account</h1>
            <p className=" mx-[20px] text-[12px] hidden group-hover:block">Easy Set up of your account with marketplace CryptoPayments</p>
            </div> 
                </SwiperSlide>
            <SwiperSlide >
                <div className="rounded-[12px] container boxShadow group flex flex-col hover:bg-white hover:w-[250px] hover:h-[380px]">

              
                <div className='bg-[#DAD3FE] mx-auto my-4 rounded-[12px] w-[230px] h-[200px] flex justify-center items-center'>

                
            <img src={fourthImage} alt="" className="w-[155px] h-[155px] ]  " />
            </div>
                         <h1 className='my-2 mx-[20px] font-bold hidden group-hover:block'>Create your Account</h1>
            <p className=" mx-[20px] text-[12px] hidden group-hover:block">Easy Set up of your account with marketplace CryptoPayments</p>
            </div> 
            </SwiperSlide>
            <SwiperSlide >
                <div className="rounded-[12px] container group boxShadow  flex flex-col hover:bg-white hover:w-[250px] hover:h-[380px]">
                    
                <div className="bg-[#FEE69A] mx-auto my-4 rounded-[12px] w-[230px] h-[200px] flex justify-center items-center">
            <img src={fifthImage} alt=""   className="w-[130px] h-[170px]   "/>
            </div>
            
                          
             <h1 className='my-2 mx-[20px] font-bold hidden group-hover:block'>Create your Account</h1>
            <p className=" mx-[20px] text-[12px] hidden group-hover:block">Easy Set up of your account with marketplace CryptoPayments</p>
            </div>
            </SwiperSlide>
           
        </Swiper>
        </div>
      

</div>
      </React.Fragment>
  
  )
}
