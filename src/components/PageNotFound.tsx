import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-[100vh] w-full flex items-center
    lg:justify-center">
        <div className="text-center p-[1rem]">
            <p className="text-sky-500 text-xl font-bold">404</p>
            <p className="mt-5 text-zinc-800 text-5xl font-semibold px-10">Page not found</p>
            <p className="mt-5 text-gray-700 text-lg px-5">Sorry, we couldn't find the page you're looking for.</p>
            <div className="mt-10 flex justify-around items-center">
                <button className="bg-zinc-900 text-white px-3 py-2 text-sm rounded-sm"><Link to={{pathname: "/"}}>Go back to home</Link></button>
                <button className="px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-sm">Contact support <FaArrowRightLong className="inline"/></button>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound
