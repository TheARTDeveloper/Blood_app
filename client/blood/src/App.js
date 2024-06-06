
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Add from './Component/Add-doner/Add';


function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='doner' element={<Add/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
