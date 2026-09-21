import CardCertification from "../molecules/CardCertification"
import SectionHedaer from "../molecules/SectionHeader"
import type { CertificationItem, PaginationMeta } from "../../types/cerfication";
import Pagination from "./Pagination";
import CardCertificationSkelaton from "../molecules/CardCertificationSkelaton";


interface CertificationProps {
    data : CertificationItem[];
    meta? : PaginationMeta;
    isLoading? : boolean;
    currentPage? : number;
    setCurrentPage? : (page : number) => void;
}

const CertificationSection = ({data,meta,isLoading,setCurrentPage}:CertificationProps) => {
    return (
        <>
            <SectionHedaer
                labelBadge="Credentials"
                icon="workspace_premium"
                deskripsi="Koleksi kredensial profesional pilihan yang menunjukkan komitmen untuk terus belajar dan menguasai teknologi web modern."
                posisi="kiri"
            >
                <span>Certifications</span>
            </SectionHedaer>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {isLoading ? (
                    <>
                    {[1,2,3].map((m) => (
                        <CardCertificationSkelaton key={m}/>
                    ))}
                     
                    </>
                ): data.length === 0 ? (
                    <div className=""></div>

                ) : (
                    <>
                        {data.map((certification) => (
                            <CardCertification key={certification.id} certification={certification} />
                        ))}
                    </>
                )}
              

            </div>

             {/* Pagination dari meta API */}
            <Pagination 
                currentPage={meta?.current_page || 1}
                lastPage={meta?.last_page || 1}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    )
}

export default CertificationSection