import React from 'react'
import AssetThreeImage1 from '../AssetsThree/First.svg'
import AssetThreeImage2 from '../AssetsThree/Second.svg'
import AssetThreeImage3 from '../AssetsThree/Third.svg'
export default function FifthComponent() {
  return (
    <>
    <div className="container flex flex-col justify-center items-center mx-auto ">
        <h1 className='font-bold text-[40px] my-1 w-auto lg:w-[480px] lg:h-[140px] text-center'>Become a crypto trader in seconds</h1>
        <p className='mt-0 mb-2 text-[22px] md:text-[18px] text-center'>Anytime, Anywhere. Trade crypto on your terms</p>

        <div className="anotherCont gap-[3rem] my-4 flex flex-col lg:flex-row">
            <div className="firstElem flex bg-white w-[290px] h-[364px] flex-col justify-center items-center mx-auto boxShadow rounded-[18px]">
                <img src={AssetThreeImage1} className="mt-5 mb-5" alt="" />
                <h1 className='font-bold text-center text-[18px]'>Buy and Sell Crypto</h1>
                <p className='text-center w-[246px] my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                </p>

                <button className='text-[#8F60FF] text-center border-2 text-[16px] w-[106px] border-[#8F60FF] py-[2px] font-bold rounded-[8px] hover:text-[#800080] hover:border-[#800080]'>Buy Crypto</button>
                


            </div>
            <div className="secondElem flex bg-white w-[290px] h-[364px] flex-col justify-center items-center mx-auto boxShadow rounded-[18px]">
                <img src={AssetThreeImage2} className="mt-5 mb-5" alt="" />
                <h1 className='font-bold text-center text-[18px]'>Buy and Sell Crypto</h1>
                <p className='text-center w-[246px] my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                </p>

                <button className='text-[#8F60FF] text-center border-2 text-[16px] w-[106px] border-[#8F60FF] py-[2px] font-bold rounded-[8px] hover:text-[#800080] hover:border-[#800080]'>Trade Now</button>
                


            </div>
            <div className="thirdElem flex bg-white w-[290px] h-[364px] flex-col justify-center items-center mx-auto boxShadow rounded-[18px]">
                <img src={AssetThreeImage3} className="mt-5 mb-5" alt="" />
                <h1 className='font-bold text-center text-[18px]'>Buy and Sell Crypto</h1>
                <p className='text-center w-[246px] my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                </p>

                <button className='text-[#8F60FF] text-center border-2 text-[16px] w-[106px] border-[#8F60FF] py-[2px] font-bold rounded-[8px] hover:text-[#800080] hover:border-[#800080]'>Learn Now</button>
                


            </div>
        </div>

        <button className='w-[138px] my-2 h-[44px] bg-[#8F60FF] text-[16px] rounded-[4px] hover:bg-[#800080] text-white text-center'>Contact Us</button>
    </div>

    </>
  )
}
