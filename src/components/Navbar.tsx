
import { NavLink } from 'react-router-dom'
import { FaToggleOff } from "react-icons/fa6";
import Sidebar from './Sidebar';


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-[1rem] 
    lg:w-[80%] lg:mx-auto lg:p-[1.5rem]'>

        <div className='lg:hidden'><Sidebar/></div>
        {/* Nav links */}
        <div className='hidden lg:block'>
            <ul className='flex justify-around items-center gap-5 text-lg'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>

        {/* Theme Toggle buttons */}
        <div className='text-3xl'>
            <FaToggleOff />
            {/* <FaToggleOn />  import { FaToggleOn } from "react-icons/fa6"; */}
        </div>
    </div>
  )
}

export default Navbar
