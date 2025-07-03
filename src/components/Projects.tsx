
import { projects } from '../assets/assets'
import { FaLocationDot } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='p-[1rem] mt-10'>
        <div className='font-semibold text-xl text-zinc-900'>My Projects</div>

        <div className='mt-5 w-full mx-auto'>
            {
                projects.map((project) => {
                    return(
                        <div className='w-full bg-zinc-200 mx-auto mt-5 rounded-lg'>
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
