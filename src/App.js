import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom'
 
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

function App() {
  return (
   <>
   <div className="App">
    {/* {/add /edit/:id  */}
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<AddContact/>} />
      <Route path='/edit/:id' element={<EditContact/>} />
      
    </Routes>
     

   </div>
   </>
  );
}

export default App;
