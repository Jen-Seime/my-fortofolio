
import type { ProfilItem } from "../../types/profil"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"

import CTAButtonGroup from "../molecules/CTAButtonGroup"
import SosialIconRow from "../molecules/SosialIconRow"
import { useEffect, useState } from "react"

interface HeroProps {
    data?: ProfilItem;
}

const Hero = ({ data }: HeroProps) => {
    console.log(data?.full_name);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePos({ x, y });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    
    return (
        <section className="max-h-[85vh] w-full mx-auto mt-36 md:mt-24 flex flex-col justify-center relative overflow-visible  mb-10 md:mb-0">

            {/* Background ambient glow effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                <div 
                    className="absolute w-[600px] h-[600px] rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 64, 224, 0.08) 0%, transparent 70%)",
                        top: "10%",
                        right: "-10%",
                        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
                <div 
                    className="absolute w-[400px] h-[400px] rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(circle, rgba(46, 91, 255, 0.1) 0%, transparent 70%)",
                        bottom: "0%",
                        left: "20%",
                        transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
            </div>

            {/* Floating grid lines (subtle background decoration) */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 64, 224, 1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 64, 224, 1) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 flex flex-col gap-4 z-10">
                    <Badge href="!hidden md:!inline-flex" dot warna="biru"   label="Available for work"/>

                    <div className="hero-fade-in">
                        <Heading>
                            Hi, I'm{" "}
                            <span className="relative inline-block">
                            <span className="text-primary hero-name-gradient">{data?.full_name}</span>
                            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5C47 2 77 2 199 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" className="text-primary/40 hero-underline" />
                            </svg>
                            </span>
                        </Heading>

                        <Heading as="h2">{data?.role}</Heading>

                        {/* Bio */}
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" } as React.CSSProperties}>
                                {data?.bio}
                        </p>

                        {/* CTAButtonGroup */}
                        <CTAButtonGroup to="/project" cv={data?.cv_file} />

                        {/* Soasial Media */}
                        <SosialIconRow data={data} />

                        {/* Tech stack mini badges - horizontal row */}
                        <div className="flex items-center gap-2 mt-6 flex-wrap hero-fade-in" style={{ "--delay": "0.8s" } as React.CSSProperties}>
                            <span className="text-[12px] font-label-mono text-on-surface-variant/50 uppercase tracking-wider mr-1">Tech Stack</span>
                            {["React", "Laravel", "TypeScript", "Node.js", "PHP"].map((tech, i) => (
                                <span 
                                    key={tech}
                                    className="px-2.5 py-1 rounded-lg text-[11px] font-label-mono text-primary/70 bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                                    style={{ animationDelay: `${i * 0.1 + 1}s` }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>

                {/* hero visual/image with floating tech icons */}
                <div className="lg:col-span-5 relative order-first lg:order-last mb-4  md:mb-0 flex justify-center lg:block hero-fade-in overflow-visible ">

                

                    {/* main image container */}
                    <div className="relative group">

                        {/* Animated glow behind image */}
                        <div 
                            className="absolute inset-0 rounded-full lg:rounded-2xl hero-image-glow"
                            style={{
                                background: "linear-gradient(135deg, rgba(0, 64, 224, 0.15), rgba(46, 91, 255, 0.08), rgba(0, 64, 224, 0.12))",
                                filter: "blur(40px)",
                                transform: "scale(1.1)",
                            }}
                        />

                        <div className="relative glass-card p-1.5 rounded-full lg:rounded-2xl overflow-hidden hero-image-border">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-[480px] bg-surface-container-high rounded-full lg:rounded-xl overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" src={data?.image} alt={data?.image} />
                                
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        {/* <!-- Tech badges floating on image --> */}
                        <div className="absolute hidden md:flex -bottom-3 -left-3 lg:bottom-6 lg:-left-4 glass-panel px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 floating-slow">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-[16px]">code</span>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-on-surface leading-none">Laravel</p>
                                <p className="text-[9px] text-on-surface-variant leading-none mt-0.5">Backend</p>
                            </div>
                        </div>

                        <div className="absolute hidden md:flex -top-2 -right-2 lg:top-8 lg:-right-4 glass-panel px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 floating-medium">
                            <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-secondary text-[16px]">palette</span>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-on-surface leading-none">Tailwind</p>
                                <p className="text-[9px] text-on-surface-variant leading-none mt-0.5">Styling</p>
                            </div>
                        </div>

                        <div className="absolute hidden md:flex bottom-16 -right-3 lg:bottom-24 lg:-right-6 glass-panel px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 floating-fast">
                            <div className="w-7 h-7 rounded-lg bg-tertiary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-tertiary text-[16px]">bolt</span>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-on-surface leading-none">Livewire</p>
                                <p className="text-[9px] text-on-surface-variant leading-none mt-0.5">Reactive</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Hero