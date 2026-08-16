
import { sosialLinks } from "../../constant/SosialLinks"
import Heading from "../atoms/Heading"
import InfoCard from "../molecules/InfoCard"
import SosialIconRow from "../molecules/SosialIconRow"

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
            {/* Contact Info Card */}
            <InfoCard/>

            {/* Socials Card */}
            <div className="bg-surface-container-lowest/80 backdrop-blur-[12px] border border-outline-variant/40 rounded-xl p-8 shadow-sm">
                <h3 className="font-label-mono text-label-mono text-secondary mb-6 uppercase tracking-wider">Digital Footprint</h3>

                <div className="flex items-center gap-4 mt-6 hero-fade-in">
                    <SosialIconRow sosial={sosialLinks}/>
                </div>
            </div>
        </div>

        
    </div>
    
    </>
)

export default ContactSection