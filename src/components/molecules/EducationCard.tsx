
interface EducationCardProps {
    id: number;
    institution: string;
    gpa:string;
    major: string;
    degree: string;
    coursework:string[]
    start_year: number;
    end_year: number | null;
    description: string;
}

const EducationCard = ({id,institution,gpa,degree,coursework,start_year,end_year,description} : EducationCardProps) => {
    return (
       
           
                <div
                key={id}
                className="group relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-primary-container to-primary/40" />

                <div className="p-6 md:p-8">
                    {/* ── Header Row ── */}
                    <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
                    <div className=" flex justify-between ">
                        {/* Icon circle */}
                        <div className="relative shrink-0 self-start">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[28px]">
                            school
                            </span>
                            
                        </div>
                        </div>

                        {/* ipk */}
                        {gpa && (
                        <div className="shrink-0 self-start md:hidden">
                            <div className="relative group/gpa">
                            <div className="absolute -inset-1 rounded-2xl   blur-md opacity-60 " />
                            <div className="relative flex flex-col items-center px-4 py-2  rounded-2xl bg-primary/5 border border-primary/15">
                                <span className="font-label-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest mb-0.5">
                                IPK
                                </span>
                                <span className="font-headline-xl text-[16px] text-primary font-bold leading-none">
                                {gpa}
                                </span>
                            
                            </div>
                            </div>
                        </div>
                        )}
                    </div>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-headline-lg text-[20px] md:text-[24px] text-on-surface font-semibold leading-tight">
                            {degree}
                        </h3>
                        <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium 
                            ${end_year === null
                                ? "bg-emerald-500/10 text-emerald-600"
                                : "bg-primary/10 text-primary"


                            }`
                        
                        }
                        >
                            {end_year === null && (
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            )}
                            {end_year ?? "Sedang Berlangsung"}
                        </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-on-surface-variant">
                        <span className="inline-flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-primary/60 text-[16px]">
                            apartment
                            </span>
                            {institution}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-primary/60 text-[16px]">
                            calendar_today
                            </span>
                            {start_year} - {end_year ?? "Sekarang"}
                        </span>
                        </div>
                    </div>

                    {/* GPA Badge */}
                    {gpa && (
                        <div className="shrink-0 self-start hidden md:block">
                        <div className="relative group/gpa">
                            <div className="absolute -inset-1 rounded-2xl   blur-md opacity-60 " />
                            <div className="relative flex flex-col items-center px-5 py-3 rounded-2xl bg-primary/5 border border-primary/15">
                            <span className="font-label-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest mb-0.5">
                                IPK
                            </span>
                            <span className="font-headline-lg text-[28px] text-primary font-bold leading-none">
                                {gpa}
                            </span>
                            <span className="font-label-mono text-[10px] text-on-surface-variant/40 mt-0.5">
                                / 4.00
                            </span>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent mb-6" />

                    {/* ── Description ── */}
                    <p className="font-body-md text-[14px] md:text-[15px] text-on-surface-variant leading-relaxed mb-6">
                    {description}
                    </p>

                    {/* ── Relevant Coursework ── */}
                    <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-primary/60 text-[16px]">
                        menu_book
                        </span>
                        <span className="font-label-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                        Mata Kuliah Relevan
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-outline-variant/20 to-transparent" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {coursework.map((course) => (
                        <span
                            key={course}
                            className="inline-flex items-center px-3 py-1.5 rounded-xl bg-surface-container/80 border border-outline-variant/15 text-[12px] font-label-mono text-on-surface-variant/80 transition-colors duration-200 hover:bg-primary/8 hover:text-primary hover:border-primary/20"
                        >
                            {course}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
          
    )
}

export default EducationCard;