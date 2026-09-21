import { useEffect, useState } from "react"
import Footer from "../organisms/Footer"
import Hero from "../organisms/Hero"
import Navbar from "../organisms/Navbar"
import ProjectSection from "../organisms/ProjectSection"
import type { ProfilItem } from "../../types/profil"
import { getProfiles } from "../../services/profiles.service"
import type {PaginationMeta, ProjectItem } from "../../types/project"
import { getProjects } from "../../services/projects.service"
import HeaderProject from "../molecules/HeaderProject"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import Teks from "../atoms/Teks"
import Error from "../../pages/Error"
import StatCardRow from "../organisms/StatCardRow"

const LeadingTempalte = () => {

    const [profiles, setProfiles] = useState<ProfilItem>();
    const [errorProfiles, setErrorPofiles] = useState<string| null>(null);
   
    
    




    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const [meta, setmeta] = useState<PaginationMeta>()
    const [errorProjects, setErrorProjects] = useState<string| null>(null);
    const [loadingProjects, setLoadingProjects] = useState<boolean>(true);
    


    useEffect(() => {
        const fetchProfiles = async() => {

          
            try {
                const response = await getProfiles()
                setProfiles(response.data)
            }catch (err) {
                setErrorPofiles(`Gagal Memuat ${err}`)
            }
            
            
        } 
        fetchProfiles()
    }, [])


    useEffect(() => {
        const fetchProject = async() => {
            setLoadingProjects(true)


           try{
            const response = await getProjects()
            const result = response.data.slice(0, 3)
            setProjects(result || [])
            setmeta(response.meta)
            

           }catch (err) {
          
            setErrorProjects(`Gagal memuat !! ${err}`);

        } finally {
            setLoadingProjects(false);
        }
        
        }
        fetchProject()
        
        
    },[])

    const Statitems = [
        { value: loadingProjects ? "0" : `${meta?.total ?? 0}`, label: "Projects", icon: "code" },
        { value: `100%`, label: "Dedication", icon: "favorite" },
        { value: "∞", label: "Curiosity", icon: "psychology" },
    ]

    
    
    if (errorProfiles || errorProjects) {
        return <>
            <Error
            onRetry={() => window.location.reload()}
            />
        </>;
    }
   
    
    return ( 
        <>
            <Navbar/>
            <main className="relative z-10 pt-28 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-20">
                <Hero data={profiles} />

                <button
                    onClick={() => document.getElementById("stat-section")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full hero-fade-in flex flex-col items-center gap-2 mt-16 md:mt-4 cursor-pointer group bg-transparent border-none outline-none"
                    style={{ "--delay": "1.5s" } as React.CSSProperties}
                    aria-label="Scroll ke bawah"
                >
                    <span className="text-[10px] font-label-mono text-on-surface-variant/40 uppercase tracking-widest group-hover:text-primary/60 transition-colors duration-300">Scroll</span>
                    <div className="w-5 h-8 rounded-full border border-outline-variant/30 flex justify-center pt-1.5 group-hover:border-primary/40 transition-colors duration-300">
                        <div className="w-1 h-2 bg-primary/40 rounded-full scroll-dot" />
                    </div>
                </button>


               
                <StatCardRow items={Statitems}/>
                

                <div id="stat-section" className="">
                    <ProjectSection data={projects}>
                        <HeaderProject>
                            <div className="flex flex-col items-center md:items-start md:text-start">
                                
                                <Badge className="!hidden md:!inline-flex " warna="biru" icon="grid_view" label="Featured Projects"/>

                                <Heading className="font-headline-xl !text-[clamp(24px,3.5vw,32px)]" as={"h2"}>
                                    Selected <span className="text-primary">Projects</span>
                                </Heading>

                                <Teks deskripsi="Koleksi proyek digital pilihan yang dirancang dengan mengutamakan performa dan pengalaman pengguna yang optimal."></Teks>

                            </div>
                        </HeaderProject>
                    </ProjectSection>  
                </div>

            </main>
            <Footer/>
        </>
    )
}

export default LeadingTempalte