import type React from "react"
type buttonVariant = "primary"


interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void,
    variant: buttonVariant,
    positionIcon: "left" | "right",
    icon: React.ReactNode,
    className?: string
}

const variantStyle : Record<buttonVariant, string> = {
    primary : "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
}

const Button = ({children, onClick, className, variant= "primary", positionIcon= "left", icon}: ButtonProps) => {
    return (
        <button className={`cursor-pointer gap-2 text-[13px] px-5 py-2.5 rounded-full flex items-center font-medium transition-all duration-300 ease-in-out hover:shadow-lg ${className} ${variantStyle[variant]}`} onClick={onClick}>
            {icon && positionIcon == "right" && icon}
            {children}
            {icon && positionIcon == "left" && icon}
        </button>
    )
}

export default Button