import { stats } from "../../constant/stats"
import Footer from "../organisms/Footer"
import Hero from "../organisms/Hero"
import Navbar from "../organisms/Navbar"
import ProjectSection from "../organisms/ProjectSection"
import StatCardRow from "../organisms/StatCardRow"

const LeadingTempalte = () => {
    return (
        <>
            <Navbar/>
            <main className="pt-13 pb-section-gap  flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
             <Hero/>

             <StatCardRow items={stats}/>

             <ProjectSection/>
             
            </main>

            <Footer/>
           
        </>
    )
}

export default LeadingTempalte