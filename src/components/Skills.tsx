import { skills } from "../assets/assets"


const Skills = () => {
  return (
    <div className="p-[1rem] mt-20
    lg:w-[85%] lg:mx-auto">

      <div>
        <p className="text-xl font-semibold
        dark:text-zinc-100">My <span className="font-light border-b-1 border-zinc-900 dark:border-zinc-100">Skills</span></p>
      </div>


      <div className="mt-3
      lg:flex lg:items-center lg:gap-x-5">
      {
        skills.map((skill: any) => {
          return (
            <div className="bg-gray-100 p-[1rem] pb-10 mt-5 rounded-sm">
              <img src={skill.img} alt="" 
              className="w-1/6 bg-zinc-200 p-3 rounded-full"/>
              <div className="mt-20">
                <p className="font-semibold text-lg">{skill.title}</p>
                <ul className="mt-2 text-sm list-disc px-3">
                  <li>{skill.skillOne}</li>
                  <li>{skill.skillTwo}</li>
                  <li>{skill.skillThree}</li>
                  <li>{skill.skillFour}</li>
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Skills
