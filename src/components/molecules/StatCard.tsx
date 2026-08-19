
interface StatCardProps {
    value : string,
    label : string
}

const StatCard = ({value, label} : StatCardProps) => {

    return (
        <div className="glass-card rounded-2xl p-5 text-center group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[28px] font-bold text-primary mb-1" id="counter1" >{value}</div>
            <div className="text-[12px] text-on-surface-variant uppercase tracking-wider font-medium">{label}</div>
        </div>
    )
}

export default StatCard