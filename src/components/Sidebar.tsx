import { NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
    const [viewSidebar, setViewSideBar]:any = useState(false)
    const toggleSideBar = () => {
        setViewSideBar(!viewSidebar)
    }
  return (
    <div className='relative'>
        <div onClick={toggleSideBar}
        className='text-3xl text-zinc-800'>
            <HiOutlineMenuAlt2 />
        </div>

        { viewSidebar && 
            <div className='fixed w-full h-full top-0 bg-white z-10'>
                <div onClick={toggleSideBar}
                className='text-3xl mt-[1rem] text-zinc-800'>
                    <IoClose />
                </div>
            <ul className='px-[1rem] py-5 flex flex-col gap-y-5'>
                <li className='w-full p-[1rem]'><NavLink to="/">Home</NavLink></li>
                <li className='w-full p-[1rem]'><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
        }
    </div>
  )
}

export default Sidebar

