
import Heading from "../atoms/Heading"
import InfoCard from "../molecules/InfoCard"

const ContactSection = () => (
    <>
    <header className="mb-stack-lg text-center md:text-left">
        
        <Heading as={"h2"}>
            Initialize <span className=" text-primary">Connection.</span>
        </Heading>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" style={{ "--delay": "0.1s" }}>
            Punya ide proyek yang udah jelas atau masih pengen ngobrolin kemungkinan-kemungkinan, kotak masuk saya selalu kebuka. Yuk bahas arsitektur, kode, sampai bikin pengalaman digital yang scalable.
        </p>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

        {/* Left Column: Context & Details (Col Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
            <InfoCard/>
        </div>
    </div>
    
    </>
)

export default ContactSection