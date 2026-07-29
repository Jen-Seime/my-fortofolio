import { icons } from "lucide-react"

type variantWarna =  "biru" | "abuabu"

interface BadgeProps {
    label : string
    dot : boolean
    icon?: string
    warna : variantWarna
}

const varianGaya : Record<variantWarna, string> = {
    biru : "bg-primary/8 text-primary border  border-outline-variant/20",
    abuabu : "bg-surface-container/80 border  border-outline-variant/20 "
}


const Badge = ({label, dot=false , warna, icon} : BadgeProps) => {
    return (
        <div className={`inline-flex items-center gap-2 w-fit rounded-full px-4 py-2 mb-2 glass-card hero-fade-in ${varianGaya[warna]}`}
            style={{ "--delay": "0.1s" }}>
            {dot &&
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
            }
            {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span> }
            
            


            
            <span className="font-label-mono text-label-mono text-on-surface-variant">{label}</span>
        </div>
    )
}

export default Badge