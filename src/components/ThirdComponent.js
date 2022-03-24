import React from 'react'
import AssetsFirstImage from '../Assets/First.svg'
import AssetsSecondImage from '../Assets/Second.svg'
import AssetsThirdImage from '../Assets/Third.svg'
import AssetsFourthImage from '../Assets/Fourth.svg'
import AssetsLineImage from '../Assets/line.svg'

export default function ThirdComponent() {
  return (
    <>
    <div className="container flex flex-col flex-wrap justify-center mx-auto items-center">
        <h1 className='font-bold text-[40px] my-3 text-center'>
        How it Works
        </h1>

        <p className='lg:text-[16px] text-[20px] w-auto lg:w-[784px] text-center my-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torque
        </p>

        <div className="largeContainer my-[10px] flex flex-col lg:flex-row mx-auto">
            <div className="firstContainer flex  flex-col md:flex-row ">
            <div className="firstItem mx-8 flex flex-col my-5 justify-center items-center">
                    <div className="myFirstDiv flex my-3 flex-row">
                    <img src={AssetsFirstImage} alt="" className='w-[97px] h-[65px]' />
                     
                    </div>
                    <p className='text-[#515151] mt-10 mb-2'>Step 1</p>
                    <h1 className='my-2 font-bold text-[18px]'>Download</h1>
                    <p className='my-2 text-[16px] text-center  w-[246px] h-[72px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>



                        
                    
               
               
               
                </div> 
                {/* <div className="image w-[100px]">
                  <img src={AssetsLineImage} alt="" className='my-[3.75rem] w-[100px] hidden md:block ' />
                </div> */}
             <div className="secondItem mx-8 flex flex-col my-5 justify-center items-center">
                    <div className="myFirstDiv flex my-3 flex-row">
                    <img src={AssetsSecondImage} alt="" className='w-[97px] h-[65px]' />
                     
                    </div>
                    <p className='text-[#515151] mt-10 mb-2'>Step 2</p>
                    <h1 className='my-2 font-bold text-[18px]'>Connect Wallet</h1>
                    <p className='my-2 text-[16px] text-center  w-[246px] h-[72px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>



                        
                    
               
               
               
                </div> 

            </div>
            {/* <div className="image w-[100px]">
                  <img src={AssetsLineImage} alt="" className='my-[3.75rem] w-[100px] hidden lg:block ' />
                </div> */}
            <div className="secondContainer flex  flex-col md:flex-row">
            <div className="thirdItem mx-8 flex flex-col my-5 justify-center items-center">
                    <div className="myFirstDiv flex my-3 flex-row">
                    <img src={AssetsThirdImage} alt="" className='w-[97px] h-[65px]' />
                     
                    </div>
                    <p className='text-[#515151] mt-10 mb-2'>Step 3</p>
                    <h1 className='my-2 font-bold text-[18px]'>Start Trading</h1>
                    <p className='my-2 text-[16px] text-center  w-[246px] h-[72px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>



                        
                    
               
               
               
                </div> 

                <div>
                
                </div>
                {/* <div className="image w-[100px]">
                  <img src={AssetsLineImage} alt="" className='my-[3.75rem] w-[100px] hidden md:block ' />
                </div> */}
             <div className="fourthItem mx-8 flex flex-col my-5 justify-center items-center">
                    <div className="myFirstDiv flex my-3 flex-row">
                    <img src={AssetsFourthImage} alt="" className='w-[97px] h-[65px]' />
                     
                    </div>
                    <p className='text-[#515151] mt-10 mb-2'>Step 4</p>
                    <h1 className='my-2 font-bold text-[18px]'>Download</h1>
                    <p className='my-2 text-[16px] text-center  w-[246px] h-[72px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>



                        
                    
               
               
               
                </div> 

            </div>
        
            


        </div>



    </div>
    </>
  )
}
