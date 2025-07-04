
import { projects } from '../assets/assets'
import { FaLocationDot } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='p-[1rem] mt-15
    lg:w-[85%] lg:mx-auto'>
        <div className='font-semibold text-xl text-zinc-900
        dark:text-zinc-100'>My <span className="font-light border-b-1 border-zinc-900 dark:border-zinc-100">Projects</span></div>

        <div className='mt-5 w-full mx-auto
        lg:flex  lg:gap-5 lg:flex-wrap lg:justify-start'>
            {
                projects.map((project) => {
                    return(
                        <div className='w-full bg-gray-100 mx-auto mt-5 rounded-lg
                        lg:w-[30%] lg:mx-0'>
                            <img src={project.img} alt="" 
                            className='w-full rounded-t-lg'/>
                            <div className='mt-5 p-[1rem]'>
                                <p className='text-lg font-semibold text-zinc-900'>{project.title}</p>
                                <p className='mt-2 text-base text-zinc-600'>{project.desc}</p>
                                <p className='mt-2 text-zinc-600 text-base'><FaLocationDot className='inline mr-2'/>{project.location}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects
