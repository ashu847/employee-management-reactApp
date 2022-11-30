import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Navbar/Navbar'
import AdminLogin from './Pages/AdminLogin'
import AdminRegister from './Pages/AdminRegister';
import Login from './Pages/Login';
import EmployeeDasboard from './Pages/EmployeeDasboard';
import EmployeeProfile from './Pages/EmployeeProfile';
import EmployeeRegister from './Pages/EmployeeRegister';
import EmployeeUpdate from './Pages/EmployeeUpdate';
import AdminDashboard from './Pages/AdminDashboard';
import EmployeeList from './Pages/EmployeeList';



function App() {
  return (
    <div className="App">
    <Router>

    <Navbar/>

    <Routes>

      

      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/admin/login' element={<AdminLogin/>}></Route>
      <Route exact path='/admin/register' element={<AdminRegister/>}></Route>
      <Route exact path='/employee/login' element={<Login/>}></Route>
      <Route exact path='/employee/register' element={<EmployeeRegister/>}></Route>
      <Route exact path='/employee/dashboard/:id' element={<EmployeeDasboard/>}></Route>
      <Route exact path='/employee/find/:id' element={<EmployeeProfile/>}></Route>
      <Route exact path='/employee/update/:id' element={<EmployeeUpdate/>}></Route>
      <Route exact path='/admin/dashboard' element={<AdminDashboard/>}></Route>
      <Route exact path='/admin/listemp' element={<EmployeeList/>}></Route>
      
      
      

    </Routes>

  </Router>
    </div>
  );
}

export default App;
