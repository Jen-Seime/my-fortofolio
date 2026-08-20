import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    title?: string
    type?: string
    placeholder?: string
    error?: string
}

const Input = ({
    name,
    title,
    type = "text",
    placeholder,
    error,
    className = "",
    ...props
}: InputProps) => (
    
    <div className="space-y-2">
        {title && (
            <label 
                htmlFor={name} 
                className="font-label-mono text-label-mono text-on-surface block"
            >
                {title}
            </label>
        )}
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-full bg-surface/50 border border-outline-variant/60 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${className}`}
            {...props}
        />
        {error && (
            <span className="text-red-500 font-label-mono text-sm block">
                {error}
            </span>
        )}
    </div>
)

export default Input
