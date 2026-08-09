
import SectionHedaer from "../molecules/SectionHeader";

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  status: "Sedang Berjalan" | "Selesai";
  gpa?: string;
  description: string;
  coursework: string[];
  icon: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "S1 Informatika",
    institution: "Universitas Andi Djemma",
    period: "2021 — Sekarang",
    status: "Sedang Berjalan",
    gpa: "3.80",
    description:
      "Mempelajari dasar-dasar ilmu komputer, algoritma, struktur data, dan pengembangan perangkat lunak modern dengan fokus pada web development.",
    coursework: [
      "Algoritma & Struktur Data",
      "Basis Data",
      "Pemrograman Web",
      "Rekayasa Perangkat Lunak",
      "Jaringan Komputer",
      "Kecerdasan Buatan",
    ],
    icon: "school",
  },
];

const AcademicFoundation = () => (
  <section className="about-fade-in flex flex-col items-center w-full">
    {/* ── Section Header ── */}
    

    <SectionHedaer 
      icon="school" 
      deskripsi="Fondasi akademik yang membentuk pola pikir analitis dan kemampuan teknis saya sebagai seorang developer.">
      Academic <span className="text-primary">Foundation</span>

    </SectionHedaer>

    {/* ── Education Cards ── */}
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {educations.map((edu) => (
        <div
          key={edu.id}
          className="group relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        >
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary-container to-primary/40" />

          <div className="p-6 md:p-8">
            {/* ── Header Row ── */}
            <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
              {/* Icon circle */}
              <div className="relative shrink-0 self-start">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    {edu.icon}
                  </span>
                </div>
              </div>

              {/* Title block */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-headline-lg text-[20px] md:text-[24px] text-on-surface font-semibold leading-tight">
                    {edu.degree}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${
                      edu.status === "Sedang Berjalan"
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {edu.status === "Sedang Berjalan" && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                    )}
                    {edu.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-on-surface-variant">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary/60 text-[16px]">
                      apartment
                    </span>
                    {edu.institution}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary/60 text-[16px]">
                      calendar_today
                    </span>
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* GPA Badge */}
              {edu.gpa && (
                <div className="shrink-0 self-start">
                  <div className="relative group/gpa">
                    <div className="absolute -inset-1 rounded-2xl   blur-md opacity-60 " />
                    <div className="relative flex flex-col items-center px-5 py-3 rounded-2xl bg-primary/5 border border-primary/15">
                      <span className="font-label-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest mb-0.5">
                        IPK
                      </span>
                      <span className="font-headline-lg text-[28px] text-primary font-bold leading-none">
                        {edu.gpa}
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
              {edu.description}
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
                {edu.coursework.map((course) => (
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
      ))}
    </div>
  </section>
);

export default AcademicFoundation;
