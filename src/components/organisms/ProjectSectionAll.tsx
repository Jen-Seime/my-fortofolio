import { useState } from "react"
import { projects } from "../../constant/projects"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import CardProject from "../molecules/CardProject"
import Filter from "../molecules/Filter"

const categoriesData = [
  
  { id: 1, name: "Frontend" },
  { id: 2, name: "Backend" },
  { id: 3, name: "Fullstack" },
];

const ProjectSectionAll = () => {

    const [selectedCategory,setSelectedCategory ] = useState<number | string>("all");
    
   
    return (
        <>
            <header className="b-stack-xl text-center md:text-left">
                <Badge warna="biru" icon="work" label="Portofolio"/>
                <Heading as={"h2"}>
                    Selected <span className=" text-primary">Projects</span>
                </Heading>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" }}>
                    A curated collection of digital experiences crafted with performance and user experience at the core.
                </p>
            </header>

            <Filter categories={categoriesData} activeCatgory={selectedCategory} onSelectCategory={setSelectedCategory}
                
            />

            {projects.length === 0 ? (
                <div className="text-center py-10 text-on-surface-variant">Tidak ada project ditemukan untuk kategori ini.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {projects.map((item) => (
                        <CardProject 
                            key={item.id}
                            judul={item.title} 
                            deskripsi={item.description}
                            stack={item.tags} 
                            img={item.image}
                            code={item.codeUrl}
                            liveDemo={item.demoUrl}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ProjectSectionAll