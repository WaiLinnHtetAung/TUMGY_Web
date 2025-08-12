import EPBanner from '../../../assets/images/departments/ep_banner.jpg'
import Container from '../../../components/Container';
import EPLogo from '../../../assets/images/departments/ep_logo.png'
import Tower from '../../../assets/images/departments/tower.jpg'
import { HiAcademicCap } from 'react-icons/hi';
import ResearchBanner from '../../../assets/images/departments/ep_research_banner.webp'
import { HiMiniLightBulb, HiWrenchScrewdriver } from 'react-icons/hi2';
import WorkShop from '../../../assets/images/departments/ep_workshop.jpg'

const ElectricalDepartment = () => {
  return (
    <div>
      <div>
            <div
                className="relative bg-cover bg-repeat bg-center min-h-[400px]  flex items-center"
                style={{ backgroundImage: `url(${EPBanner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="flex justify-center w-full z-[99]">
                    <h3 className=" text-4xl font-bold underline underline-offset-8 text-amber-500">ELECTRICAL POWER ENGINEERING</h3>
                </div>
            </div>
        </div>

        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center md:justify-start">
                <div className="col-span-1">
                    <img className='w-[90%]' src={EPLogo} alt="" />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h3 className='text-2xl xl:text-3xl font-bold mb-5'>Department of Electrical Power Engineering</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg '>
                    Department of Electrical Power Engineering ( EP ) provides and Electrical Powe Engineering education  to  our gratuate  and  post graduate students . The Department of  Electrical  Power Engineering  has been  established  since  the Government Technical Institute , Mandalay was open in 1955 . Department  started  Under  Graduate  program  in  the  year 1995 and the Post –Graduation  Programme was started  in  the year 2008 . Therefore , Department of Electrical Power Engineering of TUM is 63 years old in engineering education service.
                    </p>

                    <h3 className='text-xl font-bold my-4'>Degree Awards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>BE (Electrical Power)</h2>
                            </div>
                            <h4>Bachelor of Engineering (Electrical Power)</h4>
                        </div>
                        {/* <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>ME (Electrical Power)</h2>
                            </div>
                            <h4>Master of Engineering (Electrical Power)</h4>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  my-20 ">
                <div className="col-span-1 lg:col-span-2 flex flex-col justify-between gap-5 lg:gap-2 py-10">
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Motto of Department</h3>
                        <p>
                            ” Nation Prosperity with Electrical Power “
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Vision of Department</h3>
                        <p>
                        The department excepts , with a view to develop the quality of the university of technology,make necessary research through cooperation of local and foreign companies that may give aids to the sectors concerned.
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5 '>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Mission of Department</h3>
                        <p> In order to develop technology and economy of the state , the department excepts to train and produce skilled workers and inventors in vocational fields.</p>
                        <p> To becomes competent teachers , to continuously study and learn.</p>
                        <p>To promote innovation and creativity among trainees through practical and hands-on experiences.</p>
                        <p>To collaborate with industries and institutions to ensure training programs meet real-world demands and standards.</p>
                    </div>
                </div>

                <div className="col-span-1">
                    <img className='w-full rounded-xl' src={Tower} alt="" />
                </div>
            </div>
        </Container>

        <div>
            <div
                className="relative bg-cover bg-repeat bg-center min-h-[400px] flex items-center"
                style={{ backgroundImage: `url(${ResearchBanner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <Container isNav className="w-full min-h-[400px] pt-16 z-[99]">
                    <h3 className=" text-4xl font-bold text-white mb-12">Research Area (Field)</h3>

                    <div className="flex flex-wrap items-center gap-8">
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniLightBulb size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Power System</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniLightBulb size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Electrical Machine</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniLightBulb size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Electrical Machine and Control</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniLightBulb size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Renewable Energy</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniLightBulb size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Electrical Safety</h3>
                        </div>
                    </div>
                </Container>
            </div>
        </div>

        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
                <div className="col-span-1">
                    <img src={WorkShop} className='rounded-xl' alt="" />
                </div>
                <div className="col-span-1 pt-2">
                    <h3 className='text-3xl font-bold mb-5'>Laboratories and Workshops</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg mb-8'>
                    Laboratories and practical are important part of the Electrical Power Engineering curriculums. Department of Electrical Power Engineering  has twelve  laboratories:
                    </p>

                    <div className='inline-flex flex-col gap-5'>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Electrotechnology Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Electrical Masurement Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Electrical Machine Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Electrical Machine Control Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>PLC Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Power Electronics Lab</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ElectricalDepartment
