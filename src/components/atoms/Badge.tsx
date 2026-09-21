

type variantWarna =  "biru" | "abuabu"

interface BadgeProps {
    label : string
    dot ?: boolean
    icon?: string
    warna : variantWarna
    href?: string
    className?:string
 
    
}

const varianGaya : Record<variantWarna, string> = {
    biru : "bg-primary/8 text-primary border  border-outline-variant/20 ",
    abuabu : "bg-surface-container/80 border  border-outline-variant/20 glass-card text-on-surface-variant "
}


const Badge = ({label, dot=false , warna, icon, href,className} : BadgeProps) => {
    return (
        <div className={`inline-flex    items-center gap-2 w-fit   rounded-full px-4 py-2 mb-4 mt-2 hero-fade-in  ${varianGaya[warna]} ${href} ${className} `}
            style={{ "--delay": "0.1s" } as React.CSSProperties}>
            {dot &&
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
            }
            {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span> }
            
            


            
            <span className="font-label-mono text-label-mono ">{label}</span>
        </div>
    )
}

export default Badge