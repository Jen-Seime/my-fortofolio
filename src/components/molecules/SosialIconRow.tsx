import type { ProfilItem } from "../../types/profil";
import Icon from "../atoms/Icon"

interface SosialIcon {
    nama: string
    icon: string
    href?: string
}

interface SosialIconRowProps {
    data?: ProfilItem;

}

const SosialIconRow = ({data} : SosialIconRowProps) => {

    const socialItems : SosialIcon[] = [
        {nama:"github", icon:"fa-brands fa-github", href:data?.github},
        {nama:"linkedin", icon:"fa-brands fa-linkedin-in", href:data?.linkedin},
        {nama:"instagram", icon:"fa-brands fa-instagram", href:data?.instagram},
        {nama:"email", icon:"fa-solid fa-envelope", href:`mailto:${data?.email}`}


        
       
    ]
    return (
        <div className="flex items-center gap-4 mt-6 hero-fade-in" style={{"--delay" : "0.65s"} as React.CSSProperties}>
            <span className="w-8 h-px bg-outline-variant/40"></span>
            {socialItems.map((item, index) => (
                <Icon key={index} icon={item.icon} href={item.href}></Icon>
            ))}
        </div>
    )
}

export default SosialIconRow