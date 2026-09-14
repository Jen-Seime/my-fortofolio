import { useNavigate } from "react-router-dom"

interface CardProjectProps {
    img?: string | null
    judul: string
    deskripsi: string
    stack?: string[]
    code?: string | null
    liveDemo?: string | null
    slug?: string
}

// Membersihkan tag markdown sederhana seperti ###, **, *, link agar rapi di preview card
const formatDescriptionPreview = (text: string) => {
    if (!text) return "";
    return text
        .replace(/#{1,6}\s?/g, "") // Hapus tanda heading ###
        .replace(/(\*\*|__)(.*?)\1/g, "$2") // Hapus bold **teks**
        .replace(/(\*|_)(.*?)\1/g, "$2") // Hapus italic *teks*
        .replace(/`([^`]+)`/g, "$1") // Hapus inline code `teks`
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Hapus syntax link [nama](url)
        .replace(/\n+/g, " ") // Ganti baris baru jadi spasi
        .trim();
};

// Memastikan URL valid untuk link eksternal
const formatExternalUrl = (url?: string | null, isGithub = false) => {
    if (!url) return null;
    const trimmed = url.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
        return trimmed;
    }
    if (isGithub && !trimmed.includes("/")) {
        return `https://github.com/${trimmed}`;
    }
    return `https://${trimmed}`;
};

const CardProject = ({
    img, 
    judul, 
    deskripsi, 
    stack = [], 
    liveDemo, 
    code,
    slug
}: CardProjectProps) => {
    const navigate = useNavigate();
    const formattedCodeUrl = formatExternalUrl(code, true);
    const formattedLiveUrl = formatExternalUrl(liveDemo);
    const cleanDescription = formatDescriptionPreview(deskripsi);

    const handleCardClick = () => {
        navigate(slug ? `/project/${slug}` : "/detail");
    };

    return (
        <div onClick={handleCardClick} className="h-full flex flex-col cursor-pointer">
            <div className="h-full flex flex-col rounded-xl glass-panel overflow-hidden group glow-effect hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                {/* img container */}
                <div className="h-48 w-full opacity-90 overflow-hidden bg-surface-container-high shrink-0 relative">
                    <img 
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" 
                        src={img || "/img/gambar1.jpg"} 
                        alt={judul}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "/img/gambar1.jpg";
                        }}
                    />
                </div>

                <div className="p-stack-md flex flex-col flex-grow">
                    {/* judul */}
                    <h3 className="font-headline-lg text-headline-sm-mobile text-on-surface mb-2 line-clamp-1">
                        {judul}
                    </h3>

                    {/* deskripsi singkat */}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md line-clamp-2">
                        {cleanDescription}
                    </p>

                    {/* stack */}
                    <div className="flex flex-wrap gap-2 mb-stack-md">
                        {stack && stack.length > 0 ? (
                            stack.map((m, index) => (
                                <span key={index} className="text-[10px] font-semibold font-label-mono uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                                    {m}
                                </span>
                            ))
                        ) : null}
                    </div>
                   
                    {/* aksi link */}
                    <div className="mt-auto flex justify-between items-center border-t pt-stack-sm border-outline-variant/30">
                        {formattedCodeUrl ? (
                            <a 
                                href={formattedCodeUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} 
                                className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant transition-all duration-300 hover:text-primary"
                            >
                                <span className="material-symbols-outlined text-[20px]">code</span>Code
                            </a>
                        ) : (
                            <span 
                                className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant/40 cursor-not-allowed select-none"
                                title="Repository tidak tersedia"
                            >
                                <span className="material-symbols-outlined text-[20px]">code</span>Code
                            </span>
                        )}

                        {formattedLiveUrl ? (
                            <a 
                                href={formattedLiveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} 
                                className="flex items-center font-label-mono p-2 gap-2 text-body-sm border bg-primary/10 text-primary border-primary/30 transition-all duration-300 rounded-xl hover:text-on-primary hover:bg-primary"
                            > 
                                <span className="material-symbols-outlined text-[20px]">open_in_new</span>Live Demo
                            </a>
                        ) : (
                            <span 
                                className="flex items-center font-label-mono p-2 gap-2 text-body-sm border border-outline-variant/20 text-on-surface-variant/40 rounded-xl cursor-not-allowed select-none opacity-50"
                                title="Live Demo belum tersedia"
                            > 
                                <span className="material-symbols-outlined text-[20px]">open_in_new</span>Live Demo
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProject
