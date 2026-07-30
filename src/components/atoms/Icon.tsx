type varianWarna = "abuAbu";

interface IconbuttonProps {
    icon? : string,
    href?: string,
    warna? : varianWarna
}

const gayaWarna : Record<varianWarna, string> = {
    abuAbu : "bg-surface-container hover:bg-primary/10 border border-outline-variant/20 text-on-surface-variant hover:text-primary"
}

const Iconbutton = ({icon, href, warna="abuAbu"} : IconbuttonProps) => {
    return (
        <a className={`w-10 h-10 rounded-xl  flex items-center justify-center  transition-all duration-300 hover:-translate-y-1 ${gayaWarna[warna]}`} href={href}>
            <i className={` ${icon} text-[18px]`}></i>
        </a>
    )
}

export default Iconbutton