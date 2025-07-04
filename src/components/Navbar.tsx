
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';


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
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        {/* Theme Toggle buttons */}
        <div>
            <ThemeToggle/>
        </div>
    </div>
  )
}

export default Navbar
