import { LuCalendarCheck2, LuCircleArrowRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { shortenTitle } from '../../../utils/utils'

const AnnCard = ({announcement}: any) => {
  return (
    <div key={announcement.id} className="col-span-1 shadow-lg rounded-lg overflow-hidden bg-slate-100">
        <div className="h-[270px] border rounded-lg overflow-hidden group">
            <img className="w-full h-full group-hover:scale-110 duration-150" src={announcement.image} alt="" />
        </div>
        <div className="flex flex-col gap-3 p-5">
            <h3 className="font-semibold text-base lg:text-lg  text-slate-700 line-clamp-2 h-[60px]">{announcement.title}</h3>
            <div className="flex items-center gap-2">
                <LuCalendarCheck2 className="text-rose-800" />
                <span>{announcement.date} </span>
            </div>
            <p
                className="line-clamp-3 h-[75px]"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
            <Link to={`/announcements/${announcement.id}-${shortenTitle(announcement.title)}`} className="flex items-center justify-end gap-2 underline text-rose-700 hover:text-green-800 mt-1">Read detail <LuCircleArrowRight size={18} /></Link>
        </div>
    </div>
  )
}

export default AnnCard
