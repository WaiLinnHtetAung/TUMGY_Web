import { LuCalendarCheck2, LuCircleArrowRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { shortenTitle } from '../../../utils/utils'

const ActivityCard = ({activity}: any) => {
  return (
    <div key={activity.id} className="col-span-1 shadow-lg rounded-lg overflow-hidden bg-slate-100">
        <div className="h-[270px] border rounded-lg overflow-hidden group">
            <img className="w-full h-full group-hover:scale-110 duration-150" src={activity.image} alt="" />
        </div>
        <div className="flex flex-col gap-3 p-5">
            <h3 className="font-semibold text-base lg:text-lg  text-slate-700 line-clamp-2 h-[60px]">{activity.title}</h3>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <LuCalendarCheck2 className="text-rose-800" />
                    <span>{activity.date} </span>
                </div>
            </div>
            <p
                className="line-clamp-3 h-[75px]"
                dangerouslySetInnerHTML={{ __html: activity.content }}
            />
            <Link to={`/our-activities/${activity.id}-${shortenTitle(activity.title)}`} className="flex items-center justify-end gap-2 underline text-rose-700 hover:text-green-800 mt-1">Read detail <LuCircleArrowRight size={18} /></Link>
        </div>
    </div>
  )
}

export default ActivityCard
