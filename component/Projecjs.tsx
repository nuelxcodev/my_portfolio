import React from "react";
import { SiMongodb, SiExpress, SiReact, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Nuelmart",
    description:
      "A responsive eCommerce platform with cart, checkout, and admin features.",
    image: "https://assets.aceternity.com/templates/startup-1.webp",
    github: "https://github.com/ekine-codev/nuelmart",
    live: "https://nuelmart.netlify.app/",
    tech: [SiReact, SiTailwindcss, SiMongodb, SiExpress],
  },
  {
    title: "Airlogex Dashboard",
    description:
      "Admin courier dashboard for order creation, updates, and customer messaging.",
    image: "https://assets.aceternity.com/pro/hero-sections.png",
    github: "https://github.com/ekine-codev/airlogex-dashboard",
    live: "https://airlogex-admin.netlify.app/",
    tech: [SiReact, SiTailwindcss, SiMongodb, SiExpress],
  },
  {
    title: "Nufy Movies",
    description:
      "Explore trending movies with trailers and metadata using external APIs.",
    image: "https://assets.aceternity.com/pro/bento-grids.png",
    github: "https://github.com/ekine-codev/nufy-movies",
    live: "https://nufy-movies.onrender.com/",
    tech: [SiReact, SiTailwindcss, SiExpress],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site featuring my work and contact details.",
    image: "https://assets.aceternity.com/pro/authentication.png",
    github: "https://github.com/ekine-codev",
    live: "https://ekine-portfolio.netlify.app/",
    tech: [SiReact, SiTailwindcss],
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-200 py-16 px-8 md:px-10 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>

              <div className="flex gap-3 mt-3 text-gray-700">
                {project.tech.map((Icon, i) => (
                  <Icon key={i} className="w-6 h-6" />
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
