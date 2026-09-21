
import type { EducationItem } from "../../types/education";
import EducationCard from "../molecules/EducationCard";
import EducationCardSkeleton from "../molecules/EducationCardSkeleton";
import SectionHedaer from "../molecules/SectionHeader";



interface AcademicFoundationProps {
  data : EducationItem[];
  isLoading: boolean
}

const AcademicFoundation = ({data,isLoading} : AcademicFoundationProps) => (
  <section className="about-fade-in flex flex-col items-center w-full">
    {/* ── Section Header ── */}
    

    <SectionHedaer 
      posisi="tengah"
      icon="school" 
      deskripsi="Fondasi akademik yang membentuk pola pikir analitis dan kemampuan teknis saya sebagai seorang developer.">
      Academic <span className="text-primary">Foundation</span>

    </SectionHedaer>

    {/* ── Education Cards ── */}
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {isLoading ? (
        <>
        {[1,2].map((p) => (
          
          <EducationCardSkeleton key={p}></EducationCardSkeleton>
         
        ))}
        </>

        

      ) : data.length === 0 ? (

        <div className="text-center py-10 text-on-surface-variant">
          Tidak ada data.
        </div>
      ) : (

       <>
       {data.map((edu) => (
          <EducationCard 
            id={edu.id} 
            institution={edu.institution} 
            gpa={edu.gpa} 
            major={edu.major} 
            degree={edu.degree} 
            coursework={edu.coursework} 
            start_year={edu.start_year} 
            end_year={edu.end_year} 
            description={edu.description}>

          </EducationCard>
       ))}
       </>
      )}
    </div>
  </section>
);

export default AcademicFoundation;
