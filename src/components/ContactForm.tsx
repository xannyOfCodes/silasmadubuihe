

const ContactForm = () => {
  return (
    <div className='mt-30
    lg:flex lg:justify-between lg:items-center'>
        <div className='p-[1rem]'>
            <p className='text-2xl font-semibold pr-10
            lg:text-6xl'>Let's get in touch</p>
            <p className='w-[50%] mt-3 text-base
            lg:text-lg'>Don't be afraid to say hello with us!</p>
        </div>

        <div className='bg-white'>
            <p className='p-[1rem]
            lg:text-lg lg:pr-40'>
                Great we're excited to hear from you and let's start something special together.
                contact us for any inquiry.
            </p>
            <div className='h-[20rem] p-[1rem] bg-zinc-900 flex items-center justify-center
            lg:h-auto lg:w-full lg:justify-start lg:py-10'>
                <form action="" className="w-full">
                <div className=' text-sm
                lg:flex lg:items-center lg:gap-x10 lg:justify-between'>
                    <input type="text" placeholder='Name' 
                    className='w-full border-b-1 py-3 px-3 border-gray-300 outline-0 text-white placeholder:text-white placeholder:font-extralight
                    lg:w-[45%]'/>
                    <input type="Email" placeholder='Phone'
                    className='w-full mt-5 border-b-1 py-3 px-3 border-gray-300 outline-0 text-white placeholder:text-white placeholder:font-extralight
                    lg:w-[45%] lg:mt-0'/>
                </div>
                <div className='mt-10'>
                    <textarea name="" id="" placeholder="Tell us about what you're interested in"
                     className='border-b-1 py-0 px-3 border-gray-300 outline-0 text-white placeholder:text-white w-full placeholder:font-extralight'></textarea>
                </div>
                <button className='text-zinc-900 bg-white mt-5 py-2 px-5 text-base'>Send Message</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
