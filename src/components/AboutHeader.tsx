import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AboutHeader = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
  return (
    <div className="p-[1.5rem] flex items-center justify-between text-2xl
    lg:w-[80%] lg:mx-auto lg:p-[2rem] dark:text-zinc-100">
       <span onClick={handleGoBack}><FaArrowLeftLong /></span> <FaRegHeart />
    </div>
  )
}

export default AboutHeader
