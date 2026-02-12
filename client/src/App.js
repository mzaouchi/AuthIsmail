import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import AffErr from './Components/AffErr';

function App() {
  return (
    <div>
      <NavAuth/>
      <AffErr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
