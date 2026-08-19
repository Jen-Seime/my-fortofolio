import type { Experience } from "../../constant/experiences";

interface TimelineCardProps {
  experience: Experience;
  index: number;
}

const typeStyles: Record<Experience["type"], { bg: string; label: string }> = {
  work: { bg: "bg-primary/10 text-primary", label: "Kerja" },
  freelance: { bg: "bg-emerald-500/10 text-emerald-600", label: "Freelance" },
  education: { bg: "bg-amber-500/10 text-amber-600", label: "Pendidikan" },
};

const TimelineCard = ({ experience, index }: TimelineCardProps) => {
  const isLeft = index % 2 === 0;
  const typeStyle = typeStyles[experience.type];

  return (
    <div className="timeline-entry group relative flex items-start gap-6 md:gap-0 w-full">
      {/* ── Desktop: left / right layout ── */}
      {/* Left content area (desktop) */}
      <div
        className={`hidden md:flex md:w-[calc(50%-28px)] ${
          isLeft ? "justify-end" : "justify-start order-3"
        }`}
      >
        <div
          className={`timeline-card relative max-w-md w-full glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 ${
            isLeft ? "text-right" : "text-left"
          }`}
          style={{ "--delay": `${index * 0.15}s` } as React.CSSProperties}
        >
          <CardContent experience={experience} align={isLeft ? "right" : "left"} typeStyle={typeStyle} />
        </div>
      </div>

      {/* ── Center timeline spine ── */}
      <div className="hidden md:flex flex-col items-center w-14 shrink-0 order-2">
        {/* Dot */}
        <div className="relative z-10 w-12 h-12 rounded-xl bg-white border-2 border-primary/30 flex items-center justify-center shadow-lg timeline-dot group-hover:border-primary group-hover:scale-110 transition-all duration-300">
          <span className="material-symbols-outlined text-primary text-[20px]">
            {experience.icon}
          </span>

          {/* Year badge beside dot */}
          <span
            className={`absolute top-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 font-label-mono text-[11px] font-semibold text-primary tracking-wider whitespace-nowrap shadow-sm ${
              isLeft ? "left-full ml-4" : "right-full mr-4"
            }`}
          >
            {experience.year}
          </span>
        </div>
      </div>

      {/* Right spacer (desktop) */}
      <div
        className={`hidden md:block md:w-[calc(50%-28px)] ${
          isLeft ? "order-3" : "order-1"
        }`}
      />

      {/* ── Mobile: single column layout ── */}
      <div className="md:hidden flex items-start gap-4 w-full">
        {/* Mobile timeline spine */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative z-10 w-10 h-10 rounded-xl bg-white border-2 border-primary/30 flex items-center justify-center shadow-lg timeline-dot">
            <span className="material-symbols-outlined text-primary text-[18px]">
              {experience.icon}
            </span>
          </div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
        </div>

        {/* Mobile card */}
        <div
          className="timeline-card flex-1 glass-card rounded-2xl p-5 mb-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/8"
          style={{ "--delay": `${index * 0.15}s` } as React.CSSProperties}
        >
          <CardContent experience={experience} align="left" typeStyle={typeStyle} />
        </div>
      </div>
    </div>
  );
};

/* ── Shared card content ── */
interface CardContentProps {
  experience: Experience;
  align: "left" | "right";
  typeStyle: { bg: string; label: string };
}

const CardContent = ({ experience, align, typeStyle }: CardContentProps) => (
  <>
    {/* Top row: period + type badge */}
    <div
      className={`flex items-center gap-2 mb-3 flex-wrap ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className="font-label-mono text-[11px] text-on-surface-variant/60 tracking-wider uppercase">
        {experience.period}
      </span>
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${typeStyle.bg}`}
      >
        {typeStyle.label}
      </span>
    </div>

    {/* Title & company */}
    <h3 className="font-headline-lg text-[18px] md:text-[20px] text-on-surface font-semibold leading-tight mb-1">
      {experience.title}
    </h3>
    <p className="text-[13px] text-primary/80 font-medium mb-3">
      {experience.company}
    </p>

    {/* Description */}
    <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mb-4">
      {experience.description}
    </p>

    {/* Achievements */}
    <div className="mb-4">
      <div
        className={`flex items-center gap-2 mb-2 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span className="material-symbols-outlined text-primary/60 text-[14px]">
          emoji_events
        </span>
        <span className="font-label-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
          Pencapaian
        </span>
      </div>
      <ul
        className={`space-y-1.5 ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {experience.achievements.map((a, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-[13px] text-on-surface-variant ${
              align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <span className="text-primary/60 mt-0.5 shrink-0">▸</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Tech stack pills */}
    <div
      className={`flex flex-wrap gap-1.5 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {experience.techStack.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center px-2.5 py-1 rounded-lg bg-surface-container/80 border border-outline-variant/15 text-[11px] font-label-mono text-on-surface-variant/80 transition-colors duration-200 hover:bg-primary/8 hover:text-primary hover:border-primary/20"
        >
          {tech}
        </span>
      ))}
    </div>
  </>
);

export default TimelineCard;
