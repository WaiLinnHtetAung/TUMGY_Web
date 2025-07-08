import Rector from '../../../assets/images/rector.jpeg'
import Container from '../../../components/Container'

const RectorMessage = () => {
  return (
    <Container>
      <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 text-slate-700'>
        Rector's Message
      </h2>

      <article>
        <div className='float-right pb-5 ps-0 md:ps-5'>
            <img
                src={Rector}
                alt="Rector"
                className=" w-[500px] lg:w-[700px]  h-auto ml-0 sm:ml-4 mb-2 rounded"
            />
            <h3 className='ps-4 font-bold text-xl text-center'>DR. Aung Aung</h3>
            <h3 className='ps-4 font-bold text-xl text-center'>(Technological University - Magway)</h3>

        </div>
        <p className='text-justify indent-20 text-base lg:text-lg '>
            Our University offers undergraduate and postgraduate courses. We are nurturing qualified engineers and architects in various fields of study in aid of the national socio-economic development and trying to establish an international recognized university by taking a lot of practice in teaching, research and creativity. Current activities include establishing a QMS system for teaching-learning and working to become an accredited university. QMS is one of the Engineering Education and Accreditation Committee (EEAC) criteria. Altogether 6 undergraduate programmes in our university have been provisionally accredited by EEAC followed the guidelines of Federation of Engineering Institutions of Asia and the Pacific (FEIAP). One of our future destination is that we try most of the programmes to be fully accredited by EEAC. We got ISO 9001:2008 certification in 2016 and ISO 9001:2015 in 2018.The most important future task is to build the quality culture within the institution. All are covered with quality, to say, all must be quality oriented such as quality in curriculum, syllabus, teaching & learning, assessment, teaching aids and facilities, and so on. So, we make sure to implement our strong commitment in implementing institutional policy and procedures, all level of staff need to be aware of them and involve as being a part in the implementation processes, building the capacity, building all level of staff, engaging with their workplaces, and also with their students, encouraging them to do research and providing their needs and wants for doing research. As industrial cooperation, our university connect students with the companies and provide internship programs. I am hopeful that above topics will help you to take a closer look at our university. If you would like to learn more about our university, please contact us and join us on our journey. I look forward to seeing you on our campus.
        </p>
      </article>
    </Container>
  )
}

export default RectorMessage
