"use client";
import { motion } from "motion/react";
import Image from "next/image";

import meimage from "../public/images/laptopcode.jpg";

export default function AboutMe() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 pb-14 pt-10 sm:pb-12 lg:overflow-visible lg:px-0">
      <span></span>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-300"
        >
          <defs>
            <pattern x="50%" y={-1} id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={100} height={100} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <motion.div
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        className="mx-auto duration-100 grid max-w-2xl md:max-w-[50%] grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600 capitalize">ask about nuelcode</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-pretty text-gray-900 sm:text-4xl capitalize">about me</h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Hey there! I'm a self-taught frontend developer who enjoys turning ideas into clean, interactive websites. I work mostly with
                React and love crafting designs that feel simple, smart, and user-friendly. Building things that help people or make their lives
                easier is what keeps me going.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt=""
            src={meimage}
            height={1000}
            width={1000}
            className="w-[90%] h-auto max-h-[800px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Over time, I’ve worked on different projects—some just for fun, others with teams—that helped me grow in both coding and
                creativity. I enjoy figuring things out, solving problems, and learning new ways to improve. Whether it’s designing interfaces or
                writing backend logic, I love the whole process of bringing ideas to life.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">let's build it!!!</h2>
              <p className="mt-6">
                I’m always excited about new challenges and chances to grow. I believe great things happen when creativity meets consistency. So
                if you’ve got a cool idea or project, let’s build it together—something that not only works well but also feels right to use.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
