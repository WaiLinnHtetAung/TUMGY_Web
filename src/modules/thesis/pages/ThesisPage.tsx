import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../../../services/fetcher';
import Banner from '../../../assets/images/thesis_banner.jpg';
import Container from '../../../components/Container';
import ErrorPage from '../../../components/ErrorPage';
import ListSkeleton from '../../../components/ListSkeleton';
import { useEffect, useState } from 'react';
import { HiFunnel } from 'react-icons/hi2';
import Modal from '../components/Modal';

const ThesisPage = () => {
  const { department_slug } = useParams();
  const [filteredThesis, setFilteredThesis] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedThesis, setSelectedThesis] = useState<any>(null);

  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + 'thesis/' + department_slug,
    fetcher
  );

  const openModal = (thesis: any) => {
    setSelectedThesis(thesis);
    setShowModal(true);
  };

  const filter = (year = selectedYear, search = searchTerm) => {
    const filtered = data.thesis.filter((thesis: any) => {
      const matchesYear = year === 'all' || thesis.submission_year === year;
      const matchesSearch =
        thesis.title.toLowerCase().includes(search.toLowerCase()) ||
        thesis.author.toLowerCase().includes(search.toLowerCase()) ||
        thesis.submission_month.toLowerCase().includes(search.toLowerCase()) ||
        thesis.department.toLowerCase().includes(search.toLowerCase());
      return matchesYear && matchesSearch;
    });

    setFilteredThesis(filtered);
  };

  // Auto-filter when data is loaded
  useEffect(() => {
    if (data?.thesis) {
      filter();
    }
  }, [data]);

  return (
    <>
      <div
        className="relative bg-cover bg-repeat bg-center min-h-[300px] flex items-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex justify-center w-full z-[99]">
          <h3 className="text-amber-500 text-4xl font-extrabold">
            {department_slug?.toUpperCase()} DEPARTMENT THESIS
          </h3>
        </div>
      </div>

      <Container isNav className="mb-20 mt-10">
        {error && <ErrorPage />}
        {isLoading && <ListSkeleton />}

        {data?.thesis?.length > 0 && (
          <>
            <div className="flex items-center flex-wrap justify-start lg:justify-end gap-3 mb-5">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  filter(selectedYear, e.target.value);
                }}
                className="px-2 py-1 rounded-lg border border-gray-300 bg-slate-100 w-full sm:w-[300px]"
              />

              <select
                name="thesis"
                className="px-2 py-1 rounded-lg border border-gray-300 bg-slate-100 min-w-[100px]"
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  filter(e.target.value, searchTerm);
                }}
              >
                <option value="all">All</option>
                {data.years?.map((year: any) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <div
                className="inline-flex gap-2 bg-green-800 px-3 py-1 rounded-lg text-white cursor-pointer"
              >
                <HiFunnel size={20} />
                Filter
              </div>
            </div>

            <hr />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 mt-5">
              {filteredThesis.map((thesis: any) => (
                <div
                  key={thesis.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {thesis.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    Submitted by{' '}
                    <span className="font-medium text-gray-700">
                      {thesis.author} ({thesis.roll_no})
                    </span>
                  </p>

                  <div className="text-sm text-gray-600 mb-4">
                    <p>📚 Department: {thesis.department}</p>
                    <p>
                      🗓️ Year: {thesis.submission_year} - {thesis.submission_month}
                    </p>
                  </div>

                  <div className="flex justify-end gap-3">
                    {thesis.pdf && (
                      <a
                        href={thesis.pdf}
                        target="_blank"
                        className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      >
                        View PDF
                      </a>
                    )}
                    <button 
                      onClick={() => openModal(thesis)} 
                      className="text-sm px-3 py-1 border border-rose-500 rounded hover:bg-rose-500 hover:text-white"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
              {showModal && selectedThesis && (
                    <Modal thesis={selectedThesis} setShowModal={setShowModal} />
                )}

            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default ThesisPage;
