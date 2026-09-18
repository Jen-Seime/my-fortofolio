
const EducationCardSkeleton = () => {
  return (
    <div  className="relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden">
      {/* Top accent bar skeleton */}
      <div className="h-1 skeleton-shimmer" />

      <div className="p-6 md:p-8">
        {/* ── Header Row ── */}
        <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Icon circle skeleton */}
            <div className="relative shrink-0 self-start">
              <div className="skeleton-shimmer w-14 h-14 rounded-2xl" />
            </div>

            {/* IPK Mobile Badge skeleton */}
            <div className="shrink-0 self-start md:hidden">
              <div className="skeleton-shimmer w-16 h-12 rounded-2xl" />
            </div>
          </div>

          {/* Title & Info Block skeleton */}
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {/* Degree title */}
              <div className="skeleton-shimmer h-6 md:h-7 w-48 md:w-64 rounded-lg" />
              {/* Status badge */}
              <div className="skeleton-shimmer h-5 w-24 rounded-full" />
            </div>

            {/* Institution & Year */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="skeleton-shimmer h-4 w-36 rounded-md" />
              <div className="skeleton-shimmer h-4 w-28 rounded-md" />
            </div>
          </div>

          {/* GPA Badge Desktop skeleton */}
          <div className="shrink-0 self-start hidden md:block">
            <div className="skeleton-shimmer w-20 h-20 rounded-2xl" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent mb-6" />

        {/* ── Description skeleton ── */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="skeleton-shimmer h-3.5 w-full rounded" />
          <div className="skeleton-shimmer h-3.5 w-11/12 rounded" />
          <div className="skeleton-shimmer h-3.5 w-3/4 rounded" />
        </div>

        {/* ── Relevant Coursework skeleton ── */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="skeleton-shimmer w-4 h-4 rounded-md shrink-0" />
            <div className="skeleton-shimmer h-3 w-32 rounded-md" />
            <div className="flex-1 h-px bg-gradient-to-r from-outline-variant/20 to-transparent" />
          </div>

          {/* Coursework chips */}
          <div className="flex flex-wrap gap-2">
            <div className="skeleton-shimmer h-7 w-24 rounded-xl" />
            <div className="skeleton-shimmer h-7 w-28 rounded-xl" />
            <div className="skeleton-shimmer h-7 w-20 rounded-xl" />
            <div className="skeleton-shimmer h-7 w-32 rounded-xl" />
            <div className="skeleton-shimmer h-7 w-24 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCardSkeleton;
