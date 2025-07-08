import { TestimonialCard } from '../ui/testimonial-card'
import reactIcon from './../../assets/Images/react-icon.svg'
import nextIcon from './../../assets/Images/nextjs-icon.svg'
import nodeIcon from "./../../assets/Images/node-icon.svg"
import jsIcon from "./../../assets/Images/js-icon.svg"
import gsapIcon from './../../assets/Images/green-sock.png'
import threejsIcon from './../../assets/Images/Threejs-icon.png'
import framerIcon from './../../assets/Images/framer-motion.svg'
import tailwindIcon from './../../assets/Images/tailwind-icon.svg'
import javaIcon from './../../assets/Images/java-icon.svg'
const testimonials = [
  {
    imageSrc: javaIcon,
    text: "Java",
  },
  {
    imageSrc: tailwindIcon,
    text: "Tailwind CSS",
  },
  {
    imageSrc: jsIcon,
    text: "JavaScript",
  },
  {
    imageSrc: reactIcon,
    text: "React",
  },
  {
    imageSrc: nextIcon,
    text: "Next.js",
  },
  {
    imageSrc: framerIcon,
    text: "Framer Motion",
  },
  {
    imageSrc: threejsIcon,
    text: "Three js",
  },
  {
    imageSrc: gsapIcon,
    text: "GSAP",
  },
  {
    imageSrc: nodeIcon,
    text: "Node.js",
  },
   

]

export function SkillsSection() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 w-[100%] mx-auto lg:gap-x-10 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}
