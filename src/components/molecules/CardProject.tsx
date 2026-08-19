import { NavLink } from "react-router-dom"

interface CardProjectProps {
    img?: string
    judul: string
    deskripsi: string
    stack?: string[]
    code: string
    liveDemo: string 
}


const CardProject = ({img, judul, deskripsi, stack = [], liveDemo, code} : CardProjectProps) => {
    return (
        <NavLink to={"/detail"} className="h-full flex flex-col">
            <div className="h-full flex flex-col rounded-xl glass-panel overflow-hidden group glow-effect hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                {/* img container */}
                <div className=" h-48 w-full opacity-90 overflow-hidden bg-surface-container-high shrink-0">
                    <img className=" w-full h-full object-cover transition-all duration-300 group-hover:scale-115" src={img} alt="" />
                </div>
                <div className="p-stack-md flex flex-col flex-grow">
                    {/* judul */}
                    <h3 className=" font-headline-lg text-headline-sm-mobile text-on-surface mb-2">{judul}</h3>
                    {/* deskripsi singkat */}
                    <p className=" font-body-sm text-body-sm text-on-surface-variant mb-stack-md">{deskripsi}</p>
                    {/* stack */}
                    <div className="flex flex-wrap gap-2 mb-stack-md">
                        {stack.map((m, index) => (
                            <span key={index} className="text-[10px] font-semibold font-label-mono uppercase tracking-wider text-primary bg-primary/6 px-2.5 py-1 rounded-lg">
                                {m}
                            </span>
                        ))}
                    </div>
                   
                    <div className="mt-auto flex justify-between items-center border-t pt-stack-sm border-outline-variant/30">
                        <a 
                            href={code} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} 
                            className=" flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant transition-all duration-300 hover:text-primary "
                        >
                            <span className="material-symbols-outlined text-[20px]">code</span>Code
                        </a>
                        <a 
                            href={liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} 
                            className=" flex items-center font-label-mono p-2 gap-y-4 gap-2 text-body-sm border bg-primary/10 text-primary border-primary/30 transition-all duration-300 rounded-xl hover:text-on-primary hover:bg-primary "
                        > 
                            <span className="material-symbols-outlined text-[20px]">open_in_new</span>Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </NavLink>
        
    )
}

export default CardProject