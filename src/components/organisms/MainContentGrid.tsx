import { useState } from "react"
import { createPortal } from "react-dom"
import Badge from "../atoms/Badge"
import type { ProjectItem } from "../../types/project"

interface MainContentGridProps {
    data: ProjectItem | null
}

const MainContentGrid = ({ data }: MainContentGridProps) => {
    const [activeThumb, setActiveThumb] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    if(!data.thumbnails || data?.thumbnails?.length === 0){
        return null
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* LEFT COLUMN — Main Info */}
            <div className="lg:col-span-8 space-y-10">

                {/* Title & Meta */}
                <div className="skill-fade-in" style={{ "--delay": "0.25s" } as React.CSSProperties}>

                    <h1 className="font-headline-xl text-[clamp(28px,5vw,44px)] leading-[1.15] text-on-surface font-bold tracking-tight mb-4">
                        {data?.title ?? "Loading..."}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-[13px] text-on-surface-variant">
                        {data?.date && (
                            <span className="inline-flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                {new Date(data.date).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                        )}

                        {data?.date && <span className="w-1 h-1 rounded-full bg-outline-variant" />}

                        
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="skill-fade-in" style={{ "--delay": "0.35s" } as React.CSSProperties}>
                    <h2 className="font-headline-lg text-[16px] text-on-surface font-semibold mb-4 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[16px]">code</span>
                        </span>
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {data?.technology && data.technology.length > 0 ? (
                            data.technology.map((tech, i) => (
                                <Badge key={i} label={tech} warna="biru" />
                            ))
                        ) : (
                            <p className="text-[13px] text-on-surface-variant/60">No technologies listed.</p>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="skill-fade-in" style={{ "--delay": "0.45s" } as React.CSSProperties}>
                    <h2 className="font-headline-lg text-[16px] text-on-surface font-semibold mb-4 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-secondary text-[16px]">description</span>
                        </span>
                        About This Project
                    </h2>
                    <div className="glass-card rounded-2xl p-6 md:p-8 border border-outline-variant/15">
                        <p className="font-body-md text-[15px] text-on-surface-variant leading-[1.8] whitespace-pre-line">
                            {data?.description ?? "No description available."}
                        </p>
                    </div>
                </div>


                {/* Gallery — show cover image as preview (extend later with multiple images) */}
                {data?.thumbnails && data.thumbnails.length > 0 && (
                    <div className="skill-fade-in" style={{ "--delay": "0.55s" } as React.CSSProperties}>
                        <h2 className="font-headline-lg text-[16px] text-on-surface font-semibold mb-4 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-tertiary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-tertiary text-[16px]">photo_library</span>
                            </span>
                            Gallery
                            <span className="ml-1 text-[12px] font-label-mono text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md">
                                {data.thumbnails.length}
                            </span>
                        </h2>

                        {/* Active Preview */}
                        <div 
                            className="rounded-2xl overflow-hidden mb-4 bg-surface-container-high cursor-pointer group" 
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <div className="aspect-video w-full overflow-hidden relative">

                                {data.thumbnails.map((thumb, index) => (
                                   
                                    <img
                                        key={thumb.id ?? index}
                                        src={thumb.url}
                                        alt={`${thumb.id} - Screenshot ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                                            activeThumb === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                        }`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-white text-5xl drop-shadow-md">fullscreen</span>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail strip — currently only one image */}
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {data.thumbnails.map((thumb, index) => (
                                <button
                                    onClick={() => setActiveThumb(index)}
                                    className={`flex-shrink-0 w-24 h-16 md:w-28 md:h-[72px] rounded-xl overflow-hidden border-2 transition-all duration-300
                                        ${activeThumb === index
                                            ? "border-primary opacity-100"
                                            : "border-transparent opacity-60 hover:opacity-100 hover:border-outline-variant/40"
                                        }`}
                                >
                                    <img src={thumb.url} alt={`${thumb.id} - Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                            
                        </div>
                    </div>
                )}
            </div>

            {/* RIGHT COLUMN — Sidebar */}
            <aside className="lg:col-span-4 space-y-6">

                {/* Action Links Card */}
                <div
                    className="glass-card rounded-2xl p-6 border border-outline-variant/15 skill-fade-in sticky top-28"
                    style={{ "--delay": "0.3s" } as React.CSSProperties}
                >
                    <h3 className="font-headline-lg text-[15px] text-on-surface font-semibold mb-5 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">link</span>
                        Project Links
                    </h3>

                    <div className="space-y-3">
                        {data?.demo_link ? (
                            <a
                                href={data.demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full flex items-center gap-3 bg-primary text-on-primary font-semibold text-[14px] px-5 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97] transition-all duration-300 overflow-hidden relative"
                            >
                                <span className="material-symbols-outlined text-[20px] relative z-10">open_in_new</span>
                                <span className="relative z-10">Live Demo</span>
                                <span className="material-symbols-outlined text-[18px] ml-auto relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                    arrow_forward
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        ) : null}

                        {data?.github_link ? (
                            <a
                                href={data.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full flex items-center gap-3 bg-surface border border-outline-variant/30 text-on-surface font-semibold text-[14px] px-5 py-3.5 rounded-xl hover:border-primary/30 hover:bg-primary/5 active:scale-[0.97] transition-all duration-300 glass-card"
                            >
                                <i className="fa-brands fa-github text-[20px]" />
                                <span>Source Code</span>
                                <span className="material-symbols-outlined text-[18px] ml-auto text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                                    arrow_forward
                                </span>
                            </a>
                        ) : null}

                        {!data?.demo_link && !data?.github_link && (
                            <div className="text-center py-6 text-on-surface-variant/60 text-[13px]">
                                <span className="material-symbols-outlined text-3xl mb-2 block opacity-40">link_off</span>
                                No links available
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Info Card */}
                <div
                    className="glass-card rounded-2xl p-6 border border-outline-variant/15 skill-fade-in"
                    style={{ "--delay": "0.4s" } as React.CSSProperties}
                >
                    <h3 className="font-headline-lg text-[15px] text-on-surface font-semibold mb-5 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
                        Project Info
                    </h3>

                    <div className="space-y-4">
                        {/* Date */}
                        {data?.date && (
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_today</span>
                                </div>
                                <div>
                                    <p className="text-[11px] font-label-mono uppercase tracking-wider text-on-surface-variant/60 mb-0.5">Date</p>
                                    <p className="text-[14px] font-medium text-on-surface">
                                        {new Date(data.date).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        )}

                       

                        {/* Technologies count */}
                        {data?.technology && data.technology.length > 0 && (
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">layers</span>
                                </div>
                                <div>
                                    <p className="text-[11px] font-label-mono uppercase tracking-wider text-on-surface-variant/60 mb-0.5">Technologies</p>
                                    <p className="text-[14px] font-medium text-on-surface">
                                        {data.technology.length} {data.technology.length === 1 ? "technology" : "technologies"} used
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Featured status */}
                        {data?.is_featured && (
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-[18px] text-amber-500 icon-fill">star</span>
                                </div>
                                <div>
                                    <p className="text-[11px] font-label-mono uppercase tracking-wider text-on-surface-variant/60 mb-0.5">Status</p>
                                    <p className="text-[14px] font-medium text-amber-600">Featured Project</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
            {/* Lightbox Modal */}
            {isLightboxOpen && createPortal(
                <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={() => setIsLightboxOpen(false)}>
                    {/* Close Button */}
                    <button 
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-10 hover:bg-white/20"
                    >
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>

                    {/* Prev Button */}
                    {data.thumbnails.length > 1 && (
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveThumb((prev) => prev === 0 ? data.thumbnails!.length - 1 : prev - 1);
                            }}
                            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full z-10 hover:bg-white/20"
                        >
                            <span className="material-symbols-outlined text-3xl">chevron_left</span>
                        </button>
                    )}

                    {/* Image Container */}
                    <div className="w-full h-full flex items-center justify-center p-4 md:p-12" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={data.thumbnails[activeThumb].url} 
                            alt={`Fullscreen view ${activeThumb + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Next Button */}
                    {data.thumbnails.length > 1 && (
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveThumb((prev) => prev === data.thumbnails!.length - 1 ? 0 : prev + 1);
                               
                            }}
                            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full z-10 hover:bg-white/20"
                        >
                            <span className="material-symbols-outlined text-3xl">chevron_right</span>
                        </button>
                    )}
                    
                    {/* Indicator */}
                    {data.thumbnails.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full font-label-mono z-10 border border-white/10">
                            {activeThumb + 1} / {data.thumbnails.length}
                        </div>
                    )}
                </div>,
                document.body
            )}
        </div>
    )
}

export default MainContentGrid