import React from "react";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import PlanArc from "../../Assets/Projects/PlanArc.png";
import MeetMind from "../../Assets/Projects/MeetMind.png";
import AapkiAcademy from "../../Assets/Projects/AapkiAcademy.png";
import Blogify from "../../Assets/Projects/Blogify.png";

function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f0c29] text-white pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My Recent <strong className="text-[#c770f0]">Works</strong>
        </h1>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          
            <ProjectCard
            imgPath={Blogify}
            isBlog={false}
            title="Blogify"
            description="Blogify is a feature-rich blogging application that enables users to create, publish, and manage blog posts with a clean, responsive interface. It includes secure user authentication, a rich text editor for crafting content, featured image uploads, and full CRUD functionality for posts. The app leverages Appwrite as a Backend-as-a-Service for database, storage, and auth — eliminating the need for a custom backend. State is managed globally with Redux, and the UI is styled using Tailwind CSS for a modern, mobile-friendly experience."
            ghLink="https://github.com/saurabhmishra2001/Blogify-"
            demoLink="https://blogify-self-nu.vercel.app/"
            tags={["React", "Node.js", "AI", "Tailwind"]}
          />

            <ProjectCard
            imgPath={MeetMind}
            isBlog={false}
            title="MeetMind"
            description="MeetMind is an AI-powered meeting intelligence platform that turns conversations into actionable insights, allowing teams to focus on discussions while AI handles notes. Key Features: Real-time Transcription, Smart AI Summaries, Interactive AI Chat."
            ghLink="https://github.com/saurabhmishra2001/MeetMind"
            demoLink="https://meet-mind-emu6bhe0y-saurabhmishra2001s-projects.vercel.app/"
            tags={["React", "Node.js", "AI", "Tailwind"]}
          />
       

          <ProjectCard
            imgPath={AapkiAcademy}
            isBlog={false}
            title="Aapki Academy"
            description="Aapki Academy one-stop platform for comprehensive learning and preparation. Access expert courses, study materials, video lectures, and practice tests."
            ghLink="https://github.com/saurabhmishra2001/aapki_academy"
            demoLink="https://www.aapkiacademy.info/"
            tags={["React", "Node.js", "MongoDB", "Express"]}
          />

            <ProjectCard
            imgPath={PlanArc}
            isBlog={false}
            title="PlanArc"
            description="PlanArc is your all-in-one platform designed to streamline the planning and organization of learning, personal projects, and more. With a focus on structure and simplicity, PlanArc helps users map out their learning journeys, set clear goals, and track progress effectively. Whether you’re a student, a professional, or just looking to organize your day-to-day tasks, PlanArc empowers you to manage your time, prioritize tasks, and achieve your goals with ease. Start planning smarter and take control of your learning and productivity with PlanArc."
            ghLink="https://github.com/saurabhmishra2001/PlanArc"
            demoLink="https://plan-arc-three.vercel.app/"
            tags={["React", "Node.js", "Productivity", "Tailwind"]}
          />

           <ProjectCard
            isBlog={false}
            title="ScoreBuzz"
            description="A Web page that will display the scores of all the crickets that were used to play all over the world. It shows all tournament like IPL and all the internatiolan games, this web page is created using React Js, Node js and some of the CSS libirary like bootstrap and tailwind CSS."
            ghLink="https://github.com/saurabhmishra2001/Cricket_App"
            tags={["React", "Node.js", "Bootstrap", "Tailwind"]}
          />
         
        </div>
      </div>
    </section>
  );
}

export default Projects;

