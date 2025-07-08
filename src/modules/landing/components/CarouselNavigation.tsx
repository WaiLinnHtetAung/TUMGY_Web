import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const CarouselNavigation = ({swiperRef}:any) => {
  return (
    <div className="absolute top-1/2 left-0 right-0 z-[99] flex justify-between px-10">
      <button className="p-3 rounded-full w-10 h-10 flex justify-center items-center bg-slate-300" onClick={() => swiperRef.current.slidePrev()}>
          <LuChevronLeft size={24} />
        </button>
        <button className="p-3 rounded-full w-10 h-10 flex justify-center items-center bg-slate-300" onClick={() => swiperRef.current.slideNext()}>
          <LuChevronRight size={24} />
        </button>
    </div>
  )
}

export default CarouselNavigation
