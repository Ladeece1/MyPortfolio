import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Machine Learning"},
  { skill: "Python Automation"},
  { skill: "Jupyter Notebooks" },
  { skill: "OpenCV" },
  { skill: "Streamlit" },
  { skill: "Microsoft Excel" },
  { skill: "Data Visualization" },
  { skill: "MySQL" },
  { skill: "GraphQL" },
  { skill: "Java" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "ReactJS" },
  { skill: "NextJS" },
  { skill: "Tailwind CSS" },
  { skill: "Google Analytics" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is enxuan and I am currently a{" "}
              <span className="font-bold">{"Penultimate Year Undergraduate Student"}</span>{" "}pursuing my Bachelors Degree in
              <span className="font-bold">{" Computer Science with AI "}</span> in
              <span className="font-bold">{" University of Nottingham Malaysia"}</span>.
            </p>
            <br />
            <p>
              I'm a curious individual that's always trying to accquire new skills and knowledge in fields
              that sparks my interest and currently I'm extermely invested in learning how AI can be applied in various 
              industries and how we as a new generation of talent can help companies hop on the AI trend to help their
              company reach new heights.
            </p>
            <br />
            <p>
              I also have lots of hobbies during my free time such as reading, playing music and making coffee. These hobbies drive me
              to work harder and more effeciently so that I can have more time and energy to be spent on them.
            </p>
            <br />
            <p>
              I believe that one should{" "}
              <span className="font-bold text-teal-500">
                never stop learning
              </span>{" "}
              in this era due to how fast paced and competitive our lives had become. Though challenging,
              but I'm a strong believer in the culture of <span className="font-bold text-teal-500">work hard, play hard</span>.
              Which is speficially why I'm always pushing myself to my limits just to rest extremely hard and prepare for 
              a new cycle of learning. Such life is one worth living!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skillset</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/guitarist.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
