// import { HiFolder } from "react-icons/hi2";

const Modal = ({ thesis, setShowModal }: any) => {
  return (
    <div className="fixed inset-0 z-[999] bg-black  bg-opacity-50 flex items-center justify-center">
      <div className="bg-white lg:w-[800px]  rounded-lg shadow-lg p-6 relative">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-xl font-bold">Thesis Details</h3>
          <button
            className=" text-rose-700 font-bold text-3xl"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <hr />
        <div className="mt-3 pe-5">
          <h2 className="text-xl font-bold mb-5">{thesis.title}</h2>
          <p className="mb-3">
            <strong>🧑‍🎓 Author:</strong> {thesis.author} ({thesis.roll_no})
          </p>
          <p className="mb-3">
            <strong>📚  Department:</strong> {thesis.department}
          </p>
          <p className="mb-3">
            <strong>🗓️ Submitted:</strong> {thesis.submission_month}{" "}
            {thesis.submission_year}
          </p>
          {/* {thesis.file && (
            <a
              href={thesis.file}
              download
              className="inline-flex items-center gap-3 underline mt-3 text-rose-700 font-bold px-3 py-1 rounded "
            >
              <HiFolder />
              download
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
