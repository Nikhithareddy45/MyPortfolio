// components/Card.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Heroimage from "./../../assets/Images/Varenyam-hero.png";
import harmonyImage from "./../../assets/Images/Harmony-hero.png";
import FoodyHero from "./../../assets/Images/Foody-hero.png";

import { Button } from "./../ui/button";

interface SingleCardProps {
  image: StaticImageData;
  cardTitle: string;
  cardDescription: string;
  // buttonLabel: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  cardTitle,
  cardDescription,
  // buttonLabel="Live Website",
  btnHref = "#",
}) => (
  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 dark:bg-dark-2 cursor-pointer px-4 hover:scale-95 bg-white backdrop-blur-[25px] saturate-102  border-b-2 border-white/100">
    <div className="relative w-full h-60 mt-4 ">
      <Image
        src={image}
        alt={cardTitle}
        fill
        className="object-cover rounded"
       
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
        {cardTitle}
      </h3>
      <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
        {cardDescription}
      </p>
      <Link href={btnHref}>
        <Button className="bg-cyan-600 hover:bg-cyan-800">Live Website</Button>
      </Link>
    </div>
  </div>
);

const Card: React.FC = () => {
  return (
    <section className=" mx-2 dark:bg-dark lg:pb-2 lg:pt-5">
 
        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          <SingleCard
            image={Heroimage}
            cardTitle="Varenyam Creations"
            cardDescription="Jewellery E-commerce Website"
            // buttonLabel="View Details"
            btnHref="https://nikhithareddy45.github.io/VarenyamCreations/"
          />
          <SingleCard
            image={harmonyImage}
            cardTitle="Harmony Events"
            cardDescription="Event Management Website"
            // buttonLabel="View Details"
            btnHref="https://nikhithareddy45.github.io/HarmonyEventsMgt"
          />
          <SingleCard
            image={FoodyHero}
            cardTitle="Foodieee"
            cardDescription="Food Delivery Website"
            // buttonLabel="View Details"
            btnHref="https://nikhithareddy45.github.io/Foody/"
          />
        </div>
    </section>
  );
};

export default Card;
