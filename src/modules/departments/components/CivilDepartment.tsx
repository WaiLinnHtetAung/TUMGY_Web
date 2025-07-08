import CivilBanner from '../../../assets/images/departments/civil_banner.jpg'
import Container from '../../../components/Container';
import CivilLogo from '../../../assets/images/departments/civil_logo.jpg'
import Building from '../../../assets/images/departments/building.jpg'
import { HiAcademicCap } from 'react-icons/hi';
import ResearchBanner from '../../../assets/images/departments/civil_research_banner.jpg'
import { HiBuildingOffice2, HiWrenchScrewdriver } from 'react-icons/hi2';
import WorkShop from '../../../assets/images/departments/civil_workshop.jpeg'

const CivilDepartment = () => {
  return (
    <div>
      <div>
            <div
                className="relative bg-cover bg-repeat bg-center min-h-[400px]  flex items-center"
                style={{ backgroundImage: `url(${CivilBanner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="flex justify-center w-full z-[99]">
                    <h3 className=" text-4xl font-bold underline underline-offset-8 text-amber-500">CIVIL ENGINEERING</h3>
                </div>
            </div>
        </div>

        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center md:justify-start">
                <div className="col-span-1">
                    <img className='w-[90%]' src={CivilLogo} alt="" />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h3 className='text-2xl xl:text-3xl font-bold mb-5'>Department of Civil Engineering</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg '>
                    Civil Engineering program has been formed since the beginning of the Government Technical Institute at 1955. Every Head of Civil Engineering tried very hard for our department to promote the technological field and therefore, nowadays we are proud of our department. And the students who had been studied from the civil engineering department are well done for job opportunities to regional field.
                    </p>

                    <h3 className='text-xl font-bold my-4'>Degree Awards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>BE (Civil)</h2>
                            </div>
                            <h4>Bachelor of Engineering (Civil)</h4>
                        </div>
                        <div className="col-span-1 border border-green-500 shadow-lg p-3 rounded-xl bg-slate-100">
                            <div className="flex items-center gap-2">
                                <HiAcademicCap size={30} />
                                <h2 className='text-lg font-bold'>ME (Civil)</h2>
                            </div>
                            <h4>Master of Engineering (Civil)</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  my-20 ">
                <div className="col-span-1 lg:col-span-2 flex flex-col justify-between gap-5 lg:gap-0 py-10">
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Motto of Department</h3>
                        <p>
                            “Upgrade the Nation with the Power of Civil Engineering.”
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5'>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Vision of Department</h3>
                        <p>
                        Civil Engineering Department of the Technological University (Mandalay) is envisaged to become a department which trains students systematically to quality for the workplace requirements and to grow into outstanding Civil Engineers.
                        </p>
                    </div>
                    <div className='bg-green-600 rounded-3xl p-5 '>
                        <h3 className='text-xl font-bold bg-white inline-block rounded-full px-3 mb-3'>Mission of Department</h3>
                        <p> To fulfill with the modern teaching aids</p>
                        <p> To implement the capacity building for teaching staffs and laboratory assistants</p>
                        <p> To be able to innovate effective teaching, learning and training techniques</p>
                        <p> To identify workplace qualifications and to evaluate curriculum continually</p>
                    </div>
                </div>

                <div className="col-span-1">
                    <img className='w-full rounded-xl' src={Building} alt="" />
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
                            <HiBuildingOffice2 size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Structural Engineering</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiBuildingOffice2 size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Construction Engineering</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiBuildingOffice2 size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Geotechnical Engineering</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiBuildingOffice2 size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Transportation Engineering</h3>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-300 px-5 py-2 rounded-full">
                            <HiBuildingOffice2 size={30} className='text-amber-700' />
                            <h3 className='text-xl font-bold'>Water Resources Engineering</h3>
                        </div>
                    </div>
                </Container>
            </div>
        </div>

        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className="col-span-1">
                    <img src={WorkShop} className='rounded-xl' alt="" />
                </div>
                <div className="col-span-1 pt-8">
                    <h3 className='text-3xl font-bold mb-5'>Laboratories and Workshops</h3>
                    <p className='text-justify indent-20 text-base lg:text-lg mb-8'>
                        Laboratories and practical are important part of Civil Engineering curriculums. Department of Civil Engineering has six laboratories:
                    </p>

                    <div className='inline-flex flex-col gap-5'>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Building Material and Construction Laboratory</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Workshop Technologies and Practices</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Geotechnical Engineering Laboratory</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Fluid Mechanic Laboratory</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Water Resource Engineering Laboratory</h3>
                        </div>
                        <div className="bg-slate-300 inline-flex rounded-xl px-5 py-2">
                            <HiWrenchScrewdriver size={24} className='text-amber-700' />
                            <h3 className='text-xl font-semibold ml-4'>Environmental Engineering Laboratory</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CivilDepartment
