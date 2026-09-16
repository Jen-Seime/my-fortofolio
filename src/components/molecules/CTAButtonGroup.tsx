import Button from "../atoms/Button"

interface CTAButtonGroupProps {
    
    cv?: string,
    to?: string
}

const CTAButtonGroup = ({to, cv}: CTAButtonGroupProps) => {
    return (
        <div className="flex flex-row  md:flex-row  gap-3 mt-8 hero-fade-in" style={{"--delay": "0.55s"} as React.CSSProperties}>
            <Button to={to} posisi="kiri" ukuran="sedang"  variant="primary" positionIcon="left" icon="arrow_forward" className="md:px-7 md:py-3.5 font-semibold text-[14px]">Vews Projects</Button>
            <Button href={cv} posisi="bawah" ukuran="sedang"  variant="putih" positionIcon="left" icon="download" className="md:px-7 md:py-3.5 font-semibold text-[14px]">Download CV</Button>
        </div>
    )
}

export default CTAButtonGroup