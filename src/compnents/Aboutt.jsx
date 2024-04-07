import React from 'react'

const Aboutt = () => {
  return (
    <>
      <div className="bg-[#303134] py-[100px]">
        <div className="container mx-auto">

          <div className="lg:flex lg:justify-between">
            <div className="w-[30%] hidden lg:block" >
              <div className="relative">
                <div className="h-[350px] w-[250px] bg-[#FF4522] rounded-tr-[100px]"></div>
                <h2 className='text-[#303134]   absolute top-[-108px] left-[88px] text-[300px] font-pops font-extrabold'>2</h2>
                <p className='text-[#303134]  absolute bottom-[50px] left-[46px] text-[16px] font-pops font-medium'>Years Of Experience</p>
                <h4 className='text-[#303134]  absolute uppercase rotate-90 top-[160px] left-[-200px] text-[40px] font-pops font-medium' >Musfiqur Rahman</h4>
              </div>
            </div>
            <div className="lg:w-[70%] w-full lg:mx-0 mx-[10px] ">
              <div className="pb-[30px]">
                <h2 className="text-[#fff] text-[36px] font-pops font-semibold relative after:absolute after:content after:h-[3px] after:w-[50px] after:top-[35px] after:left-[180px] after:bg-[#FF4522]">About Me!</h2>
              </div>

              <p className='text-[16px] font-pops font-light  text-[#ffffffd8] leading-[28px]'>Hello there, <br /> and welcome to my corner of the web! I'm Musfiqur Rahman, and I'm passionate about crafting immersive digital experiences through web development. With a blend of creativity, technical prowess, and a keen eye for detail, I specialize in bringing ideas to life in the digital realm. </p>

               <p className='text-[16px] font-pops font-light  text-[#ffffffd8] leading-[28px] pt-[25px]'> I've been immersed in the world of web development for 2 years, honing my skills and keeping up with the ever-evolving landscape of technology. My journey began with a spark of curiosity that ignited into a full-blown passion for coding and creating. Over the years, I've had the privilege of working on a diverse range of projects, each presenting its own unique challenges and opportunities for innovation.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Aboutt