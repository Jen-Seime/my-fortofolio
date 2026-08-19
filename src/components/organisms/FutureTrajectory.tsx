
import SectionHedaer from "../molecules/SectionHeader";

interface TrajectoryGoal {
  id: number;
  title: string;
  description: string;
  icon: string;
  timeline: string;
  status: "in-progress" | "planned" | "exploring";
  milestones: string[];
}

const goals: TrajectoryGoal[] = [
  {
    id: 1,
    title: "Fullstack Mastery",
    description:
      "Menguasai ekosistem fullstack modern secara mendalam — dari frontend frameworks hingga backend architecture, database design, dan DevOps.",
    icon: "code",
    timeline: "2024 — 2025",
    status: "in-progress",
    milestones: [
      "Mendalami Next.js & Server Components",
      "Membangun REST & GraphQL API",
      "Menguasai Docker & CI/CD pipeline",
    ],
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description:
      "Berkontribusi pada proyek open source untuk memperluas jaringan, belajar dari developer terbaik, dan memberi dampak pada komunitas global.",
    icon: "diversity_3",
    timeline: "2025 — 2026",
    status: "planned",
    milestones: [
      "Kontribusi ke 3+ proyek open source",
      "Membangun library/tool sendiri",
      "Membagikan pengetahuan melalui artikel teknis",
    ],
  },
  {
    id: 3,
    title: "Cloud & AI Integration",
    description:
      "Mengeksplorasi integrasi kecerdasan buatan ke dalam aplikasi web dan mendalami arsitektur cloud-native untuk solusi yang scalable.",
    icon: "cloud",
    timeline: "2025 — 2026",
    status: "exploring",
    milestones: [
      "Mempelajari AWS / GCP fundamentals",
      "Integrasi AI/ML ke dalam web apps",
      "Membangun aplikasi serverless",
    ],
  },
];

const statusConfig: Record<
  TrajectoryGoal["status"],
  { bg: string; label: string; dot?: boolean }
> = {
  "in-progress": {
    bg: "bg-emerald-500/10 text-emerald-600",
    label: "Sedang Berjalan",
    dot: true,
  },
  planned: {
    bg: "bg-amber-500/10 text-amber-600",
    label: "Direncanakan",
  },
  exploring: {
    bg: "bg-violet-500/10 text-violet-600",
    label: "Mengeksplorasi",
  },
};

const FutureTrajectory = () => (
  <section className="about-fade-in flex flex-col items-center w-full">
    {/* ── Section Header ── */}
    <SectionHedaer
      icon="rocket_launch"
      deskripsi="Peta jalan karier saya ke depan — tujuan yang ingin dicapai, skill yang ingin dikuasai, dan dampak yang ingin diberikan."
    >
      Future <span className="text-primary">Trajectory</span>
    </SectionHedaer>

    {/* ── Trajectory Cards Grid ── */}
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
      {goals.map((goal, index) => {
        const status = statusConfig[goal.status];
        return (
          <div
            key={goal.id}
            className="group relative flex flex-col bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary via-primary-container to-primary/40" />

            <div className="flex-1 flex flex-col p-6">
              {/* ── Icon + Status ── */}
              <div className="flex items-start justify-between mb-5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      {goal.icon}
                    </span>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${status.bg}`}
                >
                  {status.dot && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                  )}
                  {status.label}
                </span>
              </div>

              {/* ── Title & Timeline ── */}
              <h3 className="font-headline-lg text-[18px] md:text-[20px] text-on-surface font-semibold leading-tight mb-1">
                {goal.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-on-surface-variant/60 mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  calendar_today
                </span>
                {goal.timeline}
              </span>

              {/* ── Description ── */}
              <p className="font-body-md text-[13px] md:text-[14px] text-on-surface-variant leading-relaxed mb-5">
                {goal.description}
              </p>

              {/* Spacer */}
              <div className="flex-1" />

              {/* ── Milestones ── */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary/60 text-[14px]">
                    flag
                  </span>
                  <span className="font-label-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                    Milestones
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-outline-variant/20 to-transparent" />
                </div>

                <ul className="space-y-2">
                  {goal.milestones.map((m, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] text-on-surface-variant"
                    >
                      <span className="mt-1 shrink-0 w-4 h-4 rounded-md bg-primary/8 border border-primary/15 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary/50 text-[12px]">
                          {goal.status === "in-progress" && i === 0
                            ? "check"
                            : "horizontal_rule"}
                        </span>
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* ── Closing Message ── */}
    <div className="mt-16 text-center max-w-xl">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 border border-primary/10">
        <span className="material-symbols-outlined text-primary text-[20px]">
          auto_awesome
        </span>
        <span className="font-body-md text-[14px] text-on-surface-variant">
          Perjalanan ini baru dimulai — selalu terbuka untuk{" "}
          <span className="text-primary font-medium">
            peluang baru & kolaborasi
          </span>
          .
        </span>
      </div>
    </div>
  </section>
);

export default FutureTrajectory;
