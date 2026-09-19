const CardSkillSkeleton = () => {
    return (
        <div className="relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden">
            {/* Top accent bar skeleton */}
            <div className="h-1 skeleton-shimmer" />

            <div className="p-6 md:p-8">
                {/* Header skill skeleton */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        {/* Icon skeleton */}
                        <div className="skeleton-shimmer w-11 h-11 rounded-xl" />

                        {/* Title & subtitle skeleton */}
                        <div className="space-y-1.5">
                            <div className="skeleton-shimmer h-5 w-28 rounded-md" />
                            <div className="skeleton-shimmer h-3 w-12 rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Skill items list skeleton */}
                <div className="space-y-1">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center justify-between py-3 px-3 -mx-3 rounded-xl">
                            <div className="flex items-center gap-3">
                                {/* Icon skill */}
                                <div className="skeleton-shimmer w-9 h-9 rounded-xl" />
                                {/* Skill name */}
                                <div className="skeleton-shimmer h-4 w-24 rounded-md" />
                            </div>

                            {/* Level badge */}
                            <div className="skeleton-shimmer h-6 w-16 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSkillSkeleton;
