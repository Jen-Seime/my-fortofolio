
import type { categorySkill } from "../../types/skill"
import CardSkill from "../molecules/CardSkill"
import CardSkillSkeleton from "../molecules/CardSkillSkelaton";
import SectionHedaer from "../molecules/SectionHeader"

interface skillSectionProps {
    data : categorySkill[];
    isLoading: boolean;
  
   
}
const SkillSection = ({data,isLoading} : skillSectionProps) => (
    <section className="about-fade-in flex flex-col items-center w-full">
         <SectionHedaer 
            icon="construction"
            deskripsi="Gambaran menyeluruh tentang languages, frameworks, dan tools yang saya gunakan untuk merancang aplikasi web yang kuat dan dapat diskalakan."
        >
            My Technical <span className=" text-primary">Arsenal</span>
           
        </SectionHedaer>

        <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading ? (
                <>
                    {[1,2,3].map((m) => (
                        <CardSkillSkeleton key={m}/>
                    ))}
                </>
                   
            ) :data.length === 0 ? (
                <div className=""></div>
            ) : (
                <>
                    {data.map((skil, i) => (
                        <CardSkill key={i} index={i} categoryData={skil} />
                    ))}
                </>
               
            )}
           
        </div>
    </section>
   
)

export default SkillSection