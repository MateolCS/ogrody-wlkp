import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AbouUs from './components/AbouUs';
import Contact from './components/Contact';
import GardeningServices from './components/GardeningServices';
import Hydration from './components/Hydration';
import Wood from './components/Wood';
import Multitools from './components/Multitools';
import Lights from './components/Lights';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AbouUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gardening-services' element={<GardeningServices/>}/>
          <Route path='/gardening-services/hydration' element={<Hydration/>}/>
          <Route path='/gardening-services/wood' element={<Wood/>}/>
          <Route path='/gardening-services/multitools' element={<Multitools/>}/>
          <Route path='/gardening-services/lights' element={<Lights/>}/>
          <Route path='/gardening-services/get-started' element={<GetStarted/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
