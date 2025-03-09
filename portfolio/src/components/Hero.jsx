import React from 'react'
import Navbar from './Navbar'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center relative'>
        
        {/* Mobile */}
        <div className='md:hidden flex h-full flex-col w-full'>
            {/* Banner with Minsel overlay */}
            <div className='w-full h-[175px] bg-blue-500 relative'>
            <img 
                src="/images/hero-banner.png" 
                className='h-full w-full object-cover' 
                alt="Water lilies painting"
            />
            </div>

            {/* Content section */}
            <div className='w-full px-6 py-8 bg-[#f7f4f1]'>
            {/* Header */}
            <div className='flex items-center gap-4 mb-6'>
                <div className=''>
                    <img src="images/hero.png" className='w-[50px] h-[50px] rounded-full' alt="Profile" />  
                </div>
                <div className='flex flex-col'>
                    <h1 className='dm-serif-display-regular-italic text-[20px] text-blueSecondary'>Jasmin Ivy C. Fedilo</h1>
                    <p className='font-DM-text text-[12px] text-lightGray'>UI/UX Designer</p>
                </div>
            </div>
            
            {/* Description */}
            <div>
                <p className='text-lightGray dm-sans-text-regular text-[12px] mb-5'>
                Sophomore at <span className='dm-sans-text-500-italic'>Polytechnic University of the Philippines (PUP)</span> pursuing a <span className='dm-sans-text-500-italic'>BS in Computer Engineering</span> with a strong foundation in Python.
                </p>
                <p className='text-lightGray dm-sans-text-regular text-[12px]'>
                As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.
                </p>

                {/* Buttons */}
                <div className='flex gap-2 mt-6'>
                    <Button variant='primary' className={'px-[15px] text-[12px] rounded-full'}>Resume</Button>
                    <Button variant='secondary' className={'px-[15px] text-[12px] rounded-full'}>Email</Button>
                </div>
            </div>
            </div>

            {/* Footer mobile */}
            <div className='bg-white h-[75px] w-full py-6 px-4 justify-end flex'>
            <div className='w-[190px] flex items-center gap-3'>
                <div className='w-[170px]  dm-sans-text-italic text-lightGray text-sm '>
                    Want to collaborate or just say hi? Reach out!
                </div>
                <div className='border rounded-full border-lightGray w-[24px] h-[24px] flex justify-center items-center hover:bg-primary hover:scale-125 transition-transform'>
                    <img src="/images/arrow_forward.png" alt="" className='text-black w-[24px] h-[24px]' />
                </div>
            </div>
            </div>
        </div>

        {/* Tablet */}
        <div className='hidden md:flex lg:hidden flex-col w-full'>
            {/* Banner with Minsel overlay */}
            <div className='w-full h-[300px] bg-blue-500 relative'>
            <img 
                src="/images/hero-banner.png" 
                className='h-full w-full object-cover' 
                alt="Water lilies painting"
            />
            </div>

            {/* Content section */}
            <div className='w-full px-6 py-8 bg-[#f7f4f1]'>
            {/* Header */}
            <div className='flex items-center mb-6 gap-4'>
                <img src="images/hero.png" className='w-[80px] h-[80px] rounded-full' alt="Profile" />  
                <div className='flex flex-col'>
                    <h1 className='dm-serif-display-regular-italic text-2xl text-blueSecondary'>Jasmin Ivy C. Fedilo</h1>
                    <p className='font-DM-text text-md text-lightGray'>UI/UX Designer</p>
                </div>
            </div>
            
            {/* Description */}
            <div>
                <p className='text-lightGray dm-sans-text-regular text-md mb-5'>
                Sophomore at <span className='dm-sans-text-500-italic'>Polytechnic University of the Philippines (PUP)</span> pursuing a <span className='dm-sans-text-500-italic'>BS in Computer Engineering</span> with a strong foundation in Python.
                </p>
                <p className='text-lightGray dm-sans-text-regular text-md'>
                As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.
                </p>

                {/* Buttons */}
                <div className='flex gap-[14px] mt-6'>
                <Button variant='primary' className={'px-[25px] text-xl'}>Resume</Button>
                <Button variant='secondary' className={'px-[25px] text-xl'}>Email</Button>
                </div>
            </div>
            </div>

            {/* Footer mobile */}
            <div className='bg-white w-full py-6 px-4'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='dm-sans-text-italic text-lightGray text-lg text-center'>
                Want to collaborate or just say hi? Reach out!
                </div>
                <div className='border rounded-full border-lightGray w-[39px] h-[39px] flex justify-center items-center hover:bg-primary hover:scale-125 transition-transform'>
                <img src="/images/arrow_forward.png" alt="" className='text-black' />
                </div>
            </div>
            </div>
        </div>


        {/* Desktop */}
        <div className='hidden h-full w-full lg:flex mx-auto'>
            {/* Banner */}
            <div className='h-full bg-red-200 w-[35%] relative'>
                <img src="/images/hero-banner.png" className='h-full w-full contain' />
            </div>

            {/* Hero */}
            <div className='relative h-full w-[65%] flex flex-1 flex-col'>
                <div className='flex px-[57px] flex-col justify-center h-full'>
                    {/* Header */}
                    <div className='flex gap-6 items-center mb-[22px]'>
                        <div>
                            <img src="images/hero.png" className='w-[100px] h-[100px]' alt="" />  
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='dm-serif-display-regular-italic text-[40px] text-blueSecondary'>Jasmin Ivy Fedilo</h1>
                            <p className='font-DM-text text-[26px] text-lightGray'>UI/UX Designer</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <p className='text-lightGray dm-sans-text-regular text-2xl mb-10'>Sophomore at <span className='dm-sans-text-500-italic'>Polytechnic University of the Philippines (PUP)</span> pursuing a <span className='dm-sans-text-500-italic'>BS in Computer Engineering </span> with a strong foundation in Python.</p>
                        <p className='text-lightGray dm-sans-text-regular text-2xl'>As an aspiring front-end web developer, I'm passionate about crafting intuitive and visually appealing user interfaces. I'm currently honing my skills in UI/UX design while actively exploring additional programming languages to broaden my technical expertise. I'm committed to continuous learning and growth, eager to apply my technical knowledge and creative mindset to contribute to innovative projects and drive exceptional digital experiences.</p>

                        {/* Buttons */}
                        <div className='flex gap-[14px] mt-[33px]'>
                            <Button variant='primary' className={'text-2xl'}>Resume</Button>
                            <Button variant='secondary' className={'text-2xl'}>Email</Button>
                        </div>
                    </div>
                </div>
                
                <div className='absolute bottom-0 bg-white h-[160px] flex-1 w-full '>
                    <div className='h-full  justify-center items-center w-full'>
                        <div className='w-full flex items-center justify-end pr-[40px] h-full'>
                            <div className='dm-sans-text-italic text-lightGray text-xl w-[226px]'>Want to Collaborate? or say just hi? Reach out</div>
                            <div className='border border-lightGray h-[104px] w-[1px] mr-[40px] ml-[10px]'/>
                            <div className='border rounded-full border-lightGray w-[39px] h-[39px] cursor-pointer justify-center flex items-center hover:bg-primary hover:scale-125 transition-transform'>
                                <img src="/images/arrow_forward.png" alt="" className='text-black' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
