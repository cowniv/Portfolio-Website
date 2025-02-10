import React from 'react'

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
      <div className='bg-bluePrimary h-page flex justify-center items-center relative'>
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
        </div>
      </div>
    </div>
  )
}

export default Projects
