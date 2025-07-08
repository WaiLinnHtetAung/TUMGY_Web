import useSWR from 'swr';
import { fetcher } from '../../../services/fetcher';
import Container from '../../../components/Container';
import Banner from "../../../assets/images/tu_banner.png";
import ListSkeleton from '../../../components/ListSkeleton';
import ErrorPage from '../../../components/ErrorPage';
import AnnCard from '../components/AnnCard';


const AnnouncementPage = () => {
  const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL + 'announcements' , fetcher);

  return (
    <>
        <div
            className="relative bg-cover bg-repeat bg-center min-h-[300px]  flex items-center"
            style={{ backgroundImage: `url(${Banner})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="flex justify-center w-full z-[99]">
                <h3 className="text-white text-4xl font-bold">Announcement</h3>
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
                {(data && data.length > 0) && data.map((announcement: any) => (
                    <AnnCard key={announcement.id} announcement={announcement} />
                ))}
            </div>
        </Container>
    </>
  )
}

export default AnnouncementPage
