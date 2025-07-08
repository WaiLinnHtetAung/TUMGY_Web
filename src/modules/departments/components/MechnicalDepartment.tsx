import MPBanner from '../../../assets/images/departments/mp_banner.jpg'
import Container from '../../../components/Container';
import EPLogo from '../../../assets/images/departments/ep_logo.jpg'
import Priston from '../../../assets/images/departments/Priston.jpg'
import { HiAcademicCap, HiCog } from 'react-icons/hi';
import ResearchBanner from '../../../assets/images/departments/mp_research_banner.jpg'
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import WorkShop from '../../../assets/images/departments/mp_workshop.jpg'

const MechnicalDepartment = () => {
  return (
    <div>
      <div>
            <div
                className="relative bg-cover bg-repeat bg-center min-h-[400px]  flex items-center"
                style={{ backgroundImage: `url(${MPBanner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="flex justify-center w-full z-[99]">
                    <h3 className=" text-4xl font-bold underline underline-offset-8 text-amber-500">MECHANICAL POWER ENGINEERING</h3>
                </div>
            </div>
        </div>

        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center md:justify-start">
                <div className="col-span-1">
                    <img className='w-[90%]' src={EPLogo} alt="" />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h3 className='text-2xl xl:text-3xl font-bold mb-5'>Department of Mechanical Power Engineering</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg '>
                    Department of Mechanical Engineering is one of the departments of Technological University (Mandalay). In this university, Mechanical Department established in January 20, 2007. It is opened at the east of university. As all teachers and lab technicians, there are 26 staffs and about 350 students in almost every academic year. Under the department of Mechanical, constitute with five engineering field areas.
                    </p>

                    <h3 className='text-xl font-bold my-4'>Degree Awards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>BE (Mechanical)</h2>
                            </div>
                            <h4>Bachelor of Engineering (Mechanical)</h4>
                        </div>
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>ME (Mechanical)</h2>
                            </div>
                            <h4>Master of Engineering (Mechanical)</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  my-20 ">
                <div className="col-span-1 lg:col-span-2 flex flex-col justify-between gap-5 lg:gap-2 py-10">
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Motto of Department</h3>
                        <p>
                        ‘Leading to Mechanized Age; Using the Modern Technologies’
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Vision of Department</h3>
                        <p>To nurture competent Mechanical engineers in the region.</p>
                        <p>To be recognized as a center of excellence in mechanical engineering education and innovation.</p>
                        <p>To inspire students to become industry-ready professionals with strong technical and ethical foundations.</p>
                        <p>To foster sustainable engineering practices that contribute to regional and national development.</p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5 '>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Mission of Department</h3>
                        <p> To implement the effective teaching-learning system with modernized curriculum, syllabus and practical work</p>
                        <p> To help the developments of research activities</p>
                        <p>To support the developments of industrial production</p>
                        <p>To development human resources based on physical and spiritual morality</p>
                        <p>To create better job opportunities for the students</p>
                    </div>
                </div>

                <div className="col-span-1">
                    <img className='w-full rounded-xl' src={Priston} alt="" />
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
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Solid Mechanics</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Thermal Engineering</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Renewable Energy</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Manufacturing</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Fluid Mechanics</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Canal Water Pumping System for Irrigation</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiCog size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Screw Press Oil Expeller</h3>
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
                    Laboratories and practical are important part of the Mechanical Power Engineering curriculums. Department of Mechanical Power Engineering  has twelve  laboratories:
                    </p>

                    <div className='inline-flex flex-col gap-5'>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Computer Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Solid Mechanics Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Renewable Energy Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Thermal Lab</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Machine Workshop</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Fitting Workshop</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MechnicalDepartment
