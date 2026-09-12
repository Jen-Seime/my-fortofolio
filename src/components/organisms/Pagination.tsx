interface PaginationProps {
    currentPage?: number
    lastPage?: number
    onPageChange?: (page: number) => void
}

const Pagination = ({ currentPage = 1, lastPage = 1, onPageChange }: PaginationProps) => {
    if (lastPage <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            {/* Tombol Previous */}
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => onPageChange?.(currentPage - 1)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border text-sm transition-all ${
                    currentPage <= 1
                        ? "border-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed opacity-50"
                        : "border-outline-variant/30 text-on-surface hover:bg-primary/10 hover:text-primary hover:border-primary/30 cursor-pointer"
                }`}
                aria-label="Previous page"
            >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>

            {/* Angka Halaman */}
            {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => {
                const isActive = p === currentPage;
                return (
                    <button
                        key={p}
                        type="button"
                        onClick={() => onPageChange?.(p)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                            isActive
                                ? "bg-primary text-on-primary font-bold shadow-sm"
                                : "border border-outline-variant/30 text-on-surface hover:bg-primary/10 hover:text-primary"
                        }`}
                    >
                        {p}
                    </button>
                );
            })}

            {/* Tombol Next */}
            <button
                type="button"
                disabled={currentPage >= lastPage}
                onClick={() => onPageChange?.(currentPage + 1)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border text-sm transition-all ${
                    currentPage >= lastPage
                        ? "border-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed opacity-50"
                        : "border-outline-variant/30 text-on-surface hover:bg-primary/10 hover:text-primary hover:border-primary/30 cursor-pointer"
                }`}
                aria-label="Next page"
            >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
        </div>
    );
};

export default Pagination