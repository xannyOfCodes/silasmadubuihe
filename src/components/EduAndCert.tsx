import { eduAndCert } from "../assets/assets"
import { LiaCertificateSolid } from "react-icons/lia";


const EduAndCert = () => {
  return (
    <div className="p-[1.5rem]
    lg:w-[80%] lg:mx-auto">
        <p className='text-xl font-semibold text-zinc-900 py-2 
        dark:text-zinc-100'><span className="font-light">Education</span> and <span className='font-light border-b-1 border-zinc-900 dark:border-zinc-100'>Certification</span></p>

        <div className="mt-5 
        lg:flex lg:items-center lg:justify-between">
            {
                eduAndCert.map((items) => {
                    return(
                        <div className="bg-purple-100 p-[1rem] pb-10 mt-5
                        lg:w-[30%] lg:mt-0">
                            <LiaCertificateSolid  className="text-4xl text-orange-700"/>
                            <p className="text-lg font-bold text-zinc-700">{items.name}</p>
                            <p className="text-zinc-600">{items.src}</p>
                            <p className="text-sm text-zinc-500"><span className="text-base font-semibold">Completed: </span>{items.completed}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EduAndCert
