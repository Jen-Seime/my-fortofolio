import AboutSection from "../organisms/AboutSection"
import Footer from "../organisms/Footer"
import Navbar from "../organisms/Navbar"
import ExperienceEvolution from "./ExperienceEvolution"

const AboutTemplate = () => (
        <>
            <Navbar/>

            <main className="relative z-10 pt-28 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-20">

             <AboutSection/>
             <ExperienceEvolution/>
             
            </main>

            <Footer/>
        </>   
       
)

export default AboutTemplate