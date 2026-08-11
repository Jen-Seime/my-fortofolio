import { skills } from "../../constant/skills"
import CardSkill from "../molecules/CardSkill"
import SectionHedaer from "../molecules/SectionHeader"

const SkillSection = () => (
    <section className="about-fade-in flex flex-col items-center w-full">
         <SectionHedaer 
            icon="construction"
            deskripsi="Gambaran menyeluruh tentang languages, frameworks, dan tools yang saya gunakan untuk merancang aplikasi web yang kuat dan dapat diskalakan."
        >
            My Technical <span className=" text-primary">Arsenal</span>
           
        </SectionHedaer>

        <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skil) => (
                <CardSkill key={skil.id} categoryData={skil} />
            ))}
        </div>
    </section>
   
)

export default SkillSection