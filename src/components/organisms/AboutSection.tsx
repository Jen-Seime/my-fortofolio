

import Badge from "../atoms/Badge"
import Icon from "../atoms/Icon";
import AboutSectionSkeleton from "./AboutSectionSkeleton";
import type { ProfilItem } from "../../types/profil";
import ReactMarkdown from "react-markdown";


interface AboutSectionProps {
    isLoading?: boolean
    data? : ProfilItem
}

const AboutSection = ({ isLoading = false, data }: AboutSectionProps) => {
    
    const emailObj = data?.email;

    const sosial = [
        { nama: "github", icon: "fa-brands fa-github", href:data?.github},
        { nama: "instagram", icon: "fa-brands fa-instagram", href: data?.instagram },
        { nama: "linkedin", icon: "fa-brands fa-linkedin", href: data?.linkedin },

        
    ]

   

    return (
        
        <>

        {isLoading ? (
            <AboutSectionSkeleton/>
        ) : (
        
            <>
            <section className="about-fade-in">
                <Badge icon="person" warna="biru" label="About Me"/>
                <h1 className="font-headline-xl text-[clamp(28px,5vw,44px)] leading-[1.15] text-on-surface font-bold tracking-tight">
                    Get to Know <span className="text-primary">Me</span>
                </h1>
            </section>

            <section className="">
                <div className="relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                    <div className="h-1 bg-gradient-to-r from-primary via-primary-container to-primary/40"></div>

                    <div className="flex flex-col md:flex-row gap-0 items-stretch">
                        <div className="relative md:w-72 lg:w-80 shrink-0 flex flex-col">
                            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>

                            <div className="relative group p-6 md:p-8 flex flex-col gap-5 z-10">

                                <div className="relative self-center md:self-start">
                                    <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-tr from-primary via-secondary/60 to-primary/30 opacity-70 blur-[2px] group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                        <img alt={data?.image}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                        src={data?.image} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>

                                {/* Name & Role Pill  */}
                                <div className="text-center md:text-left">
                                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight">
                                        {data?.full_name}
                                    </h2>
                                    <Badge dot warna="biru" label={data?.role}></Badge>
                                </div>

                                {/* Info chips */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/15">
                                        <span className="material-symbols-outlined text-primary/50 text-[16px] shrink-0">location_on</span>
                                        <span className="text-[12px] text-on-surface-variant truncate">{data?.address}</span>
                                    </div>
                                
                                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/15">
                                        <span className="material-symbols-outlined text-primary/50 text-[16px] shrink-0">mail</span>
                                        <span className="text-[12px] text-on-surface-variant truncate">{emailObj}</span>
                                    </div>
                                </div>

                                {/* sosial */}
                                <div className=" flex   gap-5">
                                    {sosial.map((m) => (
                                        <Icon key={m.nama} icon={m.icon} href={m.href}></Icon>
                                    ))}
                                    
                                </div>

                                <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent"></div>

                            </div>

                        </div>


                        

                        {/* RIGHT: Bio Content */}
                        <div className="flex-1 min-w-0 p-6 md:p-8 md:pl-10 flex flex-col gap-6">

                            {/* <!-- Section label --> */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary text-[18px]">format_quote</span>
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                <span className="font-label-mono text-label-mono text-on-surface-variant/60 tracking-widest uppercase">Bio</span>
                            </div>

                            {/* Bio prose */}
                            <div className="prose-content text-[15px] md:text-[16px] leading-[1.85] text-on-surface-variant
                                [&>p]:mb-5 [&>p:last-child]:mb-0
                                [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-3 [&>h1]:text-on-surface
                                [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:text-on-surface
                                [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:text-on-surface
                                [&>ul]:list-disc [&>ul]:ml-5 [&>ul]:mb-4 [&>ul]:space-y-1
                                [&>ol]:list-decimal [&>ol]:ml-5 [&>ol]:mb-4 [&>ol]:space-y-1
                                [&>blockquote]:border-l-4 [&>blockquote]:border-primary/40 [&>blockquote]:pl-5 [&>blockquote]:my-4 [&>blockquote]:italic [&>blockquote]:text-on-surface-variant/70 [&>blockquote]:bg-primary/3 [&>blockquote]:rounded-r-xl [&>blockquote]:py-2
                                [&>strong]:text-on-surface [&>strong]:font-semibold
                                [&>img]:rounded-xl [&>img]:my-6 [&>img]:shadow-lg">
                                <ReactMarkdown>
                                    {data?.about}
                                </ReactMarkdown>
                            </div>

                        </div>

                    </div>

                </div>
                
            </section>
            </>
        )}

        </>

        
    )
}

export default AboutSection