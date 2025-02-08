import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-primary w-full h-page flex justify-center items-center relative'>
        <div className='h-full w-full flex'>
            <div className='h-full bg-red-200 w-[576px]'>
                <img src="/images/hero-banner.png" className='h-full w-full contain' />
            </div>
            <div className='w-full relative h-full pt-5 flex flex-1 flex-col'>
                <div className='flex px-[57px] flex-col pt-[188px]'>
                    {/* Header */}
                    <div className='flex gap-6 items-center mb-[22px]'>
                        <div>
                            <img src="images/hero.png" className='w-[100px] h-[100px]' alt="" />   
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-DM-header text-[40px] text-blueSecondary'>Jasmin Ivy Fedilo</h1>
                            <p className='font-DM-text text-[26px] text-lightGray'>UI/UX Designer</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <p className='text-lightGray text-2xl mb-10'>Sophomore at Polytechnic University of the Philippines (PUP) pursuing a BS in Computer Engineering with a strong foundation in Python.</p>
                        <p className='text-lightGray text-2xl'>As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.</p>
                    </div>
                </div>
                <div className='absolute bottom-0 bg-white h-[160px] flex-1 w-full '>
                    <div className='w-full py-[44px] flex items-center justify-end pr-[40px]'>
                        <div className='dm-sans-text-italic text-lightGray text-xl w-[226px]'>Want to Collaborate? or say just hi? Reach out</div>
                        <div className='border border-lightGray h-[104px] w-[1px] mr-[40px] ml-[10px]'/>
                        <div className='border rounded-full border-lightGray w-[39px] h-[39px] justify-center flex items-center'>
                            <img src="/images/arrow_forward.png" alt="" className='text-black' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
