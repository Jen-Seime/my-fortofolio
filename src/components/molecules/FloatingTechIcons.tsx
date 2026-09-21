import { useEffect, useState } from "react";

interface TechIcon {
    icon: string;
    label: string;
    color: string;
    bgColor: string;
    size: "sm" | "md" | "lg";
    delay: number;
}

const techIcons: TechIcon[] = [
    { icon: "fa-brands fa-react", label: "React", color: "#61DAFB", bgColor: "rgba(97, 218, 251, 0.12)", size: "lg", delay: 0 },
    { icon: "fa-brands fa-laravel", label: "Laravel", color: "#FF2D20", bgColor: "rgba(255, 45, 32, 0.12)", size: "md", delay: 0.3 },
    { icon: "fa-brands fa-js", label: "JavaScript", color: "#F7DF1E", bgColor: "rgba(247, 223, 30, 0.12)", size: "md", delay: 0.6 },
    { icon: "fa-brands fa-node-js", label: "Node.js", color: "#339933", bgColor: "rgba(51, 153, 51, 0.12)", size: "sm", delay: 0.9 },
    { icon: "fa-brands fa-php", label: "PHP", color: "#777BB4", bgColor: "rgba(119, 123, 180, 0.12)", size: "md", delay: 1.2 },
    { icon: "fa-brands fa-git-alt", label: "Git", color: "#F05032", bgColor: "rgba(240, 80, 50, 0.12)", size: "sm", delay: 1.5 },
    { icon: "fa-brands fa-python", label: "Python", color: "#3776AB", bgColor: "rgba(55, 118, 171, 0.12)", size: "md", delay: 1.8 },
    { icon: "fa-brands fa-css3-alt", label: "CSS3", color: "#1572B6", bgColor: "rgba(21, 114, 182, 0.12)", size: "sm", delay: 2.1 },
    { icon: "fa-brands fa-html5", label: "HTML5", color: "#E34F26", bgColor: "rgba(227, 79, 38, 0.12)", size: "md", delay: 2.4 },
    { icon: "fa-brands fa-docker", label: "Docker", color: "#2496ED", bgColor: "rgba(36, 150, 237, 0.12)", size: "sm", delay: 2.7 },
    { icon: "fa-brands fa-vuejs", label: "Vue.js", color: "#4FC08D", bgColor: "rgba(79, 192, 141, 0.12)", size: "sm", delay: 3.0 },
    { icon: "fa-brands fa-figma", label: "Figma", color: "#F24E1E", bgColor: "rgba(242, 78, 30, 0.12)", size: "sm", delay: 3.3 },
];

// Predefined positions around the image (relative percentages)
const positions = [
    { top: "2%", left: "0%", animation: "techFloat1" },       // top-left
    { top: "-6%", left: "45%", animation: "techFloat2" },      // top-center
    { top: "5%", right: "-0%", animation: "techFloat3" },      // top-right
    { top: "25%", right: "-0%", animation: "techFloat1" },    // right-upper
    { top: "50%", right: "-0%", animation: "techFloat2" },    // right-center
    { top: "72%", right: "-0%", animation: "techFloat3" },    // right-lower
    { bottom: "2%", right: "-0%", animation: "techFloat1" },   // bottom-right
    { bottom: "-4%", left: "40%", animation: "techFloat2" },   // bottom-center
    { bottom: "8%", left: "-6%", animation: "techFloat3" },    // bottom-left
    { top: "68%", left: "-14%", animation: "techFloat1" },     // left-lower
    { top: "42%", left: "-16%", animation: "techFloat2" },     // left-center
    { top: "18%", left: "-10%", animation: "techFloat3" },     // left-upper
];

const sizeClasses: Record<string, string> = {
    sm: "w-10 h-10 text-[16px]",
    md: "w-12 h-12 text-[20px]",
    lg: "w-14 h-14 text-[24px]",
};

const FloatingTechIcons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {techIcons.map((tech, index) => {
                const pos = positions[index % positions.length];
                const posStyle: React.CSSProperties = {
                    position: "absolute",
                    ...(pos.top !== undefined && { top: pos.top }),
                    ...(pos.left !== undefined && { left: pos.left }),
                    ...(pos.right !== undefined && { right: pos.right }),
                    ...(pos.bottom !== undefined && { bottom: pos.bottom }),
                    zIndex: 20,
                };

                return (
                    <div
                        key={tech.label}
                        className={`tech-icon-float group/icon ${isVisible ? "tech-icon-visible" : "tech-icon-hidden"}`}
                        style={{
                            ...posStyle,
                            "--float-delay": `${tech.delay}s`,
                            "--float-animation": pos.animation,
                            animationDelay: `${tech.delay}s`,
                            transitionDelay: `${tech.delay + 0.5}s`,
                        } as React.CSSProperties}
                        title={tech.label}
                    >
                        {/* Glow ring behind the icon */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 blur-md"
                            style={{ background: tech.color, transform: "scale(1.3)" }}
                        />

                        {/* Main icon container */}
                        <div
                            className={`
                                relative ${sizeClasses[tech.size]} 
                                rounded-2xl flex items-center justify-center 
                                backdrop-blur-xl border border-white/20 
                                shadow-lg cursor-pointer
                                transition-all duration-500
                                group-hover/icon:scale-110 group-hover/icon:-translate-y-1
                                group-hover/icon:shadow-2xl
                            `}
                            style={{
                                background: tech.bgColor,
                                borderColor: `${tech.color}22`,
                                boxShadow: `0 4px 20px ${tech.color}15, 0 0 0 1px ${tech.color}10`,
                            }}
                        >
                            <i
                                className={`${tech.icon} transition-all duration-300 group-hover/icon:scale-125`}
                                style={{ color: tech.color }}
                            />

                            {/* Tooltip */}
                            <span
                                className="
                                    absolute -bottom-8 left-1/2 -translate-x-1/2 
                                    px-2.5 py-1 rounded-lg text-[11px] font-label-mono
                                    whitespace-nowrap opacity-0 pointer-events-none
                                    group-hover/icon:opacity-100
                                    transition-all duration-300
                                    bg-inverse-surface text-inverse-on-surface
                                    shadow-lg scale-90 group-hover/icon:scale-100
                                "
                            >
                                {tech.label}
                            </span>
                        </div>

                        {/* Particle dots */}
                        <div
                            className="absolute w-1.5 h-1.5 rounded-full tech-particle"
                            style={{
                                background: tech.color,
                                top: "-4px",
                                right: "-4px",
                                animationDelay: `${tech.delay + 1}s`,
                            }}
                        />
                        <div
                            className="absolute w-1 h-1 rounded-full tech-particle"
                            style={{
                                background: tech.color,
                                bottom: "-2px",
                                left: "0px",
                                animationDelay: `${tech.delay + 2}s`,
                            }}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default FloatingTechIcons;
