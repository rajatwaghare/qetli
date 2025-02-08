'use client'

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"
import Link from "next/link";

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className=" bg-black ">

      <div className={isScrolled ? " bg-white py-4 fixed top-0 w-full  left-0 right-0  z-20  transition-all duration-300" : " z-20 py-4 fixed top-0 w-full  left-0 right-0  transition-all duration-1000"}>
      <Image
      className={isScrolled ? " m-auto w-40 transition-all duration-1000" : " m-auto transition-all duration-1000"}
      src={isScrolled ? "/logo.svg" : "/logo-white.svg"} // Change to white logo when at top
      height={30}
      width={240}
      alt="Logo"
    />
    </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: .3 }}
          className="">


          <video className=" w-full h-dvh object-cover " width="320" height="240" muted autoPlay loop playsInline>
      <source src="/video.mp4" type="video/mp4" />
      
    </video>


        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: .2 }}
          className="absolute  font-semibold top-[45%] md:max-w-xl max-w-[90%] m-auto left-0 right-0 text-white text-6xl md:text-7xl text-center headingfont">Brewing untold stories from small estates of India</motion.h1>
      </div>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-center lg:justify-between">
            <motion.h2 initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: .2 }} className="text-3xl w-full capitalize  text-center  text-[#4D240A] sm:text-6xl font-medium tracking-tight">Our Products</motion.h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-10">
            <motion.div initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .4 }} className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl group">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img className="object-cover w-full h-full p-1 pb-0 rounded-2xl" src="/sacral-final.jpg" alt="" />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-sm md:text-2xl text-center  text-[#4D240A] tracking-tight font-bold  ">
                  Coffee Beans - Sacral
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .6 }} className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl group">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img className="object-cover w-full h-full p-1 pb-0 rounded-2xl" src="/crown-final.jpg" alt="" />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-sm md:text-2xl text-center  text-[#4D240A] tracking-tight font-bold  ">
                  Coffee Beans - Crown
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .8 }} className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl group">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img className="object-cover w-full h-full p-1 pb-0 rounded-2xl" src="/crown.jpg" alt="" />
                </div>
                <div className="px-6 py-4">
                  <h3 className="capitalize text-sm md:text-2xl  text-[#4D240A] text-center tracking-tight font-bold  ">
                    Coffee drip bag - Crown
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: 1 }} className="relative overflow-hidden bg-white border border-gray-200 rounded-xl group">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img className="object-cover w-full h-full p-1 pb-0 rounded-2xl" src="/sacral.jpg" alt="" />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-sm md:text-2xl capitalize text-center  text-[#4D240A] tracking-tight font-bold  ">
                  Coffee drip bag - Sacral
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#4D240A]  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .4 }} className="text-3xl font-bold leading-tight text-[#FFF4E8] sm:text-4xl lg:text-5xl">We provide end to end coffee solutions.</motion.h2>
            
          </div>

          <motion.div initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .6 }} className="flex mt-5 flex-col items-center sm:flex-row sm:justify-center">
            <a target="_blank" href="mailto:connect@qetli.com">
              <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-[#4D240A] transition-all duration-200 bg-[#FFF4E8] border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto">
                Contact Us Now
                <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
