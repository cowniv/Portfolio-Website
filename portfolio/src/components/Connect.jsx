import React from 'react'
import Painting from '/gifs/painting-bg.gif'

const Connect = () => {
  const socials = [
    {
      'name': 'Email',
      'img': '/images/connect-email.png',
      'link': 'jasminfedilo.pup@gmail.com'
    },
    {
      'name': 'LinkedIn',
      'img': '/images/connect-linkedin.png',
      'link': 'https://www.linkedin.com/in/jasmin-ivy-fedilo-0a2b7b1b1/'
    },
    {
      'name': 'Github',
      'img': '/images/connect-github.png',
      'link': 'link'
    },
    {
      'name': 'Facebook',
      'img': '/images/connect-facebook.png',
      'link': 'link'
    }
  ]



  return (
    <div className={`min-h-[200px] lg:min-h-[500px] relative lg:h-[664px] bg-bluePrimary bg-[url('/gifs/painting-bg.gif')] bg-[center_top] bg-cover flex justify-center items-center`}>
      <div className='absolute left-[37px] bottom-0 lg:top-[240px]'>
        <div className='w-[318px]'>
          <h1 className='text-[35px] lg:text-[70px] w-14 lg:w-full dm-serif-display-regular-italic text-white text-shadow-blue'>LET&apos;S CONNECT!</h1>
        </div>
        {/* Socials Desktop */}
        <div className='hidden lg:flex lg:flex-col'>
          {socials.map((social, index) => (
            <div key={index} className='flex items-center gap-2'>
              <div className='bg-white rounded-full h-[25px] flex justify-center items-center w-[25px]'>
                <img src={social.img} alt="" />
              </div>
              <a href={social.link} target='_blank' className='dm-sans-text-italic text-[24px] text-shadow-blue text-white'>{social.name}</a>
            </div>
          ))}
        </div>

        <div className='absolute bottom-0 right-0 lg:hidden'>
          {socials.map((social, index) => (
            <div key={index} className='flex items-center gap-2'>
              <div className='bg-white rounded-full h-[25px] flex justify-center items-center w-[25px]'>
                <img src={social.img} alt="" />
              </div>
              <a href={social.link} target='_blank' className='dm-sans-text-italic text-[12px] text-shadow-blue text-white'>{social.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Connect
