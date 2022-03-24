import React from 'react'

export default function FooterComponent() {
  return (
    <>
    <div className="container flex flex-col lg:flex-row justify-between">
        <div className="firstPart my-12 mx-[5rem]">
            <h1 className='font-bold'>Ready to get started?</h1>
            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <button className='my-12 w-[175px] h-[50px] rounded-[4px] font-bold text-center text-white bg-[#8F60FF] hover:bg-[#800080]'>Get Started</button>

        </div>
        <div className="secondPart my-12 mx-[5rem] lg:mx-[0rem]">
            <ul>
                <li className='text-[#8F60FF] hover:underline-offset-4 hover:underline cursor-pointer'>Navigation</li>
                <li className='my-3 hover:underline-offset-4 hover:underline cursor-pointer'>Email Marketing</li>
                <li className='my-3 hover:underline-offset-4 hover:underline cursor-pointer'>Campaigns</li>
                <li className='my-3 hover:underline-offset-4 hover:underline cursor-pointer'>Branding</li>
                <li className='my-3 hover:underline-offset-4 hover:underline cursor-pointer'>Offline</li>
            </ul>

        </div>
    </div>
    </>
  )
}
