import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sweet from "../assets/sweet.png"
import bwfc from "../assets/bwfc.png"
import petroil from "../assets/petroil.png"
import areo from "../assets/areo.png"
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Portfolio = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div data-aos='fade-right' className='absolute lg:bottom-[-70px] bottom-[-40px] text-[#FF4522] right-[50px] text-[30px] cursor-pointer' onClick={onClick}> <GrLinkNext /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:bottom-[-70px] bottom-[-40px] text-[#FF4522] right-[100px] z-10 text-[30px] cursor-pointer' onClick={onClick}> <GrLinkPrevious /> </div>
        );
    }


    var settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
        <>
            <div className=" bg-[#303134] lg:py-[120px] py-[50px]">
                <div className="container mx-auto ">
                    <div className="lg:w-[50%] w-full lg:px-0 px-[10px]">
                        <h3 data-aos='fade-up' className='text-[28px] text-[#FF4522] font-pops font-semibold'>Portfolio</h3>
                        <h2 data-aos='fade-up' className='text-[32px] text-[#fff] font-pops font-bold'>SELECTED WORKS</h2>
                    </div>
                    <div data-aos='fade-up' className="pt-[50px] lg:mx-0 mx-[10px] ">
                        <Slider {...settings}>

                            <div className="w-[30%]    ">
                                <a href="https://sweet01.netlify.app"  target='blank'>
                                <img src={sweet} className='lg:w-[90%] w-full h-full rounded-[10px]  transition duration-300 ease-in-out hover:scale-90' alt="" />
                                </a>
                            </div>
                            <div className="w-[30%]  ">
                                <a href="https://petroil-tw.netlify.app" target='blank'>
                                <img src={petroil} className='lg:w-[90%] w-full rounded-[10px]   transition duration-300 ease-in-out hover:scale-90 ' alt="" />
                                </a>
                                   
                            </div>
                            <div className="w-[30%]">
                                    <a href="https://bwfc01.netlify.app"  target='blank'>
                                    <img src={bwfc} className='lg:w-[90%] w-full rounded-[10px]  transition duration-300 ease-in-out hover:scale-90  ' alt="" />
                                    </a>
                            </div>
                            <div className="w-[30%]">
                                    <a href="https://areo-page.netlify.app"  target='blank'>
                                    <img src={areo} className='lg:w-[90%] w-full rounded-[10px]  transition duration-300 ease-in-out hover:scale-90  ' alt="" />
                                    </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio