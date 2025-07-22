import useSWR from "swr";
import Banner from "../../../assets/images/activity_banner.jpg";
import Container from "../../../components/Container"
import { fetcher } from "../../../services/fetcher";
import { useEffect } from "react";
import ErrorPage from "../../../components/ErrorPage";
import ListSkeleton from "../../../components/ListSkeleton";
import ActivityCard from "../components/ActivityCard";

const ActivityPage = () => {
  const {data, error, isLoading} = useSWR(import.meta.env.VITE_API_URL + 'activities' , fetcher);

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
                <h3 className="text-white text-4xl font-bold">Activities</h3>
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
                {(data && data.length > 0) && data.map((activity: any) => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>
        </Container>
    </>
  )
}

export default ActivityPage
