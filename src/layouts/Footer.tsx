import Container from '../components/Container'
import Logo from '../assets/images/logo.png'
import { FB, YouTube, X, Linkedin, Viber } from '../assets/images/social/utils'
import { Link } from 'react-router-dom'
import { LuMail, LuMapPinned, LuPhoneCall } from 'react-icons/lu'

const Footer = () => {
  const socials = [
    {
      icon: FB,
      link: 'https://www.facebook.com/p/Technological-University-Magway-61550267844168/',
    },
    {
      icon: YouTube,
      link: '#',
    },
    {
      icon: Viber,
      link: '#',
    },
   
    {
      icon: Linkedin,
      link: '#',
    },
  
    {
      icon: X,
      link: '#',
    },
   
  ]
  return (
    <div className='mt-auto bg-[#9c211e] rounded-ss-[70px] rounded-se-[70px] border-t-8 border-t-green-500'>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="col-span-1">
            <img className='w-[100px]' src={Logo} alt="" />

            <h3 className='font-bold text-xl text-white mt-5'>Follows Us</h3>
            <div className="flex gap-2 mt-5">
                  {socials.map((social, index) => (
                      <a key={index} href={social.link} target="_blank" className='bg-white p-2 rounded-lg'>
                        <img src={social.icon} className="w-[20px] h-[20px]" alt="" />
                      </a>
                  ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className='font-bold text-xl text-white '>Quick Links</h3>
            <ul className='mt-5'>
              <li className='text-white underline underline-offset-2 hover:text-primary mb-2'>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-white underline underline-offset-2 hover:text-primary mb-2'>
                <Link to='/'>Announcements</Link>
              </li>
              <li className='text-white underline underline-offset-2 hover:text-primary mb-2'>
                <Link to='/'>News & Events</Link>
              </li>
              <li className='text-white underline underline-offset-2 hover:text-primary mb-2'>
                <Link to='/'>Our Activities</Link>
              </li>
              <li className='text-white underline underline-offset-2 hover:text-primary mb-2'>
                <Link to='/'>About Us</Link>
              </li>
              <li className='text-white underline underline-offset-2 hover:text-primary mb-2'>
                <Link to='/'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className='font-bold text-xl text-white '>Contact Us</h3>
            
            <div className="mt-5">
                <div className="flex items-start gap-3 mb-4">
                    <div>
                      <LuMapPinned className='text-primary text-2xl' />
                    </div>
                    <p className='text-white'>
                      52X5+M57, Western Kanbya village beside the Naypyitaw-Kanbya Highway Rrgion, Kanbya
                    </p>
                </div>

                <div className="flex items-start gap-3 mb-4">
                    <div>
                      <LuPhoneCall className='text-primary text-2xl' />
                    </div>
                    <p className='text-white'>
                      06323750
                    </p>
                </div>

                <div className="flex items-start gap-3 mb-4">
                    <div>
                      <LuMail className='text-primary text-2xl' />
                    </div>
                    <p className='text-white'>
                      tumgy@edu.com
                    </p>
                </div>
            </div>
          </div>

          <div className="col-span-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4363790721723!2d95.00533527600537!3d20.199179715752546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b7d445379c3ea9%3A0x906a407ae1e843a9!2sTechnological%20University%20(Magway)!5e0!3m2!1sen!2smm!4v1751216823782!5m2!1sen!2smm" width="100%" height="300" loading="lazy" ></iframe>
          </div>
        </div>
      </Container>

      <div className="px-10 lg:px-28 mt-10">
        <hr />
      </div>

      <Container isNav className='my-5'>
        <div className="flex flex-col lg:flex-row  justify-between items-center">
          <p className='text-sm text-slate-50 font-bold'>&copy; 2025 TU-MGY. All Rights Reserved</p>

          <div className="flex gap-3 text-slate-50 font-bold">
            Developed by
            <Link to='/' className='text-amber-400 underline'> VI BE - EC Group 27  @ 2025</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
