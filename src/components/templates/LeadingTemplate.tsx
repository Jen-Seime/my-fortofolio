import { useEffect, useState } from "react"
import { stats } from "../../constant/stats"
import Footer from "../organisms/Footer"
import Hero from "../organisms/Hero"
import Navbar from "../organisms/Navbar"
import ProjectSection from "../organisms/ProjectSection"
import StatCardRow from "../organisms/StatCardRow"
import type { ProfilItem } from "../../types/profil"
import { getProfiles } from "../../services/profiles.service"
import type { PaginationMeta, ProjectItem } from "../../types/project"
import { getProjects } from "../../services/projects.service"
import HeaderProject from "../molecules/HeaderProject"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import Teks from "../atoms/Teks"

const LeadingTempalte = () => {

    const [profiles, setProfiles] = useState<ProfilItem>();
    const [project, setProject] = useState<ProjectItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [meta, setMeta] = useState<PaginationMeta | null>(null);


    useEffect(() => {
        const fetchProfiles = async() => {
            const response = await getProfiles()
            setProfiles(response.data)
            
        } 
        fetchProfiles()
    }, [])

    useEffect(() => {
        const fetchProject = async() => {
            setLoading(true)


           try{
            const response = await getProjects()
            const result = response.data.slice(0, 3)
            setProject(result || [])
            if (response?.meta) {
                setMeta(response.meta);
            }

           }catch (err) {
            console.error("Gagal mengambil data project:", err);
            // setError("Gagal memuat project dari API. Pastikan server backend aktif.");
        } finally {
            setLoading(false);
        }
        
        }
        fetchProject()
        
        
    },[])



    

   
    
    return (
        <>
            <Navbar/>
            
            <main className="pt-13 pb-section-gap  flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
             <Hero data={profiles} />

             <StatCardRow items={meta}/>

             <ProjectSection data={project}>
                <HeaderProject>
                    <div className=" flex flex-col  items-start  md:items-start md:text-start">
                        
                        <Badge  warna="biru" icon="work" label="Related"/>

                        
                        <Heading className="font-headline-xl !text-[clamp(24px,3.5vw,32px)]" as={"h2"}>
                            Selected <span className=" text-primary">Projects</span>
                        </Heading>

                        <Teks deskripsi="A curated collection of digital experiences crafted with performance and user experience at the core."></Teks>

                    </div>
                </HeaderProject>
             </ProjectSection>            
            </main>

            <Footer/>
           
        </>
    )
}

export default LeadingTempalte