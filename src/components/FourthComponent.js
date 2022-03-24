import React from 'react'
import AssetsTwoFirstImage from '../AssetsTwo/First.svg'
import AssetsTwoSecondImage from '../AssetsTwo/Second.svg'
import AssetsTwoThirdImage from '../AssetsTwo/Third.svg'
import AssetsTwoFourthImage from '../AssetsTwo/Fourth.svg'


export default function FourthComponent() {
  return (
      <>
      <div className="container flex flex-col lg:flex-row  justify-center mx-auto items-center ">
          <div className="firstPart flex flex-col my-10">
              <h1 className='font-bold text-[40px]'>Trade Anywhere</h1>
              <p className='my-2'>Anytime, Anywhere. Trade crypto on your terms</p>

              <div className="item1 my-10 flex">
                   <img src={AssetsTwoFirstImage} alt="" />
                  <div className="second mx-8">
                      
                     <p>Download from</p>  
                     <p className='font-bold'>Apple Store</p>
                      
                  </div>
              </div>
              <div className="item1 my-10 flex">
                   <img src={AssetsTwoSecondImage} alt="" />
                  <div className="second mx-8">
                      
                     <p>Download from</p>  
                     <p className='font-bold'>Google Play</p>
                      
                  </div>
              </div>
              <div className="item1 my-10 flex">
                   <img src={AssetsTwoThirdImage} alt="" />
                  <div className="second mx-8">
                      
                     <p>Download from</p>  
                     <p className='font-bold'>Mac OS</p>
                      
                  </div>
              </div>


          </div>
          <div className="secondPart my-10">
           <img src={AssetsTwoFourthImage} alt="" />
          </div>
      </div>

      </>
  )
}
 