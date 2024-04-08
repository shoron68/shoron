import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Skills = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [scss, setScss] = useState(0);
  const [java, setJava] = useState(0);
  const [react, setReact] = useState(0);
  const [tailwind, setTailwind] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (html < 95) {
        setHtml(html + 1);
      }
    }, 2);
  },);

  useEffect(() => {
    setTimeout(() => {
      if (css < 90) {
        setCss(css + 1);
      }
    }, 2);
  },);

  useEffect(() => {
    setTimeout(() => {
      if (scss < 60) {
        setScss(scss + 1);
      }
    }, 2);
  },);
  useEffect(() => {
    setTimeout(() => {
      if (java < 55) {
        setJava(java + 1);
      }
    }, 2);
  },);
  useEffect(() => {
    setTimeout(() => {
      if (react < 75) {
        setReact(react + 1);
      }
    }, 2);
  },);
  useEffect(() => {
    setTimeout(() => {
      if (tailwind < 85) {
        setTailwind(tailwind + 1);
      }
    }, 2);
  },);



  return (
    <>
      <div className="bg-[#494B50]">
        <div className="container mx-auto py-[120px] lg:px-0 px-[10px]">

        <div className="">
              <h2 data-aos='fade-right' className='text-[24px] text-[#FF4522] font-pops font-semibold' >Skills</h2>
              <h3 data-aos='fade-right' className='text-[32px] text-[#FFF] font-pops font-bold uppercase' >Coding Skills</h3>
            </div>

          <div className="lg:w-[70%] w-full mx-auto shadow-2xl mt-[40px]  ">
            
            <div className="flex justify-between ">
                <div data-aos='fade-up' className='w-[32%]'>
                  <h2 className='text-center lg:text-[24px] text-[16px] text-[#fff] font-pops font-semibold pb-[30px]'>HTML</h2>
                  <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={html} text={`${html}%`} />
                </div>

                <div data-aos='fade-up' className='w-[32%]'>
                  <h2 className='text-center lg:text-[24px] text-[16px] text-[#fff] font-pops font-semibold pb-[30px]'>CSS</h2>
                  <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={css} text={`${css}%`} />
                </div>

                <div data-aos='fade-up' className='w-[32%]'>
                  <h2 className='text-center lg:text-[24px] text-[16px] text-[#fff] font-pops font-semibold pb-[30px]'>SCSS</h2>
                  <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={scss} text={`${scss}%`} />
                </div>
            </div>


            <div className="flex justify-between mt-[50px]">
                <div data-aos='fade-up' className='w-[32%] mb-[30px]'>
                  <h2 className='text-center lg:text-[24px] text-[16px] text-[#fff] font-pops font-semibold pb-[30px]'>JAVASCRIPT</h2>
                  <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={java} text={`${java}%`} />
                </div>

                <div data-aos='fade-up' className='w-[32%] mb-[30px]'>
                  <h2 className='text-center lg:text-[24px] text-[16px] text-[#fff] font-pops font-semibold pb-[30px]'>REACT</h2>
                  <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={react} text={`${react}%`} />
                </div>

                <div data-aos='fade-up' className='w-[32%] mb-[30px]'>
                  <h2 className='text-center lg:text-[24px] text-[16px] text-[#fff] font-pops font-semibold pb-[30px]'>TAILWIND</h2>
                  <CircularProgressbar className='lg:w-[50%] w-[90%] mx-auto' value={tailwind} text={`${tailwind}%`} />
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{textAlign:"center"}}>
      <h4>Circular progress bar in React </h4>
      <div style={{ width: 150, marginLeft: 550}}>
        <CircularProgressbar  value={percentage} text={`${percentage}%`} />
      </div>
    </div> */}

    </>
  )
}

export default Skills