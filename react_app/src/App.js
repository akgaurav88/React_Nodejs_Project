import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contect from './routes/Contect';
import Home from './routes/Home';
import Abouts from './routes/Abouts'
import Services from './routes/Services';
import Register from './pages/Register';
import Landing from './pages/Landing';
import FormPage from './routes/FormPage';
function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/contect' element={<Contect/>}></Route>
      <Route path='/about' element={<Abouts/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/Form' element={<FormPage/>}></Route>
    </Routes>   
    </>
  );
}

export default App;
