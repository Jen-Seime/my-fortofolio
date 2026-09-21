import type { ReactNode } from "react";
import Badge from "../atoms/Badge";

interface sectionHedaerProps {
    icon : string
    children : ReactNode
    deskripsi : string
    posisi : "kiri" | "tengah"
    labelBadge: string
}

const SectionHedaer = ({icon, children, deskripsi, posisi, labelBadge} : sectionHedaerProps) => {

    if(posisi == "tengah") {
        return (
            <header className="text-center mb-16 max-w-2xl w-full ">
                <Badge icon={icon} warna="biru" label={labelBadge} />
                
                <h2 className="font-headline-xl text-[clamp(28px,5vw,44px)] leading-[1.15] text-on-surface font-bold tracking-tight mb-4">
                    {children}
                </h2>
                <p className="font-body-md text-[15px] md:text-body-md text-on-surface-variant max-w-lg mx-auto">
                    {deskripsi}
                </p>
            </header>
        )

    } else {
        return (
             <header className="text-center mb-16 md:text-left">
                <Badge icon={icon} warna="biru" label={labelBadge} />
                
                <h2 className="font-headline-xl text-[clamp(28px,5vw,44px)] leading-[1.15] text-on-surface font-bold tracking-tight mb-4">
                    {children}
                </h2>
                <p className="font-body-md text-[15px] md:text-body-md text-on-surface-variant max-w-lg">
                    {deskripsi}
                </p>
            </header>
        )
    }
    
}

export default SectionHedaer