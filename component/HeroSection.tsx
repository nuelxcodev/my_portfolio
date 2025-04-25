"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TypewriterEffect } from "./ui/Typinanimation";
import { RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill } from "react-icons/ri";

const navigation = [
  { name: "about me", href: "#" },
  { name: "services & skill", href: "#" },
  { name: "projects", href: "#" },
  { name: "Contact", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const words = [
    {
      text: "Ekine",
      className: "font-roboto text-4xl font-black tracking-tight text-balance capitalize text-gray-500 sm:text-5xl md:text-5xl lg:text-7xl",
    },
    {
      text: "Chukwuemeka",
      className: "font-poppins text-4xl font-black tracking-tight text-balance capitalize text-gray-500 sm:text-5xl md:text-5xl lg:text-7xl",
    },
    {
      text: "Emmanuel",
      className: "font-mono text-4xl font-black tracking-tight text-balance capitalize text-indigo-600 sm:text-5xl md:text-5xl lg:text-7xl",
    },
  ];

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-black font-mono text-lg">Nuelcode</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 capitalize">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-black font-mono text-lg">Nuelcode</span>
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 py-14 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto w-[90%] pt-32 pb-10 sm:pt-48 lg:pt-56 md:flex ">
          <div className="w-full md:w-[55%] lg:w-[65%]">
            <div className="mb-14 sm:mb-8 sm:flex sm:justify-start">
              <div className="relative rounded-full px-3 py-1 text-sm/5 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Let’s bring your ideas to life.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  let's talk business <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-left text-gray-900">
              <TypewriterEffect words={words} />

              <p className="mt-8 text-md lg:text-lg font-medium text-pretty text-gray-500 sm:text-lg/5">
                Highly motivated and self-taught developer with over 4 years of experience in designing and developing responsive, user-centric
                web and mobile applications. Specialized in creating pixel-perfect interfaces and seamless user experiences.
              </p>
              <div className=" flex gap-5 my-5">
                <RiFacebookFill className=" w-8 h-8"/>
                <RiLinkedinBoxFill className=" w-8 h-8"/>
                <RiInstagramFill className=" w-8 h-8"/>
                <RiWhatsappFill className=" w-8 h-8"/>
              </div>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#"
                  className=" capitalize rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Hire me
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900 capitalize">
                  my resume <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-[50%] lg:w-[35%]"></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
