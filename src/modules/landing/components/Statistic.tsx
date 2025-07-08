import Container from '../../../components/Container'

const Statistic = () => {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-7 lg:gap-5 bg-green-700 py-10 rounded-lg'>
        <div className="col-span-1 flex flex-col items-center border-r-2">
          <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 text-primary'>90 %</h2>
          <p className='text-slate-100 font-semibold text-lg'>Graduation Success Rate</p>
        </div>
        <div className="col-span-1 flex flex-col items-center border-r-2">
          <h2 className='text-xl lg:text-2xl xl:text-4xl font-bold mb-3 text-primary'>2000 +</h2>
          <p className='text-slate-100 font-semibold text-lg'>Students Enrollment</p>
        </div>
        <div className="col-span-1 flex flex-col items-center border-r-2">
          <h2 className='text-xl lg:text-2xl xl:text-4xl font-bold mb-3 text-primary'>4 </h2>
          <p className='text-slate-100 font-semibold text-lg'>Departments</p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <h2 className='text-xl lg:text-2xl xl:text-4xl font-bold mb-3 text-primary'>100 %</h2>
          <p className='text-slate-100 font-semibold text-lg'>Academic Excellence</p>
        </div>
      </div>
    </Container>
  )
}

export default Statistic
