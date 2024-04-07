import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Nav = () => {
    let [show,setShow]=useState(false)
  return (
    <>
    <div className="lg:px-0 px-[10px] lg:absolute lg:bg-transparent bg-[#2F1A39] w-full  lg:my-7 lg:py-[0px] py-[30px]">
        <div className=" container mx-auto  ">
            <div className="flex justify-between">
                <div className="">
                    <h2 className='text-[#fff] font-pops text-[32px] font-extrabold uppercase'>logo</h2>
                </div>
                <div className='mt-[5px]'>
                    <ul  className={`lg:flex  text-center absolute z-50 lg:static ${show ==true ? 'top-[100px] right-0 bg-[#2F1A39]  w-full  duration-700 ': ' duration-700 top-[100px] right-[-500px] w-full bg-[none]'}`}>
                        <li><a href="#" className='text-[18px] font-pops font-semibold text-[white] duration-300 hover:text-[#FF4522]'>Home</a></li>
                        <li className=' px-[30px] lg:py-0 py-[4px]'> <a href="#"  className='text-[18px] font-pops font-semibold text-[white] duration-300 hover:text-[#FF4522]'>About</a></li>
                        <li><a href="#" className='text-[18px] font-pops font-semibold text-[white] duration-300 hover:text-[#FF4522]'>Skills</a></li>
                        <li className=' px-[30px] lg:py-0 py-[4px]'><a href="#" className='text-[18px] font-pops font-semibold text-[white] duration-300 hover:text-[#FF4522]'>Portfolio</a></li>
                        <li className='lg:pb-[0] pb-[10px]'><a href="#" className='text-[18px] font-pops font-semibold text-[white] duration-300 hover:text-[#FF4522]'>Contact</a></li>
                    </ul>   
                </div>
                <div className='lg:hidden relative z-50 top-[4px] right-[10px]' onClick={()=>{setShow(!show)}}>

                    {show==true ? <RxCross2 className='text-[#fff] text-[25px]'/> : <FaBarsStaggered className='text-[#fff] text-[25px]' />}
                    
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav