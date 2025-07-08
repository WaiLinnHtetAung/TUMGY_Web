import { useEffect } from "react";
import Container from "../../../components/Container";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../../services/fetcher";
import Banner from "../../../assets/images/tu_banner.png";
import { LuArrowLeft, LuCalendarCheck2 } from "react-icons/lu";
import DetailSkeleton from "../../../components/DetailSkeleton";
import ErrorPage from "../../../components/ErrorPage";

const AnnouncementDetailPage = () => {
  const { id } = useParams();
  const announcementId = id?.split("-")[0];

  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "announcements/" + announcementId,
    fetcher
  );

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
        <div className="flex justify-center w-full z-[99] px-10">
            <h3 className="text-slate-100 text-3xl font-bold mb-5 text-center">{data?.title} </h3>
        </div>
      </div>
      <Container isNav className="my-20">
            <div onClick={() => window.history.back()} className="mb-5 inline-block bg-slate-300 p-2 rounded-lg hover:bg-rose-700 hover:text-white cursor-pointer">
                <LuArrowLeft size={22} />
            </div>

            {error && (
                <ErrorPage />
            )}

          {isLoading && <DetailSkeleton />}
          {data && (
            <div>
              <h3 className="text-slate-700 text-3xl font-bold mb-5">{data.title}</h3>

              <div className="flex items-center gap-2">
                <LuCalendarCheck2 className="text-rose-800" size={24} />
                <span className="text-slate-700 text-lg xl:text-xl font-bold">{data.date}</span>
              </div>

              <div className="flex justify-center mt-5">
                <img src={data.image} className="border" alt="" />
              </div>

              <div
                className="mt-10 text-lg"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />

              {data.document && (
                <div className="mt-10">
                    <iframe
                        src={data.document}
                        title="Student List"
                        className="w-full h-[800px] border"
                        />
                </div>
              )}
            </div>
          )}
        </Container>
    </>
  );
};

export default AnnouncementDetailPage;
