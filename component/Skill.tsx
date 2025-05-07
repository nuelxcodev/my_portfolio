import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiPython, SiReact } from "react-icons/si";

export default function SkillsTools() {
  return (
    <div className="bg-white text-white sm:pt-32">
      <div className="mx-auto w-full p-6 lg:-8 border-t bg-black py-2">
        <div className="mx-auto my-10 flex justify-around">
          {/* MongoDB */}
          <div className="col-span-2 flex justify-center lg:col-span-1 flex-col">
            <SiMongodb className="h-8 w-8 md:h-12 md:w-12 " strokeWidth={0.5} />
            <span className=" text-center hidden md:block">MongoDB</span>
          </div>
          {/* Express */}
          <div className="col-span-2 flex justify-center lg:col-span-1 flex-col">
            <SiExpress className="h-8 w-8 md:h-12 md:w-12 " strokeWidth={0.5} />
            <span className=" text-center hidden md:block">Expressjs</span>
          </div>
          {/* React */}
          <div className="col-span-2 flex justify-center lg:col-span-1 flex-col">
            <SiReact className="h-10 w-10 animate-spin-slow" strokeWidth={0.5} />
            <span className=" text-center hidden md:block">reactjs</span>
          </div>
          {/* Node.js */}
          <div className="col-span-2 flex justify-center sm:col-start-2 lg:col-span-1 flex-col">
            <SiNodedotjs className="h-8 w-8 md:h-12 md:w-12 " strokeWidth={0.5} />
            <span className=" text-center hidden md:block">nodejs</span>
          </div>
          <div className="col-span-2 flex justify-center sm:col-start-2 lg:col-span-1 flex-col">
            <SiPython className="h-8 w-8 md:h-12 md:w-12 " strokeWidth={0.5} />
            <span className=" text-center hidden md:block">python</span>
          </div>
          <div className="col-span-2 flex justify-center sm:col-start-2 lg:col-span-1 flex-col">
            <RiNextjsFill className="h-8 w-8 md:h-12 md:w-12 " strokeWidth={0.5} />
            <span className=" text-center hidden md:block">nextjs</span>
          </div>
          {/* GitHub */}
          <div className="col-span-2 flex justify-center col-start-2 sm:col-start-auto lg:col-span-1 flex-col">
            <SiGithub className="h-8 w-8 md:h-12 md:w-12 " strokeWidth={0.5} />
            <span className=" text-center hidden md:block">github</span>
          </div>
        </div>
      </div>
    </div>
  );
}
