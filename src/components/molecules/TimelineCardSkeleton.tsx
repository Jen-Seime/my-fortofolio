interface TimelineCardSkeletonProps {
  index?: number;
}

interface CardContentSkeletonProps {
  align: "left" | "right";
}

const CardContentSkeleton = ({ align }: CardContentSkeletonProps) => {
  const isRight = align === "right";

  return (
    <>
      {/* Top row: period + type badge */}
      <div
        className={`flex items-center gap-2 mb-3 ${
          isRight ? "justify-end" : "justify-start"
        }`}
      >
        <div className="skeleton-shimmer h-3.5 w-24 rounded-md" />
        <div className="skeleton-shimmer h-5 w-16 rounded-full" />
      </div>

      {/* Title & company */}
      <div className={`flex flex-col mb-3 ${isRight ? "items-end" : "items-start"}`}>
        <div className="skeleton-shimmer h-5 md:h-6 w-3/4 rounded-lg mb-1.5" />
        <div className="skeleton-shimmer h-3.5 w-2/5 rounded-md" />
      </div>

      {/* Description */}
      <div className={`flex flex-col gap-1.5 mb-4 ${isRight ? "items-end" : "items-start"}`}>
        <div className="skeleton-shimmer h-3.5 w-full rounded" />
        <div className="skeleton-shimmer h-3.5 w-11/12 rounded" />
        <div className="skeleton-shimmer h-3.5 w-4/5 rounded" />
      </div>

      {/* Achievements section */}
      <div className="mb-4">
        <div
          className={`flex items-center gap-2 mb-2.5 ${
            isRight ? "justify-end" : "justify-start"
          }`}
        >
          <div className="skeleton-shimmer w-3.5 h-3.5 rounded-full" />
          <div className="skeleton-shimmer h-3 w-20 rounded-md" />
        </div>
        <div className={`flex flex-col gap-2 ${isRight ? "items-end" : "items-start"}`}>
          <div className="skeleton-shimmer h-3 w-5/6 rounded" />
          <div className="skeleton-shimmer h-3 w-3/4 rounded" />
        </div>
      </div>

      {/* Tech stack pills */}
      <div
        className={`flex flex-wrap gap-1.5 ${
          isRight ? "justify-end" : "justify-start"
        }`}
      >
        <div className="skeleton-shimmer h-6 w-16 rounded-lg" />
        <div className="skeleton-shimmer h-6 w-20 rounded-lg" />
        <div className="skeleton-shimmer h-6 w-14 rounded-lg" />
      </div>
    </>
  );
};

const TimelineCardSkeleton = ({ index = 0 }: TimelineCardSkeletonProps) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="timeline-entry relative flex items-start gap-6 md:gap-0 w-full">
      {/* ── Desktop: left / right layout ── */}
      {/* Left content area (desktop) */}
      <div
        className={`hidden md:flex md:w-[calc(50%-28px)] ${
          isLeft ? "justify-end" : "justify-start order-3"
        }`}
      >
        <div
          className={`timeline-card relative max-w-md w-full glass-card rounded-2xl p-6 ${
            isLeft ? "text-right" : "text-left"
          }`}
        >
          <CardContentSkeleton align={isLeft ? "right" : "left"} />
        </div>
      </div>

      {/* ── Center timeline spine ── */}
      <div className="hidden md:flex flex-col items-center w-14 shrink-0 order-2">
        {/* Dot */}
        <div className="relative z-10 w-12 h-12 rounded-xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg timeline-dot">
          <div className="skeleton-shimmer w-5 h-5 rounded-md" />

          {/* Year badge placeholder beside dot */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 skeleton-shimmer h-5 w-14 rounded-full ${
              isLeft ? "left-full ml-4" : "right-full mr-4"
            }`}
          />
        </div>
      </div>

      {/* Right spacer (desktop) */}
      <div
        className={`hidden md:block md:w-[calc(50%-28px)] ${
          isLeft ? "order-3" : "order-1"
        }`}
      />

      {/* ── Mobile: single column layout ── */}
      <div className="md:hidden flex items-start gap-4 w-full">
        {/* Mobile timeline spine */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative z-10 w-10 h-10 rounded-xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg timeline-dot">
            <div className="skeleton-shimmer w-4 h-4 rounded-md" />
          </div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
        </div>

        {/* Mobile card */}
        <div className="timeline-card flex-1 glass-card rounded-2xl p-5 mb-6">
          <CardContentSkeleton align="left" />
        </div>
      </div>
    </div>
  );
};

export default TimelineCardSkeleton;
