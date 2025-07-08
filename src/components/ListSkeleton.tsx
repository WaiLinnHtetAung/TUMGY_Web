
const ListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="col-span-1 shadow-lg rounded-lg overflow-hidden bg-slate-100 animate-pulse"
        >
          {/* Image block */}
          <div className="h-[270px] bg-slate-200 rounded-lg"></div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-5">
            {/* Title */}
            <div className="h-5 bg-slate-200 rounded w-11/12"></div>
            <div className="h-5 bg-slate-200 rounded w-3/4"></div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-slate-300 rounded-full"></div>
              <div className="h-4 w-24 bg-slate-200 rounded"></div>
            </div>

            {/* Content lines */}
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-11/12"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>

            {/* Button link placeholder */}
            <div className="h-4 w-24 bg-slate-300 rounded self-end mt-3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListSkeleton
