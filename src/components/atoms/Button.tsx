import type React from "react"
import { Link } from "react-router-dom"

type buttonVariant = "primary" | "putih" | "biruBening"
type ukuranButton = "kecil" | "sedang"
type variantHoverButton = "kiri" | "bawah"

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void,
    variant: buttonVariant,
    ukuran: ukuranButton,
    positionIcon?: "left" | "right",
    posisi: variantHoverButton
    icon?: string,
    className?: string,
    href?: string
    to?: string
    rounded: "radius" | "none"
}

const varianRounded = {
    radius: "rounded-2xl",
    none: ""
}

const variantStyle: Record<buttonVariant, string> = {
    primary:
        "bg-primary text-on-primary " +
        "hover:brightness-110 hover:shadow-[0_0_20px_4px_rgba(var(--color-primary-rgb,99,102,241),0.45)] " +
        "hover:scale-[1.03] active:scale-[0.97] " +
        "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent " +
        "before:transition-transform before:duration-500 hover:before:translate-x-full overflow-hidden relative " +
        "transition-all duration-300",

    putih:
        "bg-surface border border-outline-variant/30 text-on-surface " +
        "hover:border-primary/50 hover:bg-primary/5 hover:text-primary " +
        "hover:shadow-[0_4px_16px_0px_rgba(var(--color-primary-rgb,99,102,241),0.15)] " +
        "hover:scale-[1.03] active:scale-[0.97] " +
        "transition-all duration-300",

    biruBening:
        "bg-primary/10 text-primary border border-primary/20 " +
        "hover:bg-primary hover:text-on-primary " +
        "hover:shadow-[0_0_18px_3px_rgba(var(--color-primary-rgb,99,102,241),0.4)] " +
        "hover:scale-[1.03] active:scale-[0.97] " +
        "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent " +
        "before:transition-transform before:duration-500 hover:before:translate-x-full overflow-hidden relative " +
        "transition-all duration-300",
}

const variantButton: Record<ukuranButton, string> = {
    kecil: "gap-2 text-[13px] group px-5 py-2.5 rounded-full",
    sedang: "font-semibold group text-[14px] px-5 py-3 md:px-7 md:py-3.5 shadow-lg gap-2",
}

const variantPosisiHover: Record<variantHoverButton, string> = {
    kiri: "group-hover:translate-x-1.5 group-hover:scale-110",
    bawah: "group-hover:translate-y-1.5 group-hover:scale-110",
}

const sharedClass = (ukuran: ukuranButton, variant: buttonVariant, rounded: "radius" | "none", className?: string) =>
    `cursor-pointer flex items-center font-medium transition-all duration-300 ease-in-out ${variantButton[ukuran]} ${variantStyle[variant]} ${varianRounded[rounded]} ${className ?? ""}`

const IconSpan = ({ icon, posisi }: { icon: string; posisi: variantHoverButton }) => (
    <span
        className={`material-symbols-outlined text-[18px] relative z-10 transition-all duration-300 ${variantPosisiHover[posisi]}`}
    >
        {icon}
    </span>
)

const Button = ({
    children,
    onClick,
    className,
    ukuran = "kecil",
    posisi,
    variant = "primary",
    positionIcon = "left",
    icon,
    href,
    to,
    rounded = "radius",
}: ButtonProps) => {
    const cls = sharedClass(ukuran, variant, rounded, className)

    const content = (
        <>
            {icon && positionIcon === "right" && <IconSpan icon={icon} posisi={posisi} />}
            {children}
            {icon && positionIcon === "left" && <IconSpan icon={icon} posisi={posisi} />}
        </>
    )

    if (to) {
        return (
            <Link to={to} className={cls} onClick={onClick}>
                {content}
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noreferrer" className={cls} onClick={onClick}>
            {content}
        </a>
    )
}

export default Button