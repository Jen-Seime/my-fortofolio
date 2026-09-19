import StatCard from "../molecules/StatCard"

interface StatItem {
    value: string;
    label: string;
}

interface StatCardRowProps {
    items?: StatItem[];
   
    className?: string;

}

const StatCardRow = ({ items = [], className }: StatCardRowProps) => {
    return (
        <div 
            className={`grid grid-cols-2 md:grid-cols-4 items-center gap-4 mt-20 hero-fade-in ${className || ""}`} 
            style={{ "--delay": "0.75s" } as React.CSSProperties}
        >
            {items.map((item, index) => (
                <StatCard key={index} value={item.value} label={item.label} />
            ))}
        </div>
    )
}

export default StatCardRow