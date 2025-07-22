import Container from "../../../components/Container"
import Image from '../../../assets/images/tu.jpg'
import VisionImage from '../../../assets/images/vision.webp'
import MissionImage from '../../../assets/images/mission.jpg'
import { useEffect } from "react"

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="pb-10">
      <Container isNav className="mt-10">
        <div>
          <img className="w-full rounded-xl shadow-xl" src={Image} alt="" />
        </div>

        <div className="mt-10">
          <h3 className="text-3xl font-bold text-center mb-5">About TU MGY</h3>
          <p className="indent-20 text-lg text-justify">
            Technological University (Magway) is founded in 2007, Technological University, Magway is a non-profit public higher education institution located in the small city of Magway (population range of 50,000-249,999 inhabitants). Officially recognized by the Ministry of Science and Technology of Myanmar, Technological University, Magway (TU Magway) is a coeducational Burmese higher education institution.
          </p>
          <p className="indent-20 text-lg text-justify">
            Technological University, Magway (TU Magway) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study table below for further details. TU Magway also provides several academic and non-academic facilities and services to students including a library, as well as administrative services.
          </p>
        </div>
      </Container>

      <section className="mt-16 bg-green-200/50 ">
        <Container isNav>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <div className="col-span-1">
              <img src={VisionImage} className="rounded-xl w-full object-cover" alt="" />
            </div>
            <div className="col-span-1">
              <h3 className="text-3xl font-bold mb-8">Vision</h3>
              <p className="text-lg mb-2 text-justify">To become a nationally and regionally recognized institution of excellence in engineering, technology, and applied sciences.</p>
              <p className="text-lg mb-2 text-justify">We aim to cultivate a new generation of innovative, ethical, and socially responsible engineers and technologists.</p>
              <p className="text-lg mb-2 text-justify">Through high-quality education, research, and industry collaboration, we strive to contribute to sustainable development.</p>
              <p className="text-lg mb-2 text-justify">We envision a university that drives technological progress and empowers communities through knowledge and innovation.</p>
              <p className="text-lg mb-2 text-justify">Our commitment is to academic excellence, lifelong learning, and leadership in a rapidly evolving world.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-10">
        <Container isNav>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <div className="col-span-1 pt-5">
              <h3 className="text-3xl font-bold mb-8">Mission</h3>
              <p className="text-lg mb-2 text-justify">To provide high-quality engineering and technology education that equips students with practical skills, creativity, and critical thinking.</p>
              <p className="text-lg mb-2 text-justify">To promote research and innovation that address local, national, and global challenges.</p>
              <p className="text-lg mb-2 text-justify">To foster strong collaboration with industries, government, and communities for technological advancement and economic growth..</p>
              <p className="text-lg mb-2 text-justify">To cultivate ethical values, environmental responsibility, and a commitment to lifelong learning among students and staff.</p>
              <p className="text-lg mb-2 text-justify">To develop a dynamic academic environment that supports continuous improvement, diversity, and global competitiveness.</p>
            </div>

             <div className="col-span-1">
              <img src={MissionImage} className="rounded-xl w-full object-cover" alt="" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutUsPage
