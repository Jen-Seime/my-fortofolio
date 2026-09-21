import Button from "../atoms/Button"

interface HeaderProjectProps {
    className?: string
    children?: React.ReactNode
}

const HeaderProject = ({ className, children }: HeaderProjectProps) => {
    return (
        <>
            <div className={`flex justify-between items-center md:flex-row  md:justify-between md:items-center  mb-13 gap-6  ${className}  `}>

                

                {children}

                {/* Button all */}
                <Button to="/project"   icon="arrow_forward" variant="putih" ukuran="kecil"  posisi="kiri">View All</Button>
            </div>
        </>
    )
}

export default HeaderProject