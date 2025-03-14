import React from 'react'
import Button from './Button'

const Projects = () => {

  const projects = [
    {
      title: 'TITLE',
      description: 'Lorem  Ipsim',
      image: '/images/project-1.jpg'
    },
    {
      title: 'TITLE',
      description: 'Lorem  Ipsim',
      image: '/images/project-2.jpg'
    },
    {
      title: 'TITLE',
      description: 'Lorem  Ipsim',
      image: '/images/project-3.jpg'
    },
    {
      title: 'TITLE',
      description: 'Lorem  Ipsim',
      image: '/images/project-4.jpg'
    },
    {
      title: 'TITLE',
      description: 'Lorem  Ipsim',
      image: '/images/project-5.jpg'
    },
    {
      title: 'TITLE',
      description: 'Lorem  Ipsim',
      image: '/images/project-6.jpg'
    },

  ]


  return (
    <div className='flex justify-center items-center bg-bluePrimary'>
      {/* Desktop */}
      <div className='hidden lg:flex bg-bluePrimary h-page  justify-center items-center relative'>
        <div className='flex px-[73px] pt-[64px] pb-[74px] flex-col w-full'>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] text-center'>PROJECTS</h1>
          {/* 3x3 grid col */}
          <div className='grid grid-cols-3 gap-y-[80px] gap-x-[40px] mt-[63px]'>
          {/* <div className='flex flex-wrap justify-around'> */}
            {projects.map((project, index) => (
              <div className='flex justify-center' key={index}>
                <div key={index} className={`cover w-[400px] h-[271px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden`}>
                  <img src={project.image} alt="" className='object-cover w-full h-full cover' />
                  {/* <h1 className='absolute dm-serif-display-regular text-[24px] text-blueSecondary'>{project.title}</h1> */}
                  <p className='absolute bottom-3 left-6 text-[24px] text-white dm-serif-display-regular-italic'>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'>
            <Button variant={'primary'} className={'text-[24px] mt-[63px] py-[7px px-[34px]'}>Explore more {">"}</Button>
          </div>
        </div>
      </div>
      
      {/* Tablet */}
      <div className='hidden sm:flex lg:hidden bg-bluePrimary h-full  justify-center items-center relative'>
        <div className='flex px-[73px] pt-5 pb-[74px] flex-col w-full'>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-2xl text-center'>PROJECTS</h1>
          {/* 3x3 grid col */}
          <div className='grid grid-cols-2 gap-y-8 gap-x-14 mt-6'>
          {/* <div className='flex flex-wrap justify-around'> */}
            {projects.map((project, index) => (
              <div className='flex justify-center' key={index}>
                <div key={index} className={`cover w-[300px] h-[200px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden`}>
                  <img src={project.image} alt="" className='object-cover w-full h-full cover' />
                  {/* <h1 className='absolute dm-serif-display-regular text-[24px] text-blueSecondary'>{project.title}</h1> */}
                  <p className='absolute bottom-3 left-6 text-md text-white dm-serif-display-regular-italic'>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'>
            <Button variant={'primary'} className={'text-sm mt-11 py-[7px] px-[34px]'}>Explore more {">"}</Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex sm:hidden bg-bluePrimary h-full  justify-center items-center relative'>
        <div className='flex pt-5 pb-[74px] flex-col w-full'>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl text-center'>PROJECTS</h1>
          {/* 3x3 grid col */}
          <div className='grid grid-cols-1 gap-y-8 mt-6'>
          {/* <div className='flex flex-wrap justify-around'> */}
            {projects.map((project, index) => (
              <div className='flex justify-center' key={index}>
                <div key={index} className={`cover w-[264px] h-[180px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden`}>
                  <img src={project.image} alt="" className='object-cover w-full h-full cover' />
                  {/* <h1 className='absolute dm-serif-display-regular text-[24px] text-blueSecondary'>{project.title}</h1> */}
                  <p className='absolute bottom-3 left-6 text-sm text-white dm-serif-display-regular-italic'>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'>
            <Button variant={'primary'} className={'text-sm mt-11 py-[7px] px-[34px]'}>Explore more {">"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
