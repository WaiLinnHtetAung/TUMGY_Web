import ECBanner from '../../../assets/images/departments/ec_banner.jpg'
import Container from '../../../components/Container';
import ECLogo from '../../../assets/images/departments/ec_logo.png'
import Netowrk from '../../../assets/images/departments/network.jpg'
import { HiAcademicCap } from 'react-icons/hi';
import ResearchBanner from '../../../assets/images/departments/ec_research_banner.jpg'
import { HiMiniServerStack, HiWrenchScrewdriver } from 'react-icons/hi2';
import WorkShop from '../../../assets/images/departments/ec_workshop.webp'

const ElectronicDepartment = () => {
  return (
    <div>
      <div>
            <div
                className="relative bg-cover bg-repeat bg-center min-h-[400px]  flex items-center"
                style={{ backgroundImage: `url(${ECBanner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="flex justify-center w-full z-[99]">
                    <h3 className=" text-4xl font-bold underline underline-offset-8 text-amber-500">ELECTRONIC ENGINEERING</h3>
                </div>
            </div>
        </div>

        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center md:justify-start">
                <div className="col-span-1">
                    <img className='w-[90%]' src={ECLogo} alt="" />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h3 className='text-2xl xl:text-3xl font-bold mb-5'>Department of Electronic Engineering</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg '>
                    Department of Electronic Engineering (EC) provides an Electronic engineering education to our graduates and post graduate students. The Department of Electronic Engineering has been established since the Government Technical Institute, Mandalay was opened in 1955. Department started Under Graduate program in the year 1995 and the Post-Graduation Programme was started in the year 2008. Therefore, Department of Electronic Engineering of TUM is 63 years old in engineering education service.
                    </p>

                    <h3 className='text-xl font-bold my-4'>Degree Awards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>BE (Electronics)</h2>
                            </div>
                            <h4>Bachelor of Engineering (Electronics)</h4>
                        </div>
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>ME (Electronics)</h2>
                            </div>
                            <h4>Master of Engineering (Electronics)</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  my-20 ">
                <div className="col-span-1 lg:col-span-2 flex flex-col justify-between gap-5 lg:gap-2 py-10">
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Motto of Department</h3>
                        <p>
                            “LET’S COMMUNICATE TO THE WORLD”
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Vision of Department</h3>
                        <p>
                        The programming will be recognized by international in Electronics and Communication field with research focus catering to the needs of our community.
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5 '>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Mission of Department</h3>
                        <p> To do continual development by reviewing and prescribing modernized curriculum in electronics and communication technologies</p>
                        <p> To hold seminars, workshops, conferences and trainings program for upgrading the teaching capacity of the staff</p>
                        <p> To create better learning environments for students</p>
                        <p> To equip with practical and laboratory facilities for better performance</p>
                        <p> To encourage research projects</p>
                        <p> To implement better quality management system in the department</p>
                    </div>
                </div>

                <div className="col-span-1">
                    <img className='w-full rounded-xl' src={Netowrk} alt="" />
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
                            <HiMiniServerStack size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Control System</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniServerStack size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Microelectronic and Embedded Technology</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniServerStack size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Networking and Communication System</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiMiniServerStack size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Signal Processing</h3>
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
                <div className="col-span-1 pt-3">
                    <h3 className='text-3xl font-bold mb-5'>Laboratories and Workshops</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg mb-8'>
                    Laboratories and particles are important part of the Electronic Engineering curriculums. Department of Electronic Engineering has the follwing laboratories:
                    </p>

                    <div className='inline-flex flex-col gap-5'>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Circuit Lab 1 (Dept:)</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Circuit Lab 2 (Workshop)</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>PLC Programming Methods and Techniques Lab (Dept:)</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Technical Programming Lab (Main Building R 214)</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Networking and Communication Lab (Dept:)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ElectronicDepartment
