import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GoBack from "../atoms/GoBack"
import CoverSection from "../organisms/CoverSection"
import MainContentGrid from "../organisms/MainContentGrid"
import type { ProjectItem } from "../../types/project"
import {   getProjectsBySlug, getRelatedProjects } from "../../services/projects.service"
import ProjectSection from "../organisms/ProjectSection"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import HeaderProject from "../molecules/HeaderProject"

const ProjectDetailTemplate = () => {
    const { slug } = useParams<{ slug: string }>()
    
    const [projectById, setProjectById] = useState<ProjectItem | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [relatedProjects, setRelatedProjects] = useState<ProjectItem[]>([])
  


    useEffect(() => {
        if (!slug || !projectById) return;

        const fetchProjects = async () => {
            const response = await getRelatedProjects(projectById?.category_role_id);
            const result = response;

            const relatedProjects = result
                .filter((project) => project.slug !== slug)
               

            setRelatedProjects(relatedProjects);
        };

        fetchProjects();
    }, [slug, projectById]);



    useEffect(() => {
        if (!slug) return

        const fetchProjectById = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const data = await getProjectsBySlug(slug)
                setProjectById(data)

            } catch (err) {
                setError("Gagal memuat data project. Silakan coba lagi.")
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProjectById()
    }, [slug])


    

   


    return (
        <main className="relative z-10 pt-28 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

            {/* Go Back */}
            <GoBack href="/project" />

            {/* Loading State */}
            {isLoading && (
                <div className="flex flex-col items-center justify-center py-32 gap-4 skill-fade-in">
                    <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <p className="text-[14px] text-on-surface-variant">Loading project...</p>
                </div>
            )}

            {/* Error State */}
            {!isLoading && error && (
                <div className="flex flex-col items-center justify-center py-32 gap-4 skill-fade-in">
                    <span className="material-symbols-outlined text-6xl text-error/50">error</span>
                    <p className="text-[15px] text-on-surface-variant text-center">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-[14px] font-semibold hover:opacity-90 transition-opacity"
                    >
                        Coba Lagi
                    </button>
                </div>
            )}

            {/* Content */}
            {!isLoading && !error && (
                <>
                    {/* COVER SECTION */}
                    <CoverSection data={projectById} />

                    {/* MAIN CONTENT GRID */}
                    <MainContentGrid data={projectById} />
                </>
            )}

            {relatedProjects.length > 0  && (
                <ProjectSection data={relatedProjects}>
                <HeaderProject>
                    <div className=" flex flex-col  items-start text-center md:items-start md:text-start">
                        
                        {/* <Badge  warna="biru" icon="work" label="Related apps"/> */}

                        
                        <Heading className="font-headline-xl !text-[clamp(24px,3.5vw,32px)]" as={"h2"}>
                            Related  <span className=" text-primary">Apps</span>
                        </Heading>

                    </div>
                </HeaderProject>
            </ProjectSection>
            )}

            
        </main>
    )
}

export default ProjectDetailTemplate