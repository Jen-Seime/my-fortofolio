
import { NavLink } from "react-router-dom";
import type { CertificationItem } from "../../types/cerfication";

interface CardCertificationProps {
    certification: CertificationItem;
}

const CardCertification = ({ certification }: CardCertificationProps) => {
     

   
    return (
        <div className="glass-panel rounded-xl p-stack-md glow-border group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start justify-between mb-stack-md">
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant/50 overflow-hidden">
                    
                    <img src={certification.issuer_logo.url} className="w-full h-full object-cover"/>
                    
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">{new Date(certification.issue_date).getFullYear()}</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2 group-hover:text-primary transition-colors">{certification.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md flex-grow">{certification.issuer}</p>
            <div className="flex items-center gap-2 mt-auto pt-stack-sm border-t border-outline-variant/30">
                
                    <NavLink  to={`/certification/${certification.slug}`}  className="font-label-mono text-label-mono text-primary hover:text-primary-container transition-colors flex items-center gap-1"   >
                        View Credential
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </NavLink>
            
            </div>
        </div>
    )
}

export default CardCertification