import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin/Admin';
import AddAgent from './pages/admin/sub/AddAgent';
import AddProperty from './pages/admin/sub/AddProperty';
import AgentsList from './pages/admin/sub/AgentsList';
import { PropertiesList } from './pages/admin/sub/PropertiesList';
import { ScreeningAndBriefingForm } from './pages/agent/sub/ScreeningAndBriefingForm';
import { Home } from './pages/agent/sub/Home'
import Agent from './pages/agent/Agent';
import Login from './pages/auth/Login';
import Index from './pages/Index';
import { Properties } from './pages/landing-pages/Properties';
import { ListOfClients } from './pages/agent/sub/ListOfClients';
import { SetAppointment } from './pages/admin/sub/SetAppointment';
import { ClientRequirementRecords } from './pages/agent/sub/ClientRequirementRecords';
import { ListOfRequirementToEvalaute } from './pages/admin/sub/ListOfRequirementToEvalaute';
import { EvaluationForm } from './pages/admin/sub/EvaluationForm';
import { ClientRequirementDetails } from './pages/agent/sub/ClientRequirementDetails';
import { AppointmentList } from './pages/admin/sub/AppointmentList';
import { PropertyDetails } from './pages/admin/sub/PropertyDetails';
import { ClientDetails } from './pages/agent/sub/ClientDetails';
import BuyerLogin from './pages/auth/BuyerLogin';
import { BuyerSignup } from './pages/auth/BuyerSignup';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Index/>}>
        <Route path='admin' element={<Admin/>}>
          <Route path='add-agent' element={<AddAgent/>}/>
          <Route path='agents' element={<AgentsList/>}/>
          <Route path='property-creation' element={<AddProperty/>}/>
          <Route path='properties' element={<PropertiesList/>}/>
          <Route path='set-appointment' element={<SetAppointment/>}/>
          <Route path='status-list' element={<ListOfRequirementToEvalaute/>}/>
          <Route path='evaluation/:evaluationId' element={<EvaluationForm/>}/>
          <Route path='appointments' element={<AppointmentList/>}/>
          <Route path='property-details/:propertyId' element={<PropertyDetails/>}/>
        </Route>
        <Route path='agent' element={<Agent/>}>
          <Route path="" element={<Home/>}/>
          <Route path='requirements-submission' element={<ScreeningAndBriefingForm/>}/>
          <Route path='clients' element={<ListOfClients/>}/>
          <Route path='client-records' element={<ClientRequirementRecords/>}/>
          <Route path='client-requirements/:requirementId' element={<ClientRequirementDetails/>}/>
          <Route path='client-details/:appointmentId' element={<ClientDetails/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="buyer-login" element={<BuyerLogin/>}/>
        <Route path='buyer-signup' element={<BuyerSignup/>}/>
        <Route path='/' element={<Properties/>}/>
      </Route>
    </Routes>
  </>
}

export default App;
