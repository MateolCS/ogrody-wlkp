import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AbouUs from './components/AbouUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AbouUs/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
