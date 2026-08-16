
import Footer from "../organisms/Footer"
import Navbar from "../organisms/Navbar"
import SkillSection from "../organisms/SkillSection"
import StatCardRow from "../organisms/StatCardRow"

const skillRingkasan = [

  { value: "40", label: "Total Skills" },
  { value: "100%", label: "Categories" },
  { value: "∞", label: "Learning" },

]

const SkillTemplate = () => (
    <>
            <Navbar/>
            <main className="relative z-10 pt-28 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-20">
                <SkillSection/>

                <StatCardRow className="md:!grid-cols-3  !mt-0" items={skillRingkasan}/>

                
            </main>

            <Footer/>
           
        </>
)

export default SkillTemplate