
const AboutSectionSkeleton = () => {
    return (
        <>
            {/* About Header Skeleton */}
            <section className="about-fade-in">
                {/* Badge skeleton */}
                <div className="skeleton-shimmer inline-flex items-center gap-2 w-fit rounded-full px-4 py-2 mb-4 mt-2 h-8 w-28" />

                {/* Title skeleton */}
                <div className="skeleton-shimmer h-10 w-64 rounded-xl mb-2" />
            </section>

            {/* Card skeleton */}
            <section>
                <div className="relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden">
                    {/* Top gradient bar skeleton */}
                    <div className="h-1 skeleton-shimmer" />

                    <div className="flex flex-col md:flex-row gap-0 items-stretch">
                        {/* LEFT: Profile Column Skeleton */}
                        <div className="relative md:w-72 lg:w-80 shrink-0 flex flex-col">
                            <div className="relative group p-6 md:p-8 flex flex-col gap-5 z-10">

                                {/* Avatar skeleton */}
                                <div className="relative self-center md:self-start">
                                    <div className="skeleton-shimmer w-full aspect-square rounded-2xl" style={{ width: "180px", height: "180px" }} />
                                </div>

                                {/* Name & Role skeleton */}
                                <div className="flex flex-col gap-2">
                                    <div className="skeleton-shimmer h-7 w-40 rounded-lg" />
                                    <div className="skeleton-shimmer h-6 w-24 rounded-full" />
                                </div>

                                {/* Info chips skeleton */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/15">
                                        <div className="skeleton-shimmer w-4 h-4 rounded-md shrink-0" />
                                        <div className="skeleton-shimmer h-3 w-20 rounded-md" />
                                    </div>
                                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/15">
                                        <div className="skeleton-shimmer w-4 h-4 rounded-md shrink-0" />
                                        <div className="skeleton-shimmer h-3 w-36 rounded-md" />
                                    </div>
                                </div>

                                {/* Social icons skeleton */}
                                <div className="flex gap-5">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="skeleton-shimmer w-10 h-10 rounded-xl"
                                        />
                                    ))}
                                </div>

                                {/* Vertical divider */}
                                <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent" />
                            </div>
                        </div>

                        {/* RIGHT: Bio Content Skeleton */}
                        <div className="flex-1 min-w-0 p-6 md:p-8 md:pl-10 flex flex-col gap-6">

                            {/* Section label skeleton */}
                            <div className="flex items-center gap-3">
                                <div className="skeleton-shimmer w-8 h-8 rounded-lg shrink-0" />
                                <div className="skeleton-shimmer h-px flex-1 opacity-30 rounded-full" style={{ height: "1px" }} />
                                <div className="skeleton-shimmer h-3 w-8 rounded-md" />
                            </div>

                            {/* Bio text lines skeleton */}
                            <div className="flex flex-col gap-4">
                                {/* Paragraph 1 */}
                                <div className="flex flex-col gap-2">
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-5/6 rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-4/5 rounded-md" />
                                </div>

                                {/* Paragraph 2 */}
                                <div className="flex flex-col gap-2 pt-2">
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-11/12 rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-3/4 rounded-md" />
                                </div>

                                {/* Paragraph 3 */}
                                <div className="flex flex-col gap-2 pt-2">
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-full rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-5/6 rounded-md" />
                                    <div className="skeleton-shimmer h-4 w-2/3 rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSectionSkeleton
