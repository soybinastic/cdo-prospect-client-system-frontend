import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin/Admin';
import AddAgent from './pages/admin/sub/AddAgent';
import Login from './pages/auth/Login';
import Index from './pages/Index';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Index/>}>
        <Route path='/' element={<Admin/>}>
          <Route path='add-agent' element={<AddAgent/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  </>
}

export default App;
