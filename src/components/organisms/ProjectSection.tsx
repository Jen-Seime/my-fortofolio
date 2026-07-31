import { projects } from "../../constant/projects"
import Badge from "../atoms/Badge"
import Button from "../atoms/Button"
import Heading from "../atoms/Heading"
import CardProject from "../molecules/CardProject"


const ProjectSection = () => {

     const displayedProjects = projects.slice(0, 3)
    return (
        <section className="pt-12">
            {/* Header Project */}
            <div className=" flex flex-col md:flex-row  md:justify-between md:items-center items-end mb-13 gap-6 ">

                {/* Heading */}
                <div className=" flex flex-col items-center text-center md:items-start md:text-start">
                    <Badge  warna="biru" icon="work" label="Portofolio"/>
                    <Heading as={"h2"}>
                        Selected <span className=" text-primary">Projects</span>
                    </Heading>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" }}>
                        A curated collection of digital experiences crafted with performance and user experience at the core.
                    </p>

                </div>

                {/* Button all */}
                <Button   icon="arrow_forward" variant="putih" ukuran="kecil"  posisi="kiri">View All</Button>
            </div>

            {displayedProjects.length === 0 ? (
                <div className="">kosong</div>
            ) : (

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {displayedProjects.map((item) => (
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

            

        </section>
    )
}

export default ProjectSection