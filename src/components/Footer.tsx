import { PiCopyrightLight } from "react-icons/pi";
import ContactForm from "./ContactForm";


const Footer = () => {
    
  return (
    <div>
        <div><ContactForm/></div>
        <div className="bg-zinc-900 text-white text-sm p-[1rem] pb-5 font-light">copyright 2025 <PiCopyrightLight className="inline"/> xannyOfCodes. All rights reserved</div>
    </div>
  )
}

export default Footer
