import { useParams } from 'react-router-dom'
import CivilDepartment from '../components/CivilDepartment';
import ElectronicDepartment from '../components/ElectronicDepartment';
import ElectricalDepartment from '../components/ElectricalDepartment';
import MechnicalDepartment from '../components/MechnicalDepartment';


const DepartmentPage = () => {
    const {department} = useParams();
  return (
    <div className='pb-20'>
        {department == 'civil' && <CivilDepartment />}
        {department == 'electronic' && <ElectronicDepartment />}
        {department == 'electrical-power' && <ElectricalDepartment />}
        {department == 'mechanical-engineering' && <MechnicalDepartment />}
    </div>
  )
}

export default DepartmentPage
