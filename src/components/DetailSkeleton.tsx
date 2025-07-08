import { LuCalendarCheck2 } from 'react-icons/lu'

const DetailSkeleton = () => {
  return (
    <div>
      {/* Title skeleton */}
      <div className="h-8 w-3/4 bg-slate-200 rounded mb-5 animate-pulse"></div>

      {/* Date skeleton */}
      <div className="flex items-center gap-2">
        <LuCalendarCheck2 className="text-rose-800" size={24} />
        <div className="h-5 w-40 bg-slate-200 rounded animate-pulse"></div>
      </div>

      {/* Image skeleton */}
      <div className="flex justify-center mt-5">
        <div className="w-[600px] h-[300px] bg-slate-200 border animate-pulse rounded"></div>
      </div>

      {/* Content skeleton */}
      <div className="mt-10 space-y-4 text-lg">
        <div className="h-5 bg-slate-200 rounded w-full animate-pulse"></div>
        <div className="h-5 bg-slate-200 rounded w-11/12 animate-pulse"></div>
        <div className="h-5 bg-slate-200 rounded w-10/12 animate-pulse"></div>
        <div className="h-5 bg-slate-200 rounded w-9/12 animate-pulse"></div>
      </div>

      {/* PDF viewer skeleton */}
      <div className="mt-10 w-full h-[800px] bg-slate-200 border animate-pulse rounded"></div>
    </div>
  )
}

export default DetailSkeleton
