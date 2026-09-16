
import type { ProjectItem } from "../../types/project"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import CardProject from "../molecules/CardProject"
import HeaderProject from "../molecules/HeaderProject"

interface ProjectSectionProps {
    data : ProjectItem[],
    children?: React.ReactNode
}

const ProjectSection = ({data, children} : ProjectSectionProps) => {

    
    return (
        <section className="pt-24">
            {/* Header Project */}
           {children}
            

            {data.length === 0 ? (
                <div className="">kosong</div>
            ) : (

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {data.map((item) => (
                         <CardProject 
                            key={item.id}
                            judul={item.title} 
                            deskripsi={item.description}
                            stack={item.technology} 
                            img={item.image}
                            code={item.github_link}
                            liveDemo={item.demo_link}
                            slug={item.slug}
                        />
                    ))}
                    
                </div>
            )}

            

        </section>
    )
}

export default ProjectSection