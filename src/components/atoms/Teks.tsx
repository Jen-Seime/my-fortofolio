
interface TeksProps {
    deskripsi?: string
}

const Teks = ({ deskripsi }: TeksProps) => (
    <>
        <p className=" hidden md:block font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" } as React.CSSProperties}>
            {deskripsi}
        </p>
    </>
)

export default Teks