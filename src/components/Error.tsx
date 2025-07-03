import { useRouteError } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
    const error:any = useRouteError();
  return (
    <div className="h-[100vh] w-full flex items-center
        lg:justify-center">
            <div className="text-center p-[1rem]">
                <p className="text-sky-500 text-xl font-bold">404</p>
                <p className="mt-5 text-zinc-800 text-5xl font-semibold px-10">An Error Occurred</p>
                <p className="mt-5 text-gray-700 text-lg px-5">{error.message}</p>
            </div>
        </div>
  )
}

export default Error
