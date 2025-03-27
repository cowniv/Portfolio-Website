import React, {useState} from 'react'
import Button from './Button'
import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: '',
    description: '',
    image: ''
  });
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedProject({
      title: '',
      description: '',
      image: ''
    });
  }

  const handleProject = (project) => {
    handleOpen()
    setSelectedProject(project)
  }

  const projects = [
    {
      title: 'ALERTECH',
      description: `
      <div>
        <p>
          Alertech is an integrated fire detection and alert solution that reduces response time and potential fire hazards. The system consists of a mobile app, a website, and an IoT device, tracking temperature, humidity, and smoke levels to provide real-time alerts to users and fire authorities in case of potential fire hazards.
        </p>

        <p>UI/UX Design Process</p>
        <p>
          As the lead UI/UX designer, I focused on creating a cohesive and user-friendly experience for both web and mobile platforms. The design process followed a user-centered approach, ensuring accessibility and ease of use.
        </p>

        <ol>
          <li>
            <strong>User Research &amp; Problem Definition</strong>
            <ul>
              <li>Conducted research on existing fire safety systems and their pain points.</li>
              <li>Refined project scope, focusing on homeowners, building managers, and emergency responders.</li>
            </ul>
          </li>
          <li>
            <strong>Wireframing &amp; Prototyping</strong>
            <ul>
              <li>Developed low-fidelity wireframes to establish the layout and user flow.</li>
              <li>Built basic prototypes in Figma, focusing on clarity and navigation.</li>
            </ul>
          </li>
          <li>
            <strong>Visual Design &amp; Branding</strong>
            <ul>
              <li>Created an intuitive and clean UI that reflects the core need, highlighting urgency (red) and safety (green).</li>
              <li>Employed consistent typography and spacing for readability.</li>
            </ul>
          </li>
          <li>
            <strong>Usability Testing &amp; Iteration</strong>
            <ul>
              <li>Conducted A/B testing with potential users to refine interface elements.</li>
              <li>Iterated on design to enhance clarity, responsiveness, and accessibility across devices.</li>
            </ul>
          </li>
        </ol>

        <p>
          This project was developed as part of the Alertech Arduino Hackathon, in collaboration with a team of three. Through iterative design improvements and a focus on user feedback, Alertech delivers an efficient and accessible fire safety solution.
        </p>
      </div>
      `,
      image: '/images/project-1.png',
      links: [
        {
          title: 'Website',
          url: 'https://www.google.com'
        },
        {
          title: 'Github',
          url: 'https://www.github.com'
        }
      ]
    },
    {
      title: 'SPARKFEST',
      description: `
      <div classname='text-[#7C7C7C] text-[24px] dm-sans-text-regular'>
        <p>SparkFest is a <span classname='text-[#7C7C7C]'>one-week hackathon</span> designed to bring together students to tackle real-world challenges through innovative tech solutions. The event focuses on collaboration, problem-solving, and creativity, aiming to develop solutions aligned with the United Nations’ Sustainable Development Goals (SDGs).</p>
        <p>UI/UX Design Process</p>
        <p>As the UI/UX Co-Lead, I was responsible for designing an engaging and user-friendly website to enhance the hackathon experience. The design process included:</p>
        <ul>
          <li>User Research & Wireframing — Conducted research on user needs and behaviors, then created wireframes to establish the website layout.</li>
          <li>High-Fidelity UI Design — Developed a colorful, visually appealing interface with consistent branding, structured layouts, and an intuitive user flow.</li>
          <li>Responsive & Interactive Design — Ensured smooth navigation and accessibility across desktop and mobile devices.</li>
          <li>Collaboration with Developers — Worked closely with the web development team to translate the design into a fully functional website.</li>
        </ul>
        <p>By integrating usability and aesthetics, I helped create a seamless and engaging platform for SparkFest participants.</p>
      </div>
      `,
      image: '/images/project-2.png'
    },
    {
      title: 'ARDUINO DAY',
      description: `
        <div>
          <p>
            Arduino Day is a global celebration of Arduino&rsquo;s birthday, bringing together enthusiasts, developers, and innovators to share their experiences and learn more about the open-source platform. The event includes workshops, talks, and showcases from communities around the world.
          </p>

          <p>UI/UX Design Process</p>
          <p>
            As the UI/UX Co-Lead, I played a key role in designing an interactive and informative website for the event. The design process involved:
          </p>

          <ul>
            <li>
              <strong>User-Centered Research &amp; Wireframing</strong> &mdash; Conducted research to understand participant needs and designed structured wireframes to establish the site layout.
            </li>
            <li>
              <strong>Modern &amp; Engaging UI Design</strong> &mdash; Created an interface that reflected Arduino&rsquo;s identity, incorporating vibrant colors, clear typography, and intuitive navigation.
            </li>
            <li>
              <strong>Seamless User Experience</strong> &mdash; Ensured that content was easily accessible, allowing attendees to quickly view event schedules, speaker details, and live streams.
            </li>
            <li>
              <strong>Collaboration with Developers</strong> &mdash; Worked alongside the web development team to ensure smooth integration and cross-device compatibility.
            </li>
          </ul>

          <p>
            By integrating visual appeal and functionality, I contributed to a richer and more engaging online experience for Arduino Day attendees.
          </p>
        </div>
      `,
      image: '/images/project-3.png'
    },
    {
      title: 'DSA Visualizer',
      description: `
      <div>
        <p>
          This website was developed as part of our Data Structures and Algorithms (DSA) case study presentation, combining interactive learning with engaging design. It showcases several key case studies, each demonstrating fundamental data structures and algorithms through hands-on experimentation.
        </p>

        <p>UI/UX Design Process</p>
        <p>
          As the UI/UX designer, I focused on creating a visually engaging and intuitive platform tailored to make learning DSA more interactive:
        </p>
        <ul>
          <li>
            <strong>Thematic UI Design</strong> &ndash; Designed a Minecraft-inspired interface for engagement, incorporating a pixelated, blocky aesthetic while maintaining ease of navigation.
          </li>
          <li>
            <strong>User-Centered Experience</strong> &ndash; Structured the site to enhance readability, accessibility, and engagement, ensuring clear explanations and smooth interactions.
          </li>
          <li>
            <strong>Interactive Elements</strong> &ndash; Implemented visual representations of data structures and algorithms, helping users grasp complex concepts through interactive components.
          </li>
        </ul>

        <p>Tech Stack &amp; Implementation</p>
        <ul>
          <li><strong>React.js</strong> &ndash; Used for a component-based structure and dynamic rendering.</li>
          <li><strong>Tailwind CSS</strong> &ndash; Ensured a clean, responsive layout with efficient styling.</li>
          <li><strong>HTML &amp; JavaScript</strong> &ndash; Provided core structure and functionality.</li>
        </ul>

        <p>
          Through this project, I blended design and development to create a conceptual and engaging experience for learners exploring DSA concepts.
        </p>
      </div>
      `,
      image: '/images/project-4.png'
    },
    {
      title: 'Food Delivery App',
      description: `
      <div>
        <p>
          A personal project focused on practicing UI/UX design skills in Figma, particularly in component creation, prototyping, and user interaction flow for a seamless food ordering experience.
        </p>

        <p>UI/UX Design Process</p>
        <p>
          As the UI/UX designer, I used this project to enhance my proficiency in Figma by working on:
        </p>
        <ul>
          <li>
            <strong>Component-Based Design</strong> &ndash; Created reusable UI components, from buttons, cards, and navigation elements to maintain consistency and efficiency.
          </li>
          <li>
            <strong>Prototyping &amp; Interactions</strong> &ndash; Developed high-fidelity interactive prototypes, simulating the full user flow from browsing to checkout.
          </li>
          <li>
            <strong>User Experience Optimization</strong> &ndash; Focused on clean layouts, visual hierarchy, and smooth transitions to enhance usability.
          </li>
        </ul>

        <p>Tech Stack &amp; Tools</p>
        <ul>
          <li>
            <strong>Figma</strong> &ndash; Practiced advanced component structuring, auto-layout, and smart animations.
          </li>
          <li>
            <strong>React Native (Potential Implementation)</strong> &ndash; Considered for future development with Tailwind CSS for styling.
          </li>
        </ul>

        <p>
          This project served as a hands-on exercise in UI/UX design, strengthening my skills in design system creation, prototyping, and user-centered design principles.
        </p>
      </div>

      `,
      image: '/images/project-5.jpg'
    },
    {
      title: 'Event RSVP Manager',
      description: 'Lorem  Ipsim',
      image: '/images/project-6.jpg'
    },

  ]


  return (
    <div className='relative flex justify-center items-center bg-bluePrimary'>
      {/* Desktop */}
      <div className='hidden lg:flex bg-bluePrimary h-page  justify-center items-center relative'>
        <div className='flex px-[73px] pt-[64px] pb-[74px] flex-col w-full'>
          <h1 className='dm-serif-display-regular-italic text-blueSecondary text-[40px] text-center'>PROJECTS</h1>
          {/* 3x3 grid col */}
          <div className='grid grid-cols-3 gap-y-[80px] gap-x-[40px] mt-[63px]'>
          {/* <div className='flex flex-wrap justify-around'> */}
            {projects.map((project, index) => (
              <div onClick={() => handleProject(project)} className='relative flex justify-center hover:scale-105 transition-transform cursor-pointer' key={index}>
                <div className='absolute h-full w-full project-gradient rounded-2xl z-10 overflow-hidden'/>
                <div key={index} className={`cover w-[400px] h-[271px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden`}>
                  <img src={project.image} alt="" className='object-cover w-full h-full cover' />
                  {/* <h1 className='absolute dm-serif-display-regular text-[24px] text-blueSecondary'>{project.title}</h1> */}
                  <p className='z-20 absolute bottom-3 left-6 text-[24px] text-white dm-serif-display-regular-italic'>{project.title}</p>
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
              <div onClick={() => handleProject(project)} className='relative flex justify-center hover:scale-105 cursor-pointer' key={index}>
                <div className='absolute h-full w-full project-gradient rounded-2xl z-10 overflow-hidden'/>
                <div key={index} className={`cover w-[300px] h-[200px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden`}>
                  <img src={project.image} alt="" className='object-cover w-full h-full cover' />
                  {/* <h1 className='absolute dm-serif-display-regular text-[24px] text-blueSecondary'>{project.title}</h1> */}
                  <p className='z-10 absolute bottom-3 left-6 text-md text-white dm-serif-display-regular-italic'>{project.title}</p>
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
              <div onClick={() => handleProject(project)} className='relative flex justify-center' key={index}>
                <div className='absolute h-full w-full project-gradient rounded-2xl z-10 overflow-hidden'/>
                <div key={index} className={`cover w-[264px] h-[180px] bg-slate-500 rounded-2xl flex flex-col relative project-shadow overflow-hidden`}>
                  <img src={project.image} alt="" className='object-cover w-full h-full' />
                  {/* <h1 className='absolute dm-serif-display-regular text-[24px] text-blueSecondary'>{project.title}</h1> */}
                  <p className='z-10 absolute bottom-3 left-6 text-sm text-white dm-serif-display-regular-italic'>{project.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'>
            <Button variant={'primary'} className={'text-sm mt-11 py-[7px] px-[34px]'}>Explore more {">"}</Button>
          </div>
        </div>
      </div>
      

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div className='h-full w-full flex justify-center items-center' onClick={handleClose}>
          {/* Modal Desktop */}
          <div className='hidden lg:flex relative flex-col bg-[#F4EFEB] p-11 rounded-2xl w-[740px] h-[90%] overflow-y-auto scroll-container'>
            <img src={selectedProject.image} alt="" className='rounded-2xl w-[655px] h-[370px] object-fit-cover flex-shrink-0' />
            <h3 className='mt-6 text-[#57808E] text-[40px] dm-serif-display-regular-italic'>
              {selectedProject.title}
            </h3>
            <div className='flex flex-col'>
              {selectedProject.links && selectedProject.links.map((link, index) => (
                <a href={link.url} key={index} className='text-[#7C7C7C] text-[24px] dm-sans-text-500-italic '>{link.title}</a>
              ))}
            </div>
            <div className='h-full prose prose-lg'>
              <div className=' mt-4 text-[#7C7C7C] text-[24px] dm-sans-text-regular' dangerouslySetInnerHTML={{__html: selectedProject.description}}/>
              <div className='flex justify-center items-center'>
                <Button variant={'primary'} className={'mb-5'} onClick={handleClose}>
                  <ArrowBackIcon /> Back
                </Button>
              </div>
            </div>
          </div>

          {/* Modal Tablet */}
          <div className='hidden md:flex lg:hidden relative justify-center items-center flex-col bg-[#F4EFEB] p-11 rounded-2xl w-[640px] h-[90%] '>
            <div className='flex justify-center items-center w-[500px] h-[200px]'>
            <img src={selectedProject.image} alt="" className='rounded-lg w-full h-full object-cover' />
            </div>
            <h3 className='mt-6 text-[#57808E] text-2xl dm-serif-display-regular-italic'>
              {selectedProject.title}
            </h3>
            <div className='h-[70%] prose prose-lg overflow-y-auto scroll-container'>
              <div className='pb-6 mt-4 text-[#7C7C7C] text-lg dm-sans-text-regular' dangerouslySetInnerHTML={{__html: selectedProject.description}}/>
              <div className='flex justify-center items-center'>
                <Button variant={'primary'} className={'mb-5'} onClick={handleClose}>
                  <ArrowBackIcon /> Back
                </Button>
              </div>
            </div>
          </div>

          {/* Modal Mobile */}
          <div className='flex md:hidden lg:hidden relative justify-center items-center flex-col bg-[#F4EFEB] p-3 w-full h-full '>
            <div className='mt-5 flex justify-center items-center w-[90%] h-[200px]'>
            <img src={selectedProject.image} alt="" className='rounded-lg w-full h-full object-cover' />
            </div>
            <h3 className='mt-6 text-[#57808E] text-2xl dm-serif-display-regular-italic'>
              {selectedProject.title}
            </h3>
            <div className='h-[70%] prose prose-lg overflow-y-auto scroll-container'>
              <div className='pb-6 mt-4 text-[#7C7C7C] text-lg dm-sans-text-regular' dangerouslySetInnerHTML={{__html: selectedProject.description}}/>
              <div className='flex justify-center items-center'>
                <Button variant={'primary'} className={'mb-5'} onClick={handleClose}>
                  <ArrowBackIcon /> Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>


    </div>
  )
}

export default Projects
