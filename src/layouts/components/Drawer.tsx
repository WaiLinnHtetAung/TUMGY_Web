import { FaHouse } from 'react-icons/fa6';
import { HiBuildingOffice2, HiMiniMegaphone, HiMiniPhoneArrowUpRight, HiMiniSparkles, HiMiniUserGroup, HiNewspaper } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const Drawer = ({ isOpen, onClose, activeRoute, departments, sub_route_name }: any) => {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
    navigate(path);
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-[70%] bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <IoClose
            className="cursor-pointer"
            size={24}
            onClick={onClose}
          />
        </div>
            <div className="py-4 h-[90vh] overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li className={`${activeRoute === '/' && 'bg-gray-200'}`}>
                        <Link to="/" onClick={onClose} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <FaHouse size={20} />
                            <span className="ms-3">Home</span>
                        </Link>
                    </li>

                    <li className={`${activeRoute.split('/')[1] === 'departments' && 'bg-gray-200'}`}>
                      <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="department-dropdown" data-collapse-toggle="department-dropdown">
                        <HiBuildingOffice2 size={20} />
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Departments</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <ul id="department-dropdown" className="hidden py-2 space-y-2">
                        <li className={`${activeRoute.split('/')[2] === 'civil' && 'bg-gray-400'}`}>
                          <Link to='/departments/civil' onClick={onClose} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Civil</Link>
                        </li>
                        <li className={`${activeRoute.split('/')[2] === 'electronic-communication' && 'bg-gray-400'}`}>
                          <Link to='/departments/electronic-communication' onClick={onClose} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Electronic Communication</Link>
                        </li>
                        <li className={`${activeRoute.split('/')[2] === 'electrical-power' && 'bg-gray-400'}`}>
                          <Link to='/departments/electrical-power' onClick={onClose} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Electrical Power</Link>
                        </li>
                        <li className={`${activeRoute.split('/')[2] === 'mechanical-power' && 'bg-gray-400'}`}>
                          <Link to='/departments/mechanical-power' onClick={onClose} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">Mechanical Power</Link>
                        </li>
                      </ul>
                    </li>

                    <li className={`${activeRoute === '/announcements' && 'bg-gray-200'}`}>
                        <Link to="/announcements" onClick={onClose}  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <HiMiniMegaphone size={20} />
                            <span className="ms-3">Announcements</span>
                        </Link>
                    </li>
                    <li className={`${activeRoute.split('/')[1] === 'departments' && 'bg-gray-200'}`}>
                      <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="thesis-dropdown" data-collapse-toggle="thesis-dropdown">
                        <HiBuildingOffice2 size={20} />
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Thesis</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <ul id="thesis-dropdown" className="hidden py-2 space-y-2">
                        {(departments && departments.length > 0) && (
                          departments.map((department: any) => (

                             <li className={`${sub_route_name === department.slug && 'bg-gray-400'}`} key={department.id} onClick={() => handleClick('/thesis/' + department.slug)}>
                                <Link to='/departments/civil' onClick={onClose} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 ">{department.name}</Link>
                              </li>
                          ))
                        )}
                       
                      
                      </ul>
                    </li>
                    <li className={`${activeRoute === '/news-events' && 'bg-gray-200'}`}>
                        <Link to="/news-events" onClick={onClose}  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <HiNewspaper size={20} />
                            <span className="ms-3">News & Events</span>
                        </Link>
                    </li>
                    <li className={`${activeRoute === '/our-activities' && 'bg-gray-200'}`}>
                        <Link to="/our-activities" onClick={onClose}  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <HiMiniSparkles size={20} />
                            <span className="ms-3">Our Activities</span>
                        </Link>
                    </li>
                    <li className={`${activeRoute === '/about-us' && 'bg-gray-200'}`}>
                        <Link to="/about-us" onClick={onClose}  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <HiMiniUserGroup size={20} />
                            <span className="ms-3">About Us</span>
                        </Link>
                    </li>
                    <li className={`${activeRoute === '/contact-us' && 'bg-gray-200'}`}>
                        <Link to="/contact-us" onClick={onClose}  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <HiMiniPhoneArrowUpRight size={20} />
                            <span className="ms-3">Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  );
};

export default Drawer;
