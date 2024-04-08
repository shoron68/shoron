import React from 'react'
import { CiLocationOn, CiGlobe } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter,FaInstagram  } from "react-icons/fa6";



const Contact = () => {
    return (
        <div className="bg-[#494B50]">
            <div className="container mx-auto lg:py-[120px] py-[80px]">
                <div className="lg:flex lg:justify-between lg:mx-0 mx-[10px]">
                    <div className="lg:w-[40%] w-full ">
                        <div className="">
                            <h2 data-aos='fade-up' className='text-[24px] text-[#FF4522] font-pops font-semibold '>Contact</h2>
                            <h3 data-aos='fade-up' className='text-[32px] text-[#fff] font-pops font-bold'>GET IN TOUCH</h3>
                            <p data-aos='fade-up' className='text-[16px] lg:w-[90%] w-full pt-[20px] text-[rgba(255,255,255,0.65)] font-pops font-light lg:text-start text-center ' >Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                        </div>
                        <div className="">
                            <div className="flex pt-[50px]">
                                <CiLocationOn data-aos='fade-right' className='text-[40px] text-[#FF4522] ' />
                                <a href="#"><h5 data-aos='fade-right' className=' pl-[10px] text-[18px] text-[#fff] font-pops font-medium duration-300 hover:text-[#ff4722]'>H# F-23, R# S-3, Eastern Housing 2nd Phase, Pallabi, Rupnagar, Dhaka - 1216</h5></a>
                            </div>
                            <div className="flex py-3">
                                <FiPhoneCall data-aos='fade-right' className=' lg:mt-[8px] mt-[4px] text-[20px] text-[#FF4522]' />
                                <a href="#"><h5 data-aos='fade-right' className='pl-[10px] text-[18px] text-[#fff] font-pops font-medium duration-300 hover:text-[#ff4722]'>+880 1721 86 28 68</h5></a>
                            </div>
                            <div className="flex">
                                <MdOutlineEmail data-aos='fade-right' className=' lg:mt-[8px] mt-[4px] text-[20px] text-[#FF4522]' />
                                <a href="#"><h5 data-aos='fade-right' className=' pl-[10px] text-[18px] text-[#fff] font-pops font-medium duration-300 hover:text-[#ff4722]'>mr.shoron.7514@gmail.com</h5></a>
                            </div>
                            <div className="flex pt-[12px]">
                                <CiGlobe data-aos='fade-right' className='lg:mt-[8px] mt-[4px] text-[20px] text-[#FF4522]' />
                                <a href="#"><h5 data-aos='fade-right' className='pl-[10px] text-[18px] text-[#fff] font-pops font-medium duration-300 hover:text-[#ff4722] '>www.domain.com</h5></a>
                            </div>
                        </div>
                        <div data-aos='fade-right' className="flex mt-[40px]   ">
                        <FaFacebookF data-aos='fade-right' className=' cursor-pointer text-[25px] text-[#FF4522]  transition duration-300 ease-in-out hover:scale-110' />
                        <FaXTwitter data-aos='fade-right' className='cursor-pointer mx-[20px] text-[25px] text-[#FF4522]  transition duration-300 ease-in-out hover:scale-110' />
                        <FaInstagram data-aos='fade-right'  className='cursor-pointer  text-[25px] text-[#FF4522]  transition duration-300 ease-in-out hover:scale-110' />

                        </div>
                    </div>
                    <div data-aos='fade-up' className="lg:w-[40%] w-full mt-[80px] lg:mx-0 mx-auto">
                        <input data-aos='fade-up' type="text" placeholder='Name' className='text-[#fff] font-pops block bg-transparent rounded-[5px] border-[1px] py-[10px] pl-[20px] lg:pr-[200px] pr-[130px]' />
                        <input data-aos='fade-up' type="text" placeholder='Email' className=' text-[#fff] my-[30px] font-pops block bg-transparent rounded-[5px] border-[1px] py-[10px] pl-[20px] lg:pr-[200px] pr-[130px]' />
                        <input data-aos='fade-up' type="text" placeholder='Message' className=' text-[#fff] font-pops block bg-transparent rounded-[5px] border-[1px] pt-[10px] pb-[70px] pl-[20px] lg:pr-[200px] pr-[130px]' />
                        
                        <button data-aos='fade-up' className=' my-[30px] text-[16px] font-pops text-[#fff] py-[10px] rounded-[5px] lg:px-[184px] px-[142px] bg-[#ff4722] transition duration-300 ease-in-out hover:scale-90'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact