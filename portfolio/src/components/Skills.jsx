import React from 'react'

const Skills = () => {
  const skills = [
    {
      title: 'Tools & Tech',
      items: [
        'Figma Design',
        'Figma Design',
        'Figma Design',
      ]
    },
    {
      title: 'Tools & Tech',
      items: [
        'Figma Design',
        'Figma Design',
        'Figma Design',
      ]
    }
  ]


  return (
    <div className='h-max w-full bg-primary'>

      {/* Desktop */}
      <div className='hidden lg:flex h-page flex-col'>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px] flex flex-col justify-between'>
            
          </div>
          {/* 1st Row - 1st Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center'>
            <img src="/images/wave-blue.png" alt="" />
          </div>
          {/* 1st Row - 2nd Column */}
          <div className='w-1/2 bg-white py-[104px] px-[64px] relative'>
            <img src="/images/“.png" alt="" className='absolute top-[61px] left-[64px]' />
            <img src="/images/”.png" alt="" className='absolute bottom-[61px] right-[64px]'/>
            <p className='text-[24px] text-lightGray dm-sans-text-regular line-height-40'>
            I love turning ideas into interactive experiences. Whether it's crafting intuitive UI designs in Figma or building smooth, responsive interfaces with React.js, I always aim to make things both functional and visually engaging. I’m also a firm believer in continuous learning—there’s always a new tool, framework, or concept to explore, and that’s what keeps me excited about tech!
            </p>
          </div>
        </div>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px]'>
          </div>
          {/* 2nd Row - 1st Column */}
          <div className='relative w-1/2 bg-white flex flex-col justify-center px-[51px] gap-[31px]'>
            <div className='z-50 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>
              <h1 className='absolute top-[92px] left-[51px] text-[40px] text-blueSecondary dm-serif-display-regular-italic'>Tools & Tech</h1>
              <div className='flex justify-between w-[70%]'>
                <div className='flex flex-col gap-[29px]'>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[29px]'>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                </div>
              </div>
          </div>
          {/* 2nd Row - 2nd Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center relative'>
            <div className='z-40 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>

            <img src="/images/cloud-blue.png" alt="" />
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className='hidden md:flex lg:hidden h-page flex-col'>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px] flex flex-col justify-between'>
            
          </div>
          {/* 1st Row - 1st Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center'>
            <img src="/images/wave-blue.png" alt="" />
          </div>
          {/* 1st Row - 2nd Column */}
          <div className='w-1/2 bg-white py-[104px] px-[64px] relative'>
            <img src="/images/“.png" alt="" className='absolute top-[61px] left-[64px]' />
            <img src="/images/”.png" alt="" className='absolute bottom-[61px] right-[64px]'/>
            <p className='text-[20px] text-lightGray dm-sans-text-regular'>
            I love turning ideas into interactive experiences. Whether it's crafting intuitive UI designs in Figma or building smooth, responsive interfaces with React.js, I always aim to make things both functional and visually engaging. I’m also a firm believer in continuous learning—there’s always a new tool, framework, or concept to explore, and that’s what keeps me excited about tech!
            </p>
          </div>
        </div>
        <div className='flex-1 flex relative'>
          {/* line for x */}
          <div className='z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blueSecondary h-[327px]'>
          </div>
          {/* 2nd Row - 1st Column */}
          <div className='relative w-1/2 bg-white flex flex-col justify-center px-[51px] gap-[31px]'>
            <div className='z-50 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>
              <h1 className='absolute top-[92px] left-[51px] text-[40px] text-blueSecondary dm-serif-display-regular-italic'>Tools & Tech</h1>
              <div className='flex justify-between w-[70%]'>
                <div className='flex flex-col gap-[29px]'>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[29px]'>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" />
                    </div>
                    <p className='text-[24px] dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                </div>
              </div>
          </div>
          {/* 2nd Row - 2nd Column */}
          <div className='w-1/2 bg-primary flex justify-center items-center relative'>
            <div className='z-40 absolute left-1/2 top-[-1px] -translate-x-1/2 border border-blueSecondary w-[327px]'/>

            <img src="/images/cloud-blue.png" alt="" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex md:hidden h-page flex-col'>
        <div className='flex flex-col justify-center items-center'>
          {/* row 1 */}
          <div className='h-[304px] bg-primary flex justify-center items-center py-5'>
            <img src="/images/wave-blue.png" alt="" className='h-full' />
          </div>

          {/* row 2 */}
          <div className='bg-white h-[304px] py-[64px] px-5 relative'>
            <img src="/images/“.png" alt="" className='absolute top-10 left-5' />
            <img src="/images/”.png" alt="" className='absolute bottom-2 right-5'/>
            <p className='text-sm text-lightGray dm-sans-text-regular line-height-28'>
              I love turning ideas into interactive experiences. Whether it's crafting intuitive UI designs in Figma or building smooth, responsive interfaces with React.js, I always aim to make things both functional and visually engaging. I’m also a firm believer in continuous learning—there’s always a new tool, framework, or concept to explore, and that’s what keeps me excited about tech!
            </p>
          </div>

          {/* row 3 */}
          <div className='h-[304px] bg-primary flex justify-center items-center relative py-5'>
            <img src="/images/cloud-blue.png" alt="" className='h-full' />
          </div>

          {/* row 4 */}
          <div className='relative h-[209px] w-full bg-white flex flex-col justify-center px-5 pt-8 pb-12'>
              <h1 className='text-xl text-blueSecondary dm-serif-display-regular-italic mb-5'>Tools & Tech</h1>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-[29px]'>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" className='w-3 h-3' />
                    </div>
                    <p className='text-sm dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" className='w-3 h-3'/>
                    </div>
                    <p className='text-sm dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" className='w-3 h-3'/>
                    </div>
                    <p className='text-sm dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[29px]'>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" className='w-3 h-3'/>
                    </div>
                    <p className='text-sm dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" className='w-3 h-3'/>
                    </div>
                    <p className='text-sm dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                  <div className='flex gap-[13px] items-center'>
                    <div className='bg-bluePrimary rounded-full '>
                      <img src="/images/check_small.png" alt="" className='w-3 h-3'/>
                    </div>
                    <p className='text-sm dm-sans-text-regular text-lightGray'>Figma Design</p>
                  </div>
                </div>
              </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills
