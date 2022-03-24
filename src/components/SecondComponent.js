import React, { Fragment } from 'react'
import Image1 from "../Images/First.svg"
import Image2 from "../Images/Second.svg"
import Image3 from "../Images/Third.svg"
import Image4 from "../Images/Fourth.svg"

export default function () {
  return (
   <>

   <div className="container flex flex-col justify-center items-center lg:flex-row    bg-[#F8F5FF] rounded-[12px] mx-auto my-[10rem]">
     <div className="container1 my-[20px] flex flex-col md:flex-row ">

     
     <div className="firstElem my-[10px] mx-[25px] hover:bg-[white] w-[230px] h-[260px] rounded-[12px] flex flex-col hover:cursor-pointer ">
       <div className="image w-[40px] h-[40px] rounded-full anotherBackground flex items-center justify-center mx-2 my-[20px]">
       <img src={Image1} alt="" className='w-[16px] h-[26px] '/>
       </div>

       <div className='my-2 mx-2'>
         <span className='text-[24px]'>BTC/USDT</span>
         <span className='mx-2 bg-[#F27247] font-bold text-[16px] text-white px-3 py-3 rounded-[8px]'>-0.79%</span>
         
       </div>

       <h1 className='my-3 font-bold text-[22px] mx-2'>55350.21</h1>
       <p className='my-3 text-[#515151] text-[16px] mx-2'>55350.21</p>
         

     </div>
     <div className="secondElem my-[10px] hover:cursor-pointer mx-[25px] hover:bg-[white] w-[230px] h-[260px] rounded-[12px] flex flex-col ">
       <div className="image w-[40px] h-[40px]  flex items-center justify-center mx-2 my-[20px]">
       <img src={Image2} alt="" className='w-[40px] h-[40px] '/>
       </div>

       <div className='my-2 mx-2'>
         <span className='text-[24px]'>BTC/USDT</span>
         <span className='mx-2 bg-[#6DBC89] font-bold text-[16px] text-white px-3 py-3 rounded-[8px]'>0.79%</span>
         
       </div>

       <h1 className='my-3 font-bold text-[22px] mx-2'>55350.21</h1>
       <p className='my-3 text-[#515151] text-[16px] mx-2'>55350.21</p>
         

     </div>
     
     </div>

     <div className="container2 my-[20px] flex flex-col md:flex-row  ">
     <div className="thirdElem hover:cursor-pointer my-[10px] mx-[25px] hover:bg-[white] w-[230px] h-[260px] rounded-[12px] flex flex-col ">
       <div className="image w-[40px] h-[40px]  flex items-center justify-center mx-2 my-[20px]">
       <img src={Image3} alt="" className='w-[40px] h-[40px] '/>
       </div>

       <div className='my-2 mx-2'>
         <span className='text-[24px]'>BTC/USDT</span>
         <span className='mx-2 bg-[#6DBC89] font-bold text-[16px] text-white px-3 py-3 rounded-[8px]'>0.79%</span>
         
       </div>

       <h1 className='my-3 font-bold text-[22px] mx-2'>55350.21</h1>
       <p className='my-3 text-[#515151] text-[16px] mx-2'>55350.21</p>
         

     </div>
     <div className="fourthElem hover:cursor-pointer my-[10px] mx-[25px] hover:bg-[white] w-[230px] h-[260px] rounded-[12px] flex flex-col ">
       <div className="image w-[40px] h-[40px]  flex items-center justify-center mx-2 my-[20px]">
       <img src={Image4} alt="" className='w-[40px] h-[40px] '/>
       </div>

       <div className='my-2 mx-2'>
         <span className='text-[24px]'>BTC/USDT</span>
         <span className='mx-2 bg-[#6DBC89] font-bold text-[16px] text-white px-3 py-3 rounded-[8px]'>0.79%</span>
         
       </div>

       <h1 className='my-3 font-bold text-[22px] mx-2'>55350.21</h1>
       <p className='my-3 text-[#515151] text-[16px] mx-2'>55350.21</p>
         

     </div>
    

    
     </div>

     
   </div>
   </>
   
  )
}
