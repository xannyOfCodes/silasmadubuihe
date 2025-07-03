
import {  services } from '../assets/assets'

const HomeServices = () => {

  return (
    <div className='p-[1rem] mt-10'>

            <p className='text-zinc-900 text-lg font-semibold'>My Services</p>

        <div className='flex flex-wrap gap-1 mt-5'>
            {
                services.map((service:any) => {
                    return(
                        <div className=' p-[1.5rem] w-full  mx-auto rounded-lg odd:bg-green-200 even:bg-purple-200'>
                            <p className='text-base font-semibold text-zinc-900'>{service.title}</p>
                            <p className='text-sm text-zinc-500 mt-5'>{service.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default HomeServices
