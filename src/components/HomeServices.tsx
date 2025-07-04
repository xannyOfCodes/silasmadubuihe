
import {  services } from '../assets/assets'

const HomeServices = () => {

  return (
    <div className='p-[1rem] mt-10
    lg:w-[85%] lg:mx-auto'>

            <p className='text-zinc-900 text-xl font-semibold'>My <span className="font-light border-b-1 border-zinc-900">Services</span></p>

        <div className='flex flex-wrap gap-1 mt-5
        lg:flex-nowrap'>
            {
                services.map((service:any) => {
                    return(
                        <div className=' p-[1.5rem] w-full  mx-auto rounded-lg odd:bg-gray-100 even:bg-purple-100'>
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
