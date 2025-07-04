
import AboutHeader from "../components/AboutHeader"
import AboutHero from "../components/AboutHero"
import AboutMe from "../components/AboutMe"
import EduAndCert from "../components/EduAndCert"
import Experience from "../components/Experience"

const About = () => {
  return (
    <div>
      <div><AboutHeader/></div>
      <div><AboutHero/></div>
      <AboutMe/>
      <Experience/>
      <EduAndCert/>



      {/* My Work Philosophy */}
      <div className="p-[1.5rem]
      lg:w-[80%] lg:mx-auto">
        <p className='text-xl font-semibold text-zinc-900 py-2 
        dark:text-zinc-100'>My <span className='font-light border-b-1 border-zinc-900 dark:border-zinc-100'>Work Philosophy</span></p>

        <p className="mt-3 text-base text-zinc-800
        dark:text-zinc-100">
          I approach every project with a user-first and performance-driven mindset. My workflow follows a clean cycle: plan, build, test, and deliver. <br /><br />
          I value clarity, collaboration, and writing scalable code that solves real problems. <br /><br />
          My favorite stack includes React, JavaScript, Tailwind CSS, Framer Motion, and Git. <br /><br />
        </p>
      </div>
    </div>
  )
}

export default About
