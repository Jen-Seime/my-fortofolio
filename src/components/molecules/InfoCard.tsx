interface InfoCardProps {
    title?: string;
    email?: string;
    location?: string;
    availability?: string;
}

const InfoCard = ({
    title = "Direct Access",
    email = "nyomanadiputra@gmail.com",
    location = "Bali, Indonesia",
    availability = "Available for Freelance & Full-time"
}: InfoCardProps) => (
    <div className="bg-surface-container-lowest/80 backdrop-blur-[12px] border border-outline-variant/40 rounded-xl p-8 relative overflow-hidden group shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <h3 className="font-label-mono text-label-mono text-primary mb-6 uppercase tracking-wider">{title}</h3>
        
        <div className="space-y-4 relative z-10">
            {/* Email item */}
            <a 
                href={`mailto:${email}`}
                className="group/item relative flex items-start gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low/50 p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
            >
                <div className="absolute inset-y-0 left-0 w-1 bg-primary scale-y-0 origin-bottom transition-transform duration-300 group-hover/item:scale-y-100"></div>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 transition-all duration-300 group-hover/item:bg-primary group-hover/item:shadow-md group-hover/item:shadow-primary/25">
                    <span 
                        className="material-symbols-outlined text-primary transition-colors duration-300 group-hover/item:text-on-primary" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        mail
                    </span>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-1 transition-colors duration-300 group-hover/item:text-primary">Electronic Mail</p>
                    <p className="font-body-md text-body-md text-on-background break-all transition-colors duration-300 group-hover/item:text-primary">{email}</p>
                </div>
            </a>
            
            {/* Location item */}
            <div className="group/item relative flex items-start gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low/50 p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-tertiary/30 hover:bg-tertiary/5 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="absolute inset-y-0 left-0 w-1 bg-tertiary scale-y-0 origin-bottom transition-transform duration-300 group-hover/item:scale-y-100"></div>
                <div className="w-11 h-11 rounded-xl bg-tertiary/10 flex items-center justify-center shrink-0 border border-tertiary/20 transition-all duration-300 group-hover/item:bg-tertiary group-hover/item:shadow-md group-hover/item:shadow-tertiary/25">
                    <span 
                        className="material-symbols-outlined text-tertiary transition-colors duration-300 group-hover/item:text-on-tertiary" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        location_on
                    </span>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-1 transition-colors duration-300 group-hover/item:text-tertiary">Location</p>
                    <p className="font-body-md text-body-md text-on-background transition-colors duration-300 group-hover/item:text-tertiary">
                        {location}
                    </p>
                </div>
            </div>

            {/* Availability status badge item */}
            {availability && (
                <div className="group/item relative flex items-center gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low/50 p-4 overflow-hidden transition-all duration-300 hover:border-primary/20">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-0.5">Status</p>
                        <p className="font-body-md text-body-md text-on-background">{availability}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
)

export default InfoCard