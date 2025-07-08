"use client";

import { Hero } from "@/components/Home";
import { Navbar } from "@/components/Navbar";
import  Projects  from "@/components/Projects";
import Skills from "@/components/Skills"
export default function Home() {
  return (
   <>
   <div>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Skills/>
    </div>
    </>
  );
}
