
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Add from './Component/Add-doner/Add';
import NotFound from './Component/404/404';



function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='doner' element={<Add/>}/>
    <Route path='*' element={<NotFound/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
