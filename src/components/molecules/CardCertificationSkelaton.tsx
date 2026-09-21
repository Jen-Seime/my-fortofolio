const CardCertificationSkeleton = () => {
    return (
        <div className="relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8">
                {/* Header: icon + badge skeleton */}
                <div className="flex items-start justify-between mb-stack-md">
                    <div className="skeleton-shimmer w-12 h-12 rounded" />
                    <div className="skeleton-shimmer h-5 w-16 rounded" />
                </div>

                {/* Title skeleton */}
                <div className="skeleton-shimmer h-6 w-4/5 rounded-md mb-2" />

                {/* Description skeleton (2 lines) */}
                <div className="space-y-1.5 mb-stack-md">
                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                    <div className="skeleton-shimmer h-4 w-3/5 rounded-md" />
                </div>

                {/* Footer: view credential link skeleton */}
                <div className="flex items-center gap-2 mt-auto pt-stack-sm border-t border-outline-variant/30">
                    <div className="skeleton-shimmer h-4 w-32 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default CardCertificationSkeleton;