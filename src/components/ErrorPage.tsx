import errorPhoto from '../assets/images/error.svg'
const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-16 py-5 bg-slate-200'>
      <img className='w-44' src={errorPhoto} alt="" />
      <div>
        <h3 className='text-2xl text-center text-rose-500 italic font-bold'>Something went with this section</h3>
        <p className='text-center mt-3 text-rose-700 font-bold'>Please try again</p>
      </div>
    </div>
  )
}

export default ErrorPage
