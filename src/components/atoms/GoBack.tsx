import type React from "react"

interface GoBackProps {
    href? : string;
}

const GoBack = ({href} : GoBackProps) => {
    return (
         <div className="mb-8 skill-fade-in" style={{"--delay" : "0.65s"} as React.CSSProperties}>
            <a  href={href}
                className="group inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-sm text-[14px]">
                <span
                    className="w-8 h-8 rounded-lg bg-surface-container group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-x-1">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                </span>
                Back to Projects
            </a>
        </div>
    )
}

export default GoBack