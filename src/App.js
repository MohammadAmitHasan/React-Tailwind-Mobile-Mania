import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/home'></Route>
        <Route path='/about'></Route>
        <Route path='/contact'></Route>
      </Routes>
    </div>
  );
}

export default App;
