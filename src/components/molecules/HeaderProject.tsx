import Button from "../atoms/Button"

interface HeaderProjectProps {
    className?: string
    children?: React.ReactNode
}

const HeaderProject = ({ className, children }: HeaderProjectProps) => {
    return (
        <>
            <div className={`flex justify-between items-center md:flex-row  md:justify-between md:items-center  mb-13 gap-6  ${className}  `}>

                {/* Heading
                <div className=" flex flex-col items-center text-center md:items-start md:text-start">

                    <Badge  warna="biru" icon="work" label="Portofolio"/>

                    
                    <Heading as={"h2"}>
                        Selected <span className=" text-primary">{judul}</span>
                    </Heading>

                    {deskripsi && (
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" } as React.CSSProperties}>
                            {deskripsi}
                        </p>
                    )}
                </div> */}

                {children}

                {/* Button all */}
                <Button to="/project"   icon="arrow_forward" variant="putih" ukuran="kecil"  posisi="kiri">View All</Button>
            </div>
        </>
    )
}

export default HeaderProject