import Hero from "../organisms/Hero"
import Navbar from "../organisms/Navbar"
import ProjectSection from "../organisms/ProjectSection"
import StatCardRow from "../organisms/StatCardRow"

const LeadingTempalte = () => {
    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col   relative overflow-x-hidden font-body-md text-body-md">
            <Navbar/>
            <main className="pt-13 pb-section-gap  flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
             <Hero/>

             <StatCardRow/>

             <ProjectSection/>

             
            </main>
           
        </div>
    )
}

export default LeadingTempalte