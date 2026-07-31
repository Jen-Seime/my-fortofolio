import type React from "react"
type buttonVariant = "primary" | "putih" | "biruBening"
type ukuranButton = "kecil" | "sedang"
type variantHoverButton = "kiri" | "bawah"


interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void,
    variant: buttonVariant,
    ukuran: ukuranButton,
    positionIcon?: "left" | "right",
    posisi : variantHoverButton 
    icon?: string,
    className?: string
}

const variantStyle : Record<buttonVariant, string> = {
    primary : "bg-primary text-on-primary hover:shadow-lg  hover:shadow-primary/30 transition-all duration-300",
    putih : "bg-surface border border-outline-variant/30 text-on-surface hover:border-primary/30 hover:bg-primary/5",
    biruBening : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary"
}

const variantButton : Record<ukuranButton, string> = {
    kecil : "gap-2 text-[13px]  group px-5 py-2.5 rounded-full hover:shadow-lg",
    sedang : "font-semibold group  text-[14px] px-5 py-3 md:px-7 md:py-3.5 rounded-2xl shadow-lg  hover:shadow-xl  active:scale-[0.97] gap-2 overflow-hidden"

}

const variantPosisiHover : Record<variantHoverButton, string> = {
    kiri : "group-hover:translate-x-1 ",
    bawah: "group-hover:translate-y-1 "
}

const Button = ({children, onClick, className, ukuran = "kecil", posisi, variant= "primary", positionIcon= "left", icon}: ButtonProps) => {
    return (
        <button className={`cursor-pointer  flex items-center font-medium transition-all duration-300 ease-in-out  ${variantButton[ukuran]}   ${variantStyle[variant]} ${className}`} onClick={onClick}>
            {icon && positionIcon == "right" &&  <span className={`material-symbols-outlined text-[18px] relative z-10 ${variantPosisiHover[posisi]}  transition-transform duration-300`}>{icon}</span>}
            {children}
            {icon && positionIcon == "left" && <span className={`material-symbols-outlined text-[18px] relative z-10 transition-transform ${variantPosisiHover[posisi]} duration-300`}>{icon}</span>}
        </button>
    )
}

export default Button