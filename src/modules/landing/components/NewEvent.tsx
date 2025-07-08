import { Link } from "react-router-dom"
import Container from "../../../components/Container"
import { LuArrowUpRight, LuCalendarCheck2, LuCircleArrowRight } from "react-icons/lu"
import SampleImg from '../../../assets/images/tu-magway.jpg'
import { newsEventsTypes } from "../../../types/landingPageTypes"
import ErrorPage from "../../../components/ErrorPage"
import SectionLoading from "../../../components/SectionLoading"
import { shortenTitle } from "../../../utils/utils"

const NewEvent: React.FC<newsEventsTypes> = ({ news_events, error, isLoading }) => {
  return (
    <Container>
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-slate-700">Latest News & Events</h2>
            <Link to="/news-events" className="flex items-center gap-3 underline text-rose-700 hover:text-green-800 font-bold">View All <LuArrowUpRight size={20} /></Link>
        </div>
        { error && (
            <ErrorPage />
        )}

        { isLoading && (
            <SectionLoading />
        ) }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(news_events && news_events.length > 0) && news_events.map((news_event: any) => (
                <div key={news_event.id} className="col-span-1 border-b pb-5 flex gap-5 items-center w-full">
                    <img className=" w-[30%] h-32 object-cover rounded-lg" src={news_event.image} alt="" />
                    <div className="w-[70%] flex flex-col gap-3 pe-3 lg:pe-10">
                        <h3 className="font-bold text-lg lg:text-xl  text-slate-700 line-clamp-1">{news_event.title}</h3>
                        <div className="flex flex-col lg:flex-row justify-between ">
                            <div className="flex items-center gap-2">
                                <LuCalendarCheck2 className="text-rose-800" />
                                <span>{news_event.date}</span>
                            </div>

                        <div>
                            <span className={`${news_event.type === 'News' ? 'bg-amber-600' : 'bg-green-800'} text-white rounded-xl px-2 inline-flex items-center text-sm`}>{news_event.type}</span>
                        </div>
                        </div>

                        <Link to={`/news-events/${news_event.id}-${shortenTitle(news_event.title)}`} className="flex items-center gap-2 underline text-rose-700 hover:text-green-800">Read detail <LuCircleArrowRight size={18} /></Link>
                    
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default NewEvent
