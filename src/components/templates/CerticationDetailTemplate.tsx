import { useParams } from "react-router-dom"
import Button from "../atoms/Button"
import GoBack from "../atoms/GoBack"
import type { CertificationItem } from "../../types/cerfication"
import { useEffect, useState } from "react"
import { getCertificationBySlug } from "../../services/cerfication.service"
import ReactMarkdown from "react-markdown"
import Badge from "../atoms/Badge"

const CertificationDetailTemplate = () => {

    
    const { slug } = useParams<{ slug: string }>()

    const [certificationBySlug, setCertificationBySlug] = useState<CertificationItem>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if(!slug) return

        const fetchCertificationBySlug = async () => {
            try {
                setIsLoading(true);
                const data = await getCertificationBySlug(slug);
                setCertificationBySlug(data);
            } catch (arr) {
                setError(arr)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCertificationBySlug()
    },[])

    
    return (
        <main className="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-24 md:py-32">
            <div className="max-w-4xl mx-auto">
                {/* Go Back */}
                <GoBack href="/certification" />

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-32 gap-4 skill-fade-in">
                        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                        <p className="text-[14px] text-on-surface-variant">Loading project...</p>
                    </div>
                )}

                {/* Error State */}
                {!isLoading && error && (
                    <div className="flex flex-col items-center justify-center py-32 gap-4 skill-fade-in">
                        <span className="material-symbols-outlined text-6xl text-error/50">error</span>
                        <p className="text-[15px] text-on-surface-variant text-center">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-[14px] font-semibold hover:opacity-90 transition-opacity"
                        >
                            Coba Lagi
                        </button>
                    </div>
                )}
            

                {/* Credential Card */}
                {!isLoading && !error && (
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:border-primary-container/30 relative">
                        {/* Decorative Top Bar */}
                        <div className="h-2 w-full bg-primary-container"></div>

                        <div className="p-8 md:p-12">

                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row gap-8 items-start mb-10 border-b border-surface-variant pb-10">
                                {/* Icon Placeholder */}
                                <div className="w-24 h-24 rounded-lg bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant relative overflow-hidden">
                                
                                    <img alt="" className="w-full h-full object-cover" src={certificationBySlug?.issuer_logo.url} />
                                
                                </div>

                                <div className="flex-col flex gap-2">
                                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                                        {certificationBySlug?.title}
                                    </h1>
                                    <p className="font-body-md text-body-md text-secondary flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">verified</span>
                                        {certificationBySlug?.issuer}
                                    </p>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="flex flex-col gap-1">
                                    <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Issue Date</span>
                                    <span className="font-body-md text-body-md text-on-surface">{certificationBySlug?.issue_date
                                        ? new Date(certificationBySlug.issue_date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })
                                        : '-'}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Credential ID</span>
                                    <span className="font-label-mono text-label-mono text-on-surface bg-surface-container-low px-2 py-1 rounded inline-block w-fit">{certificationBySlug?.credential_id}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-10">
                                <h2 className="font-body-sm text-body-sm text-outline uppercase tracking-wider mb-3 font-semibold pb-2 border-b border-outline-variant/20">
                                    About the Certification
                                </h2>
                                <div className="prose-content text-[15px] leading-relaxed text-on-surface-variant
                                    [&>p]:mb-4
                                    [&>strong]:font-semibold [&>strong]:text-on-surface
                                    [&>ol]:list-decimal [&>ol]:ml-5 [&>ol]:mb-4 [&>ol]:space-y-1
                                    [&>ul]:list-disc [&>ul]:ml-5 [&>ul]:mb-4 [&>ul]:space-y-1">
                                    <ReactMarkdown>
                                        {certificationBySlug?.description}
                                    </ReactMarkdown>

                                </div>
                            </div>

                        
                            <div className="mb-12">
                                <h2 className="font-body-sm text-body-sm text-outline uppercase tracking-wider mb-4 font-semibold">Skills Covered</h2>
                                <div className="flex flex-wrap gap-3">

                                    {certificationBySlug?.skills_covered.map((m) => (
                                        
                                        <span className="bg-surface-container-low text-secondary font-label-mono text-label-mono px-3 py-1.5 rounded border border-outline-variant">{m}</span>
                                    ))}
                                    
                                
                                    
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-surface-variant">
                            


                                <Button href={certificationBySlug?.verification_url} rounded="none" variant="primary" icon="workspace_premium" posisi="bawah" ukuran="sedang">
                                    Verify Credential
                                </Button>

                                <Button href={certificationBySlug?.pdf_file?.url} rounded="none" variant="putih" icon="download" posisi="bawah" ukuran="sedang">
                                    Download PDF
                                </Button>
                            
                                
                            </div>

                        </div>
                    </div>
                )}
                
            </div>

            

        </main>
    )
}

export default CertificationDetailTemplate