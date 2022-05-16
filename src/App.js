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
import Projects from './components/Projects';
import Dihydration from './components/Dihydration';
import GroundCover from './components/GroundCover';

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
          <Route path='/gardening-services/projects' element={<Projects/>}/>
          <Route path='/gardening-services/dihydration' element={<Dihydration/>}/>
          <Route path='/gardening-services/ground-cover' element={<GroundCover/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
