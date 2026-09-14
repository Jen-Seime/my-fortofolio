import { useState } from "react"
import type { ProjectItem } from "../../types/project"
import { createPortal } from "react-dom"

interface CoverSectionProps {
    data: ProjectItem | null
}

const CoverSection = ({ data }: CoverSectionProps) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    

    return (
        <>

            <section className="mb-16 skill-fade-in">
                

                {/* Cover Image */}
                <div
                    className="relative rounded-2xl overflow-hidden group cursor-pointer"
                    onClick={() => setIsFullscreen(true)}
                >
                    <div className="aspect-[21/9] md:aspect-[21/8] w-full overflow-hidden bg-surface-container-high">
                        {data?.image ? (
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-surface-container-high to-surface-container flex items-center justify-center text-on-surface-variant">
                                <span className="material-symbols-outlined text-7xl opacity-30">code</span>
                            </div>
                        )}
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-on-surface/5 to-transparent" />

                    {/* View fullscreen hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2 text-on-surface text-[13px] font-medium">
                            <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                            View Full Image
                        </div>
                    </div>

                    {/* Category badge */}
                    {data?.category_role_id && (
                        <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center gap-1.5 bg-primary/90 text-on-primary text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
                                <span className="material-symbols-outlined text-[14px]">category</span>
                                Project
                            </span>
                        </div>
                    )}

                    {/* Featured badge */}
                    {data?.is_featured && (
                        <div className="absolute top-4 right-4 z-10">
                            <span className="inline-flex items-center gap-1 bg-amber-500/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
                                <span className="material-symbols-outlined text-[14px] icon-fill">star</span>
                                Featured
                            </span>
                        </div>
                    )}
                </div>
            </section>

            {/* Fullscreen modal */}
            {isFullscreen && data?.image && createPortal(
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setIsFullscreen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/80 hover:text-white"
                        onClick={() => setIsFullscreen(false)}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    <img
                        src={data.image}
                        alt={data.title}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </>
    )
}

export default CoverSection