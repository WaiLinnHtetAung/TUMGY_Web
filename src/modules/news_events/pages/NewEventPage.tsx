import useSWR from 'swr';
import { fetcher } from '../../../services/fetcher';
import Container from '../../../components/Container';
import Banner from "../../../assets/images/news_banner.jpg";
import ListSkeleton from '../../../components/ListSkeleton';
import ErrorPage from '../../../components/ErrorPage';
import { useEffect } from 'react';
import NewsCard from '../components/NewsCard';


const NewEventPage = () => {
  const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL + 'news-events' , fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <div
            className="relative bg-cover bg-repeat bg-center min-h-[300px]  flex items-center"
            style={{ backgroundImage: `url(${Banner})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="flex justify-center w-full z-[99]">
                <h3 className="text-white text-4xl font-bold">News & Events</h3>
            </div>
        </div>
        <Container isNav className='mb-20 mt-14'>
            { error && (
                <ErrorPage />
            )}
            { isLoading && (
                <ListSkeleton />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {(data && data.length > 0) && data.map((news: any) => (
                    <NewsCard key={news.id} news_event={news} />
                ))}
            </div>

            {(data && data.length === 0) && (
                <div className="col-span-1 flex items-center justify-center">
                    <h3 className="text-rose-600 font-semibold text-2xl">No news found</h3>
                </div>
            )}
        </Container>
    </>
  )
}

export default NewEventPage
