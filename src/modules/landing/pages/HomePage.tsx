import Carousel from '../components/Carousel'
import AboutUni from '../components/AboutUni'
import Statistic from '../components/Statistic'
import RectorMessage from '../components/RectorMessage'
import UniBanner from '../components/UniBanner'
import NewEvent from '../components/NewEvent'
import Announcement from '../components/Announcement'
import useSWR from 'swr'
import { fetcher } from '../../../services/fetcher'

const HomePage = () => {
  const {data: sliders, error: slider_error, isLoading: slider_isLoading} = useSWR(import.meta.env.VITE_API_URL + 'image-sliders' , fetcher);
  const {data: announcements, error: announcement_error, isLoading: announcement_isLoading} = useSWR(import.meta.env.VITE_API_URL + 'announcements?count=3' , fetcher);
  const {data: news_events, error: news_events_error, isLoading: news_events_isLoading} = useSWR(import.meta.env.VITE_API_URL + 'news-events?count=3' , fetcher);

  return (
    <div className='pb-20'>
        <Carousel sliders={sliders} error={slider_error} isLoading={slider_isLoading} />
        <AboutUni />
        <Statistic />
        <RectorMessage />
        <UniBanner />
        <NewEvent news_events={news_events} error={news_events_error} isLoading={news_events_isLoading} />
        <Announcement announcements={announcements} error={announcement_error} isLoading={announcement_isLoading} />
    </div>
  )
}

export default HomePage
