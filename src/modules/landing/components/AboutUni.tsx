import Container from "../../../components/Container";
import AboutImg1 from "../../../assets/images/tu-magway.jpg";
import AboutImg2 from "../../../assets/images/about__h2-2.png";
import ecup from '../../../assets/images/e-cap-pix.svg'
import MissionImg from "../../../assets/images/mission.svg";
import VisionImg from '../../../assets/images/vission.svg'
import { LuArrowUpRight } from "react-icons/lu";

const AboutUni = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-20">
        <div className="col-span-1 flex gap-4 lg:gap-10 justify-center relative mb-20 xl:mb-0">
          <img
            src={AboutImg1}
            alt="left"
            className="w-[180px] sm:w-[300px] object-cover rounded-lg mt-20 -mb-20"
          />

          <img src={AboutImg2} alt="right" className="w-[180px] sm:w-[300px] object-cover rounded-lg" />

          <div className="absolute top-1/2 left-[35%] w-[180px] h-[180px] flex items-center justify-center rounded-full bg-rose-700 -translate-y-1/2 z-10">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-40,0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0"
                    fill="none"
                  />
                </defs>
                <text fill="white" fontSize="10" fontWeight="bold">
                  <textPath href="#circlePath">
                    &nbsp; Explore Bright Future &nbsp; * &nbsp; TU Magway &nbsp; *  Estd. 2007 *&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Static Arrow in Center */}
            <LuArrowUpRight size={20} className="text-white z-20" />
          </div>
        </div>

        <div className="col-span-1 mt-5 ">
            <div className="flex items-center gap-4">
                <img src={ecup} alt="" />
                <h3 className="text-lg font-bold text-rose-700">knowledge meets innovation</h3>
            </div>

            <h1 className="text-4xl font-bold mt-4">About TU MGY</h1>
            <p className="mt-5 font-poppins text-justify indent-10 ">
                Founded in 2007, Technological University, Magway is a non-profit public higher education institution located in the small city of Magway (population range of 50,000-249,999 inhabitants). Officially recognized by the Ministry of Science and Technology of Myanmar, Technological University, Magway (TU Magway) is a coeducational Burmese higher education institution. 
            </p>
            <p className="font-poppins text-justify indent-10 ">
                Technological University, Magway (TU Magway) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study table below for further details. TU Magway also provides several academic and non-academic facilities and services to students including a library, as well as administrative services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="col-span-1 flex items-center gap-4 border border-green-800 rounded-md p-4 bg-slate-100">
                    <img src={MissionImg} alt="" />
                    <p className="font-bold text-xl">
                        University Mission <br /> Statement
                    </p>
                </div>
                <div className="col-span-1 flex items-center gap-4 border border-green-800 rounded-md p-4 bg-slate-100">
                    <img src={VisionImg} alt="" />
                    <p className="font-bold text-xl">
                        University Vision <br /> Achievement
                    </p>
                </div>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUni;
