import { useNavigate } from "react-router-dom";

const DepartmentDropdown = ({sub_route_name}: {sub_route_name: string}) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  }

  return (
    <ul className="absolute top-8 bg-primary border-t-2 border-t-green-800 backdrop-blur-lg shadow-lg p-2 rounded-lg -ml-10 w-64 flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
      <li className={`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-green-800 hover:text-white ${sub_route_name === 'civil' && 'bg-green-800 text-white'}`} onClick={() => handleClick('/departments/civil')}>
        Civil Engineering
      </li>
      <li className={`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-green-800 hover:text-white ${sub_route_name === 'electronic' && 'bg-green-800 text-white'}`} onClick={() => handleClick('/departments/electronic')}>
        Electronic Engineering
      </li>
      <li className={`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-green-800 hover:text-white ${sub_route_name === 'electrical-power' && 'bg-green-800 text-white'}`} onClick={() => handleClick('/departments/electrical-power')}>
        Electrical Power 
      </li>
      <li className={`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-green-800 hover:text-white ${sub_route_name === 'mechanical-engineering' && 'bg-green-800 text-white'}`} onClick={() => handleClick('/departments/mechanical-engineering')}>
        Mechanical Engineering 
      </li>
    </ul>
  );
};

export default DepartmentDropdown;
