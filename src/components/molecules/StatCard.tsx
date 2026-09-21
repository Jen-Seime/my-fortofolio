import { useEffect, useRef, useState } from "react";

interface StatCardProps {
    value: string;
    label: string;
    icon?: string; // Material Symbol icon name
}

function useCountUp(target: string, duration = 1800, startCounting: boolean = false) {
    const [display, setDisplay] = useState(target);

    useEffect(() => {
        if (!startCounting) return;

        const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
        const suffix = target.replace(/[0-9.]/g, "");

        // If target doesn't contain a valid number (e.g. "∞", "—", or loading state)
        if (isNaN(numeric)) {
            setDisplay(target);
            return;
        }

        const frames = 40;
        let frame = 0;
        const timer = setInterval(() => {
            frame++;
            if (frame >= frames) {
                setDisplay(target);
                clearInterval(timer);
            } else {
                const progress = frame / frames;
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * numeric);
                setDisplay(`${current}${suffix}`);
            }
        }, duration / frames);

        return () => clearInterval(timer);
    }, [target, duration, startCounting]);

    return display;
}

const StatCard = ({ value, label, icon = "..." }: StatCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const animated = useCountUp(value, 1600, visible);

    return (
        <div
            ref={ref}
            className="relative group overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 cursor-default select-none"
            style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(0,64,224,0.08)",
            }}
        >
            {/* Shimmer overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(0,64,224,0.06) 0%, rgba(46,91,255,0.03) 50%, transparent 100%)",
                }}
            />

            {/* Top accent line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-10 rounded-full opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #0040e0, #2e5bff)" }}
            />

            {/* Icon (optional) */}
            {icon && (
                <span
                    className="material-symbols-outlined text-2xl mb-2 block text-primary/50 group-hover:text-primary/80 transition-colors duration-300"
                    aria-hidden="true"
                >
                    {icon}
                </span>
            )}

            {/* Value */}
            <div
                className="text-[2rem] font-extrabold leading-none mb-1.5 transition-all duration-300"
                style={{
                    background: "linear-gradient(135deg, #0040e0 0%, #2e5bff 60%, #6b7fff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                }}
            >
                {animated}
            </div>

            {/* Label */}
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant/60 group-hover:text-on-surface-variant/90 transition-colors duration-300">
                {label}
            </div>
        </div>
    );
};

export default StatCard;