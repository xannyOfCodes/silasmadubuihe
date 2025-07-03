import HomeHero from "../components/HomeHero"
import HomeServices from "../components/HomeServices"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <HomeHero/>
            <HomeServices/>
            <Projects/>
        </div>
    </div>
  )
}

export default Home
