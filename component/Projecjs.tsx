import React from "react";
import { Timeline } from "./ui/Timeline";
import { SiElectron, SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";

function Projecjs() {
  const data = [
    {
      title: "E-commerce",
      content: (
        <div className=" flex p-5  flex-col-reverse items-center md:flex-row w-full max-sm:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
           <div className="w-full md:w-1/2 text-gray-500 text-sm md:text-md p-4 border bg-white/50 border-white">
            <span className=" font-bold text-lg">Kgic Dashboard</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nostrum quisquam ipsum perferendis ducimus impedit rerum,
              delectus dolore, nisi temporibus, blanditiis sapiente molestias totam placeat fugiat sunt quibusdam numquam doloribus.
            </p>
            <div className="flex w-full justify-around my-6">
              <SiMongodb className="w-8 h-8" />
              <SiElectron className="w-8 h-8" />
              <SiReact className="w-8 h-8" />
              <SiTailwindcss className="w-8 h-8" />
            </div>
            <div className="m-4 flex items-center justify-start gap-x-6">
              <a
                href="#"
                className=" capitalize rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Github
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 capitalize">
                live site <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-max">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="h-auto w-full rounded-lg object-cover "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Admin Dashboard",
      content: (
        <div className="flex p-5 rounded-lg flex-col-reverse items-center md:flex-row-reverse w-full max-sm:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ">
          <div className="w-full md:w-1/2 text-gray-500 text-sm md:text-md p-4">
            <span className=" font-bold text-lg">Kgic Dashboard</span>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nostrum quisquam ipsum perferendis ducimus impedit rerum,
              delectus dolore, nisi temporibus, blanditiis sapiente molestias totam placeat fugiat sunt quibusdam numquam doloribus.
            </p>
            <div className="flex w-full justify-around my-6">
              <SiMongodb className="w-8 h-8" />
              <SiElectron className="w-8 h-8" />
              <SiReact className="w-8 h-8" />
              <SiTailwindcss className="w-8 h-8" />
            </div>
            <div className="m-4 flex items-center justify-end gap-x-6">
              <a
                href="#"
                className=" capitalize rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Github
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 capitalize">
                live site <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-max">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Entertainment",
      content: (
        <div className="p-5 flex flex-col-reverse items-center md:flex-row w-full max-sm:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
          <div className="w-full md:w-1/2 text-gray-500 text-sm md:text-md p-4">
            <span className=" font-bold text-lg">Kgic Dashboard</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nostrum quisquam ipsum perferendis ducimus impedit rerum,
              delectus dolore, nisi temporibus, blanditiis sapiente molestias totam placeat fugiat sunt quibusdam numquam doloribus.
            </p>
            <div className="flex w-full justify-around my-6">
              <SiMongodb className="w-8 h-8" />
              <SiElectron className="w-8 h-8" />
              <SiReact className="w-8 h-8" />
              <SiTailwindcss className="w-8 h-8" />
            </div>
            <div className="m-4 flex items-center justify-start gap-x-6">
              <a
                href="#"
                className=" capitalize rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Github
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 capitalize">
                live site <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-max">
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              className="h-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default Projecjs;
