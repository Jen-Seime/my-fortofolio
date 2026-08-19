import Icon from "../atoms/Icon"

interface SosialIcon {
    nama: string
    icon: string
    href?: string
}

interface SosialIconRowProps {
    sosial : SosialIcon[]
}

const SosialIconRow = ({sosial} : SosialIconRowProps) => {
    return (
        <div className="flex items-center gap-4 mt-6 hero-fade-in" style={{"--delay" : "0.65s"}}>
            <span className="w-8 h-px bg-outline-variant/40"></span>
            {sosial.map((item, index) => (
                <Icon key={index} icon={item.icon} href={item.href}></Icon>
            ))}
        </div>
    )
}

export default SosialIconRow