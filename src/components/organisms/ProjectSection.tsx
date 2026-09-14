
import type { ProjectItem } from "../../types/project"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import CardProject from "../molecules/CardProject"
import HeaderProject from "../molecules/HeaderProject"

interface ProjectSectionProps {
    data : ProjectItem[]
}

const ProjectSection = ({data} : ProjectSectionProps) => {

    
    return (
        <section className="pt-24">
            {/* Header Project */}
            <HeaderProject>
                <div className=" flex flex-col  items-start text-center md:items-start md:text-start">
                    
                    <Badge  warna="biru" icon="apps" label="Related"/>

                    
                    <Heading className="font-headline-xl !text-[clamp(24px,3.5vw,32px)]" as={"h2"}>
                        Selected <span className=" text-primary">Projects</span>
                    </Heading>

                    
                </div>
            </HeaderProject>
            

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