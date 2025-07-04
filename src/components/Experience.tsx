
import { jobExperiences } from '../assets/assets'

const Experience = () => {
  return (
    <div className='p-[1.5rem]
    lg:w-[80%] lg:mx-auto'>
        <p className='text-xl font-semibold text-zinc-900 py-2 '>My <span className='font-light border-b-1 border-zinc-900'>Experiences</span></p>

        <div className='mt-3'>
            {
                jobExperiences.map((experience: any) => {
                    return (
                        <div className='bg-zinc-100 p-5 mt-5 rounded-sm'>
                            <p className='text-lg font-semibold text-zinc-700'>{experience.job_title}</p>
                            <p className='mt-2 text-sm text-zinc-400 font-semibold'>{experience.job_role}</p>
                            <p className='mt-3 text-base text-zinc-600 font-light'>{experience.job_desc}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Experience
