import React, { useEffect } from 'react'
import profile from "../assets/pp.jpg"
import bg from '../assets/bnrbg.jpg'
import Nav from './Nav'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from "aos";
import "aos/dist/aos.css"

const Banner = () => {
    let [text] = useTypewriter({
        words: ['rontend Developer'],
        loop: {},

    })
    useEffect(()=>{
        AOS.init({duration:"1200"})
    })
    return (
        <>
            <div className=" " >
                <div className="  bg-[url('../src/assets/bnrbg.jpg')] h-[600px] lg:h-[800px] w-full bg-no-repeat bg-center bg-cover lg:pt-[200px] pt-[50px] lg:pb-[100px] ">
                    <div className="container mx-auto lg:px-0 px-[10px]">
                        <div className="lg:flex lg:justify-between">
                            <div className="lg:w-[50%] w-full lg:text-start text-center  lg:mt-[30px]">
                                <h1 data-aos='fade-in' className='text-[white] lg:text-[58px] text-[32px] font-pops font-bold' >Hi'<br /> I'm <span>Musfiqur Rahman</span></h1>
                                <h2 data-aos='fade-in' className='text-[#FF4522] lg:text-[48px] text-[24px] font-type font-medium'>F{text} <Cursor /></h2>

                                <div data-aos='fade-right' className="">
                                    <p className='pt-[40px] lg:text-start text-center text-[14px] lg:text-[16px] text-[#ffffffe1] font-pops font-light'>As a frontend developer, you play a crucial role in crafting the user experience of websites and applications. Your expertise lies in translating design mockups and user interface (UI) concepts into interactive and engaging digital experiences. You work with a combination of programming languages such as HTML, CSS, and JavaScript to create responsive layouts, implement animations, and ensure seamless functionality across various devices and browsers.</p>
                                    <div className="mt-[40px]">
                                        <a href="#" className='px-[35px] font-pops py-[15px] border-[2px] text-[white] rounded-[10px] duration-500 hover:bg-[#FF4522]'>Download CV</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className=" h-[520px] w-[395px]   rounded-[10px] ">
                                <img src={profile} className='h-[500px] drop-shadow-2xl z-10  w-[full] rounded-[10px] mt-[10px] mx-auto my-auto' alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner