import Banner from '../../../assets/images/uni_banner.jpg'
const UniBanner = () => {
  return (
    <div className='mt-20 relative'>
        <img className='w-full h-[400px] object-cover brightness-50' src={Banner} alt="" />
        <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-100'>Explore, Learn, and Grow</h2>
    </div>
  )
}

export default UniBanner
