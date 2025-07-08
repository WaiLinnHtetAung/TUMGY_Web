import { useNavigate } from "react-router-dom";
import { ThesisDropdownTypes } from "../../types/navbarTypes";

const ThesisDropdown: React.FC<ThesisDropdownTypes> = ({sub_route_name, departments, error, isLoading}) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  }

  return (
    <ul className="absolute top-8 bg-primary border-t-2 border-t-green-800 backdrop-blur-lg shadow-lg p-2 rounded-lg -ml-10 w-52 flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
      {error && (
        <li className="font-semibold text-sm px-3 py-1 rounded text-rose-700 hover:bg-green-800 hover:text-white">
          Server Error
        </li>
      )}
     {isLoading && (
       <li className="font-semibold text-sm px-3 py-1 rounded text-rose-700 hover:bg-green-800 hover:text-white">
        Loading ...
      </li>
     )}
      {(departments && departments.length > 0) && (
        departments.map((department: any) => (
          <li 
            className={`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-green-800 hover:text-white ${sub_route_name === department.slug && 'bg-green-800 text-white'}`} 
            onClick={() => handleClick('/thesis/' + department.slug)}
            key={department.id}
            >
            {department.name}
          </li>
        ))
      )}
    </ul>
  );
};

export default ThesisDropdown;
