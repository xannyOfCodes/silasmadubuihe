import Footer from "../components/Footer"
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
        <Footer/>
    </div>
  )
}

export default Home
