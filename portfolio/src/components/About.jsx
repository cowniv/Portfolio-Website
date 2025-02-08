import React from 'react'
import Button from './Button'

const About = () => {
  const certs = [
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
  ]
  const educs = [
    {
      level: 'COLLEGE',
      schoolName: 'POLYTECHNIC UNIVERSITY OF THE PHILIPPINES (PUP)',
      courses: [
        'Bachelor of Science in Computer Engineering (BSCpE)'
      ]
    },
    {
      level: "SENIOR HIGH SCHOOL (2021-2023)",
      schoolName: 'ANGONO NATIONAL HIGH SCHOOL',
      courses: [
        "Grade 12 - With Highest Honors",
        "Grade 11 - With High Honors"
      ]
    },
    {
      level: "ELECTIVES (2017-2019)",
      courses: [
        'Journalism',
        'Multimedia Arts',
        'Theater Arts'
      ]
    }
  ]

  const exps = [
    {
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet. Non minus esse eum voluptas voluptas qui consequatur voluptatum sit dolores quaerat ut vitae obcaecati id accusantium laboriosam. '
    },
    {
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet. Non minus esse eum voluptas voluptas qui consequatur voluptatum sit dolores quaerat ut vitae obcaecati id accusantium laboriosam. '
    },
    {
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet. Non minus esse eum voluptas voluptas qui consequatur voluptatum sit dolores quaerat ut vitae obcaecati id accusantium laboriosam. '
    },
  ]



  return (
    <div className='bg-primary w-full h-page flex justify-center items-center relative'>
      {/* Certifications and Education */}
      <div className='h-full bg-white w-[35%] px-[39px] pt-[51px] pb-[58px]'>
        {/* Certifications */}
        <div className='flex flex-col'>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[9px]'>Certifications</h1>
          <ul className='mb-[16px] list-inside list-disc'>
            {certs.map((cert, index) => (
              <li key={index} className='text-[24px] font-DM-text text-lightGray'>
                {cert}
              </li>
            ))}
          </ul>
          <Button variant={'primary'} className={'w-[179px] flex justify-center text-nowrap'}>
            View More
          </Button>
        </div>

        {/* Education */}
        <div className='flex flex-col mt-[51px]'>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[9px]'>Education</h1>
          <div className='mb-[16px] list-inside list-disc'>
            {educs.map((educ, index) => (
              <div className='flex flex-col'>
                <div className='dm-sans-text-xl text-[24px] text-lightGray'>
                  {educ.level}
                </div>
                <div className='dm-sans-text-regular text-[24px] text-lightGray'>
                  {educ.schoolName}
                </div>
                <ul className='font-DM-text text-lightGray list-inside list-disc mb-[20px] text-[24px]'>
                {educ.courses.map((course, index) => (
                  <li key={index} className='pl-4'>
                    {course}
                  </li>
                ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className='w-[65%] relative h-full pt-[51px] pl-[61px] pr-[56px] flex flex-1 flex-col'>
        <div>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[16px]'>Experiece</h1>
          <div>
          {exps.map((exp, index) => (
            <div>
              <div className='border border-lightGray'/>
              <div key={index} className='flex pt-[7px] pb-[12px]'>
                <div className='dm-sans-text-regular text-[24px] text-blueSecondary w-[122px]'>
                  {exp.title}
                </div>
                <div className='dm-sans-text-regular pl-[43px] text-[24px] text-lightGray'>
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
          <div className='border border-lightGray'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
