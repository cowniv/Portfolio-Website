import React, {useState} from 'react'
import Button from './Button'
import Drawer from '@mui/material/Drawer';

const About = () => {
  const [drawer, setDrawer] = useState(false)

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  const certs = [
    'UI/UX Design Fundamentals',
    'AI Fundamentals',
    'Data Literacy',
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
      title: 'Google Developer Groups on Campus PUP (GDG PUP)',
      subtitle: 'UI/UX Co-Lead | October 2023 – Present',
      description: [
        'Spearheaded UI/UX initiatives, leading design projects and guiding a team of 130+ members.',
        'Organized and facilitated multiple Study Jams and workshops, equipping members with practical UI/UX skills and industry insights',
        'Collaborated with developers and designers to create innovative user-centered projects and improve community engagement.'
      ]
    },
    {
      title: 'PUP Hygears',
      subtitle: 'UI/UX Consultant | September 2023 – Present',
      description: [
        "Provided UI/UX expertise in the development of the PUP Hygears website, ensuring accessibility, usability, and a visually appealing interface.",
        "Supported the organization’s mission of enhancing research recognition and technological innovation at PUP.",
        "Contributed to projects that aim to tackle real-world issues through innovation and collaboration in engineering and technology."
      ]
    },
    {
      title: 'ICPEP Student Edition - PUP Manila (Institute of Computer Engineers of the Philippines – Student Edition)',
      subtitle: 'Founding Member, Media & Publications | October 2024 – Present',
      description: [
        "Played a key role in establishing the organization’s branding and identity, ensuring a professional and cohesive visual theme",
        "Managed media and publication efforts, helping create promotional materials and engaging content to boost community awareness.",
        "Assisted in planning events and initiatives, fostering a supportive environment for computer engineering students."
      ]
    },
    {
      title: 'Organizations & Affiliations',
      subtitle: '(Active Member & Event Participant)',
      description: [
        "AWS Cloud Club PUP – Engaging in cloud computing learning sessions and networking events.",
        "PUP The Programmers’ Guild – Participating in software development activities.",
        "PUP Microsoft Student Community – Attending tech-related events, workshops.",
        "JBECP – Junior Blockchain Education Consortium of the Philippines (PUP Manila Chapter) – Exploring blockchain technology and its applications through discussions.",
      ]
    },
  ]



  return (
    <div className='h-max flex relative justify-center items-center bg-primary max-w-[2800px] mx-auto w-full'>
      {/* Desktop */}
      <div className='hidden lg:flex w-full bg-primary h-page justify-center items-center relative'>
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
            <Button variant={'primary'} className={'w-[200px] flex justify-center text-xl text-nowrap'}>
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
        <div className='w-[65%] relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
          <div className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[16px]'>Experiece</h1>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <div>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-[24px] text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-[24px] dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[24px] text-lightGray mt-2 line-height-38'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='line-height-38 text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className='border border-lightGray'/>
            </div>
          </div>
            {/* View more button */}
            <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 pb-[51px]'>
              <Button onClick={toggleDrawer} variant={'primary'} className={'w-[200px] flex justify-center text-xl text-nowrap'}>
                View More
              </Button>
            </div>
        </div>
      </div>

      {/* Tablet */}
      <div className='hidden sm:flex lg:hidden bg-primary min-h-[1200px] flex-col justify-center items-center relative'>
        {/* Experience */}
        <div className='relative h-full pt-4 flex flex-1 flex-col p-5'>
          <div>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-2xl mb-[16px]'>Experiece</h1>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <div>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-md text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-md dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[12px] text-lightGray mt-2'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className='border border-lightGray'/>
            </div>
          </div>
          {/* View more button */}
          <div className='absolute left-1/2 bottom-10 transform -translate-x-1/2'>
            <Button onClick={toggleDrawer} variant={'primary'} className={'px-[15px] text-[13px] rounded-full'}>
              View More
            </Button>
          </div>
        </div>

        {/* Certifications and Education */}
        <div className='h-full w-full bg-white pt-4 pb-[58px] p-5'>
          {/* Certifications */}
          <div className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-2xl mb-[9px]'>Certifications</h1>
            <ul className='mb-[16px] list-inside list-disc'>
              {certs.map((cert, index) => (
                <li key={index} className='text-md font-DM-text text-lightGray'>
                  {cert}
                </li>
              ))}
            </ul>
            <Button variant={'primary'} className={'w-[150px] flex justify-center text-nowrap text-md'}>
              View More
            </Button>
          </div>

          {/* Education */}
          <div className='flex flex-col mt-7'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[9px]'>Education</h1>
            <div className='mb-[16px] list-inside list-disc'>
              {educs.map((educ, index) => (
                <div className='flex flex-col'>
                  <div className='dm-sans-text-xl text-md text-lightGray mb-3'>
                    {educ.level}
                  </div>
                  <div className='dm-sans-text-regular text-md text-lightGray'>
                    {educ.schoolName}
                  </div>
                  <ul className='font-DM-text text-lightGray list-inside list-disc mb-[20px] text-md'>
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
      </div>

      {/* Mobile */}
      <div className='flex sm:hidden bg-primary h-full flex-col justify-center items-center relative'>
        {/* Experience */}
        <div className='relative h-full pt-4 flex flex-1 flex-col p-5'>
          <div>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[16px]'>Experiece</h1>
            <div>
            {exps.slice(0, 2).map((exp, index) => (
              <div>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-[12px] text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-[12px] dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[12px] text-lightGray mt-2'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className='border border-lightGray'/>
            </div>
          </div>
          <div className='mt-5'>
            <Button onClick={toggleDrawer} variant={'primary'} className={'w-[100px] px-[12px] text-[13px] rounded-full'}>
              View More
            </Button>
          </div>
        </div>

        {/* Certifications and Education */}
        <div className='h-full w-full bg-white pt-4 pb-[58px] p-5'>
          {/* Certifications */}
          <div className='flex flex-col'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[9px]'>Certifications</h1>
            <ul className='mb-[16px] list-inside list-disc'>
              {certs.map((cert, index) => (
                <li key={index} className='text-xs font-DM-text text-lightGray'>
                  {cert}
                </li>
              ))}
            </ul>
            <Button variant={'primary'} className={'w-[100px] flex justify-center text-nowrap text-sm'}>
              View More
            </Button>
          </div>

          {/* Education */}
          <div className='flex flex-col mt-7'>
            <h1 className='dm-serif-display-regular-italic text-blueSecondary text-xl mb-[9px]'>Education</h1>
            <div className='mb-[16px] list-inside list-disc'>
              {educs.map((educ, index) => (
                <div className='flex flex-col'>
                  <div className='dm-sans-text-xl text-sm text-lightGray mb-3'>
                    {educ.level}
                  </div>
                  <div className='dm-sans-text-regular text-sm text-lightGray'>
                    {educ.schoolName}
                  </div>
                  <ul className='font-DM-text text-lightGray list-inside list-disc mb-[20px] text-sm'>
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
      </div>


        <Drawer
          anchor='right'
          open={drawer}
          onClose={toggleDrawer}
        >
          <>
          {/* Drawer Desktop */}
          <div className='hidden lg:block w-max bg-[#C7D9E5] relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
            <div className='flex flex-col '>
              <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[16px]'>Experiece</h1>
              <div className='overflow-y-scroll h-[80vh] scroll-container'>
              {exps.slice(2).map((exp, index) => (
                <div className='max-w-[1040px]'>
                  <div className='border border-lightGray'/>
                  <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                    <div className='dm-sans-text-bold text-[24px] text-blueSecondary'>
                      {exp.title}
                    </div>
                    <div className='text-blueSecondary text-[24px] dm-sans-text-regular'>
                      <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                    </div>
                    <ul className='dm-sans-text-regular list-inside list-disc text-[24px] text-lightGray mt-2 line-height-38'>
                      {exp.description.map((desc, index) => (
                        <li key={index} className='line-height-38 text-[#7C7C7C]'>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className='border border-lightGray'/>
              </div>
            </div>
              {/* View more button */}
              <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 pb-[51px]'>
                <Button onClick={toggleDrawer} variant={'primary'} className={'w-[200px] flex justify-center text-xl text-nowrap'}>
                  Back
                </Button>
              </div>
          </div>

          {/* Drawer Tablet */}
          <div className='bg-[#C7D9E5] relative min-h-full h-max pt-[51px] pl-[61px] pr-[56px] flex-1'>
            <div className='flex flex-col '>
              <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] mb-[16px]'>Experiece</h1>
              <div className='overflow-y-scroll h-[80vh] scroll-container'>
              {exps.slice(0, 2).map((exp, index) => (
              <div>
                <div className='border border-lightGray'/>
                <div key={index} className='flex flex-col pt-[7px] pb-[12px]'>
                  <div className='dm-sans-text-bold text-md text-blueSecondary'>
                    {exp.title}
                  </div>
                  <div className='text-blueSecondary text-md dm-sans-text-regular'>
                    <span className='dm-sans-text-italic'>{exp.subtitle.split('|').splice(0, 1)} </span>| {exp.subtitle.split('|').splice(1, 1)}
                  </div>
                  <ul className='dm-sans-text-regular list-inside list-disc text-[12px] text-lightGray mt-2'>
                    {exp.description.map((desc, index) => (
                      <li key={index} className='text-[#7C7C7C]'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
              <div className='border border-lightGray'/>
              </div>
            </div>
              {/* View more button */}
              <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 pb-[51px]'>
                <Button onClick={toggleDrawer} variant={'primary'} className={'w-[150px] flex justify-center text-sm text-nowrap'}>
                  Back
                </Button>
              </div>
          </div>
          
          </>
      </Drawer>
    </div>
  )
}

export default About
