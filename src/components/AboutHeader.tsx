import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const AboutHeader = () => {
  return (
    <div className="p-[1.5rem] flex items-center justify-between text-2xl
    lg:w-[80%] lg:mx-auto lg:p-[2rem]">
       <FaArrowLeftLong /> <FaRegHeart />
    </div>
  )
}

export default AboutHeader
