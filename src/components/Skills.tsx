import React from 'react'
// import {Header} from './sections/Header'
import { SkillsSection } from './sections/SkillsSection';
import { Gallery4 } from './ui/gallery4'
const demoData = {
  title: "Skills",
  description:
    "My Tech Stack",
};
const Skills = () => {
  return (
    <>
   <section className="lg:h-[99.5vh] w-[95%] mx-auto h-auto flex items-center rounded-2xl" id="skills">
      <div id="projects" className='w-[99%] lg:w-[90%] mx-auto  h-auto bg-white-600 shadow-xxl text-cyan-800 rounded-lg '>
      <Gallery4 data={demoData} />
      <SkillsSection/>
    </div>
    </section>
    
    </>
  )
}

export default Skills