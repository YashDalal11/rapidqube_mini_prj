
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Bs } from './components/Bs';
import { Registrations } from './components/Registrations';


function App() {
  return (
    <>
    <h1>welcome to my prj</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path='/b' element={<Bs />}/>
      <Route exact path='/registrations' element={<Registrations />}/>
      
     
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
