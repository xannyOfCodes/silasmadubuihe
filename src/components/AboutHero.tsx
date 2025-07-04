import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { assets } from '../assets/assets'

const AboutHero = () => {
  return (
    <div className='p-[1.5rem] mt-20
    lg:w-[80%] lg:mx-auto'>
        <div className='w-full h-[12rem] bg-gray-100 relative text-center flex items-center justify-center rounded-lg'>
            <img src={assets.aboutHeroImg} alt="" 
            className='w-[8rem] h-[8rem] rounded-full object-cover mx-auto absolute top-[-4rem] right-0 left-0 border-8 border-white dark:border-zinc-900'/>
            <div>
                <p className='text-lg font-semibold text-zinc-900 mt-10'>Madubuihe Daniel</p>
                <p className='text-gray-500 text-sm
            lg:mt-3 lg:text-base'>
                Front-End Developer | JavaScript Enthusiast
            </p>
                <p className='mt-3 flex items-center justify-center gap-x-3 text-xl text-gray-900
                lg:text-2xl'>
                <Link to=""><IoLogoWhatsapp /></Link> 
                <Link to=""><BsInstagram /></Link> 
                <Link to=""><FaXTwitter /></Link>
            </p>
            </div>
        </div>
    </div>
  )
}

export default AboutHero
