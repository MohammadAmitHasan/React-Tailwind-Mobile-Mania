import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Mobiles from './Components/Mobiles/Mobiles';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          {/* <Route path=':brand' element={<Mobiles></Mobiles>}></Route> */}
        </Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path=':brand' element={<Mobiles></Mobiles>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact'></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
