import React from 'react'
// import {Header} from './sections/Header'\
import { Gallery4 } from './ui/gallery4'
import Cards from './sections/Cards';
const demoData = {
  title: "Projects",
  description:
    "The Work that I've done before",
};
const Projects = () => {
  return (
    <>
    <section  id="projects" className='w-[90%] lg:w-[90%]  h-auto bg-white-600 shadow-xxl text-cyan-800 rounded-lg mx-auto py-t-8'>
      <Gallery4 data={demoData} />
      <Cards/>
    </section>
    
    </>
  )
}

export default Projects
{/* <h1>Hello worl</h1> */}