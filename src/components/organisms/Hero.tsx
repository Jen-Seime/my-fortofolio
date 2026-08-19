
import { sosialLinks } from "../../constant/sosialLinks"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"

import CTAButtonGroup from "../molecules/CTAButtonGroup"
import SosialIconRow from "../molecules/SosialIconRow"

const Hero = () => {
    return (
        <section className="min-h-[85vh] md:mt-32 flex flex-col justify-center relative mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 flex flex-col gap-4 z-10">
                    <Badge dot warna="biru"   label="Available for work"/>

                    <div className="hero-fade-in">
                        <Heading>
                            Hi, I'm{" "}
                            <span className="relative inline-block">
                            <span className="text-primary">Nyoman Adi Putra</span>
                            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5C47 2 77 2 199 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" className="text-primary/40 hero-underline" />
                            </svg>
                            </span>
                        </Heading>

                        <Heading as="h2">Web Developer</Heading>

                        {/* Bio */}
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" }}>
                            Mahasiswa Informatika yang berfokus pada pengembangan aplikasi web modern, dengan minat pada pembuatan sistem yang fungsional, efisien, dan memberikan pengalaman pengguna yang baik.
                        </p>

                        {/* CTAButtonGroup */}
                        <CTAButtonGroup/>

                        {/* Soasial Media */}
                        <SosialIconRow sosial={sosialLinks} />

                    </div>
                </div>

                {/* hero visual/image */}
                <div className="lg:col-span-5 relative order-first lg:order-last mb-16 lg:mb-0 flex justify-center lg:block hero-fade-in">

                    {/* main image container */}
                    <div className="relative group">
                        <div className="relative glass-card p-1.5 rounded-full lg:rounded-2xl overflow-hidden">
                        <div className="w-64 h-64 lg:w-full lg:h-[480px] bg-surface-container-high rounded-full lg:rounded-xl overflow-hidden relative">
                            <img className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" src="/img/gambar1.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero