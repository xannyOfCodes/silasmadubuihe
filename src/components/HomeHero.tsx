
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const HomeHero = () => {
  return (
    <div className='p-[1rem] mt-5
    lg:mt-30 lg:w-[85%] mx-auto lg:flex items-center justify-between'>
        <div>
            <p className='text-zinc-900 font-semibold text-xl
            lg:text-4xl dark:text-zinc-100'>
                Hey there! I'm James.
            </p>
            <p className='text-gray-500 text-sm
            lg:mt-3 lg:text-base dark:text-gray-400'>
                Front-End Developer | JavaScript Enthusiast
            </p>
            <p className='mt-3 flex items-center gap-x-3 text-xl text-gray-900
            lg:text-2xl dark:text-zinc-100'>
                <Link to=""><IoLogoWhatsapp /></Link> 
                <Link to=""><BsInstagram /></Link> 
                <Link to=""><FaXTwitter /></Link>
            </p>
        </div>
        <div className='bg-blue-100 p-[1rem] mt-15 rounded-lg relative flex
        lg:h-[20rem] lg:flex lg:items-center'>
            <div className='w-[60%]'>
                <p className='font-semibold text-lg
                lg:text-2xl'>
                    A Bit About Me
                </p>
                <p className='text-sm text-zinc-600
                lg:text-base lg:mt-3'>
                    I'm a passionate front-end developer who builds interactive, user-friendly web apps.
                </p>
                <button className='mt-5 bg-zinc-900 text-white px-2 py-1 text-sm'><Link to="/about">Read More</Link></button>
            </div>
            <div className='absolute right-[0rem] bottom-[0rem] rounded-br-lg'>
                <img src={assets.heroImg} alt="" 
                className='w-[9rem] h-[17rem] object-cover rounded-br-lg
                lg:h-[30rem] lg:w-[25rem]'/>
            </div>
        </div>
    </div>
  )
}

export default HomeHero
