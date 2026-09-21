import StatCard from "../molecules/StatCard";

interface StatItem {
    value: string;
    label: string;
    icon?: string;
}

interface StatCardRowProps {
    items?: StatItem[];
    className?: string;
}

const StatCardRow = ({ items = [], className }: StatCardRowProps) => {
    return (
        <div
            className={`hero-fade-in ${className || ""}`}
            style={{ "--delay": "0.75s" } as React.CSSProperties}
        >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
                <div
                    className="h-px flex-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(0,64,224,0.15))" }}
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant/40">
                    By the numbers
                </span>
                <div
                    className="h-px flex-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, rgba(0,64,224,0.15), transparent)" }}
                />
            </div>

            {/* Cards grid */}
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-4`}
            >
                {items.map((item, index) => (
                    <StatCard
                        key={index}
                        value={item.value}
                        label={item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatCardRow;