import { experiences } from "../../constant/experiences";
import SectionHedaer from "../molecules/SectionHeader";
import TimelineCard from "../molecules/TimelineCard";

const ExperienceEvolution = () => (
    <section className="about-fade-in flex flex-col items-center w-full">
        {/* ── Section Header ── */}
        <SectionHedaer
            icon="timeline"
            deskripsi=" A timeline of my professional journey, highlighting key roles, technical challenges, and major achievements in building scalable web solutions."
        >
            Experience & <span className="text-primary">Evolution</span>
        </SectionHedaer>

        {experiences.length === 0 ? (
            <div className=""></div>
        ) : (
            /* ── Timeline Container ── */
            <div className="relative w-full max-w-4xl">
                {/* Vertical spine (desktop only) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

                {/* Decorative glow behind spine */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                {/* Timeline entries */}
                <div className="flex flex-col md:gap-12 gap-2">
                    {experiences.map((exp, i) => (
                        <TimelineCard key={exp.id} experience={exp} index={i} />
                    ))}
                </div>

                {/* End dot */}
                <div className="hidden md:flex justify-center mt-8">
                    <div className="relative">
                        <div className="absolute -inset-2 rounded-full bg-primary/10 animate-ping" />
                        <div className="relative w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/60" />
                    </div>
                </div>
            </div>
        )}

    </section>
);

export default ExperienceEvolution;