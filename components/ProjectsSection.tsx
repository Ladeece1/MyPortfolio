import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "ML Salary Prediction App",
    description: 
      "Based on 2020 Stack Overflow Survey, this streamlit app visualizes salaries of Software Developers around the world and utilizes Machine Learning algorithm to predict salary of a Software Developer.",
    image: "/mlapp.png",
    github: "https://github.com/Ladeece1/ML-App",
    link: "https://swesalaryprediction.streamlit.app/",
  },
  {
    name: "HooBank",
    description:
      "A bank's website made with ReactJS and styled with Tailwind CSS.",
    image: "/hoobank.png",
    github: "https://github.com/Ladeece1/ReactBankApp",
    link: "https://github.com/Ladeece1/ReactBankApp",
  },
  {
    name: "Economy Prediction Model",
    description:
      "Prediction model using FRED's dataset and Facebook's Prophet as model",
    image: "/newprophet.png",
    github: "https://github.com/Ladeece1/ProphetEconomyPrediction",
    link: "https://github.com/Ladeece1/ProphetEconomyPrediction",
  },
  {
    name: "Stay tuned for more...",
    description:
      "Let me know what I should build too! Just drop me an email, I would love to hear your ideas. My area of interests currently: Deep Learning, Natural Language Processing, Business related ML Models, Algorithmic Trading",
    image: "/comingsoon.jpg",
    github: "",
    link: "",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        priority={true}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
