
import { assets } from '../assets/assets'

const HomeHero = () => {
  return (
    <div className='p-[1rem] mt-5'>
        <div>
            <p className='text-zinc-900 font-semibold text-xl'>Hey there! I'm James.</p>
            <p className='text-gray-500 text-sm'>Front-End Developer | JavaScript Enthusiast</p>
        </div>
        <div className='bg-blue-100 p-[1rem] mt-15 rounded-lg relative flex'>
            <div className='w-[60%]'>
                <p className='font-semibold text-lg'>A Bit About Me</p>
                <p className='text-sm text-zinc-600'>
                    I'm a passionate front-end developer who builds interactive, user-friendly web apps.
                </p>
                <button className='mt-5 bg-zinc-900 text-white px-2 py-1 text-sm'>Read More</button>
            </div>
            <div className='absolute right-[0rem] bottom-[0rem] rounded-br-lg'>
                <img src={assets.heroImg} alt="" 
                className='w-[9rem] h-[17rem] object-cover rounded-br-lg'/>
            </div>
        </div>
    </div>
  )
}

export default HomeHero
