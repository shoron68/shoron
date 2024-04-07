import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Skills = () => {
  const value = 80;



  return (
    <>
      {/* <div className="bg-[#030303] py-[100px]">
        <div className="container mx-auto">
          <div className="">
            <div className="mx-auto w-[26%]">
              <div className="relative">
                <h2 className='text-center text-[64px] text-[rgba(255,255,255,0.21)] font-pops font-extrabold uppercase '>My Skills</h2>
                <h3 className='absolute top-[13px] left-[40px] text-center text-[48px] text-[rgb(255,255,255)] font-pops font-bold uppercase '>My Skills</h3>
              </div>
            </div>
          </div>

          <div className="w-[20%]">
          <CircularProgressbar value={value} text={`${value * 100}%`} />;
          
          </div>

        </div>
      </div> */}

    </>
  )
}

export default Skills