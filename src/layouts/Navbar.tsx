import Container from '../components/Container'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FB, YouTube, X, Linkedin, Viber } from '../assets/images/social/utils'
import { FaCaretDown } from 'react-icons/fa'
import DepartmentDropdown from './components/DepartmentDropdown'
import ThesisDropdown from './components/ThesisDropdown'
import useSWR from 'swr'
import { fetcher } from '../services/fetcher'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import Drawer from './components/Drawer'
import { initFlowbite } from "flowbite";

const Navbar = () => {

  const {data: departments, error: department_error, isLoading: department_loading} = useSWR(import.meta.env.VITE_API_URL + 'departments' , fetcher);

  const route = useLocation();

  const activeRoute = route.pathname;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);
  
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

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <nav className="w-full py-3">
        <Container isNav className='flex items-center justify-between'>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 rtl:space-x-reverse ">
                    <Link to='/' className='flex items-center gap-2'>
                        <img src={logo} className="w-16 xl:w-20" alt="Flowbite Logo" />
                        <div>
                            <h3 className='text-xl xl:text-2xl font-bold mb-1 text-blue-900'>TECHNOLOGICAL UNIVERSITY</h3>
                            <h2 className='text-lg xl:text-xl font-bold  text-blue-900'>MAGWAY, MYANMAR</h2>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-2 nav-social">
                  {socials.map((social, index) => (
                      <a key={index} href={social.link} target="_blank">
                        <img src={social.icon} className="w-[40px] h-[40px]" alt="" />
                      </a>
                  ))}
                </div>

                <div className="nav-menu-bar inline-block" onClick={handleDrawerToggle}>
                  <HiMiniBars3 size={33} />
                </div>

                <Drawer 
                  isOpen={isDrawerOpen} 
                  onClose={handleDrawerToggle} 
                  activeRoute={activeRoute} 
                  sub_route_name={activeRoute.split('/')[2]}
                  departments={departments}
                />
            </div>
        </Container>
      </nav>


      <nav className='bg-primary py-3 flex justify-center gap-5 xl:gap-8 sticky top-0 start-0 z-[999] shadow-xl menu-nav-bar'>
        <Link to='/' className={`font-extrabold ${activeRoute === '/' ? 'text-green-900' : 'hover:text-green-900'}`}>Home</Link>
        <div className={`cursor-pointer ${activeRoute.split('/')[1] === 'departments' ? 'text-green-900' : 'hover:text-green-900'} duration-150 flex  items-center gap-1 group relative`}>
            <span className="font-extrabold">Departments  </span>
            <FaCaretDown strokeWidth={3} className="size-4 transition-transform duration-300 group-hover:rotate-180" />
            <DepartmentDropdown 
              sub_route_name={activeRoute.split('/')[2]}
            />
        </div>
        <Link to='/announcements' className={`font-extrabold ${activeRoute === '/announcements' ? 'text-green-900' : 'hover:text-green-900'}`}>Announcements</Link>
        <div className={`cursor-pointer ${activeRoute.split('/')[1] === 'thesis' ? 'text-green-900' : 'hover:text-green-900'} duration-150 flex  items-center gap-1 group relative`}>
            <span className="font-extrabold">Thesis </span>
            <FaCaretDown strokeWidth={3} className="size-4 transition-transform duration-300 group-hover:rotate-180" />
            <ThesisDropdown 
              sub_route_name={activeRoute.split('/')[2]}
              departments={departments}
              error={department_error}
              isLoading={department_loading}
            />
        </div>
        <Link to='/news-events' className={`font-extrabold ${activeRoute === '/news-events' ? 'text-green-900' : 'hover:text-green-900'}`}>News & Events</Link>
        <Link to='/our-activities' className={`font-extrabold ${activeRoute === '/our-activities' ? 'text-green-900' : 'hover:text-green-900'}`}>Our Activities</Link>
        <Link to='/about-us' className={`font-extrabold ${activeRoute === '/about-us' ? 'text-green-900' : 'hover:text-green-900'}`}>About Us</Link>
        <Link to='/contact-us' className={`font-extrabold ${activeRoute === '/contact-us' ? 'text-green-900' : 'hover:text-green-900'}`}>Contact Us</Link>
      </nav>
    </>
  )
}

export default Navbar
