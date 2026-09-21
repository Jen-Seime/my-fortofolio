import { useEffect, useState } from "react";
import type { CertificationItem, PaginationMeta } from "../../types/cerfication";
import CertificationSection from "../organisms/CertificationSection";
import { getCertification } from "../../services/cerfication.service";

const CertificationTemplate = () => {

    const [meta, setMeta] = useState<PaginationMeta | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [certification, setCertification] = useState<CertificationItem[]>([]);

    useEffect(() => {
        const fetchCertification = async () => {
            setLoading(true);
            try {
                const response = await getCertification(currentPage);
                setCertification(response.data);
                setMeta(response.meta);
            } catch (error) {
                console.error("Error fetching certifications:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCertification();
    }, [currentPage]);


    return (
        <main className="relative z-10 pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <CertificationSection 
                data={certification}
                meta={meta}
                isLoading={loading}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            ></CertificationSection>
            

        </main>
    )
}

export default CertificationTemplate;