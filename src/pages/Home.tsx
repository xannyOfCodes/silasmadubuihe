import HomeHero from "../components/HomeHero"
import HomeServices from "../components/HomeServices"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <HomeHero/>
            <HomeServices/>
            <Projects/>
            <Skills/>
        </div>
    </div>
  )
}

export default Home
