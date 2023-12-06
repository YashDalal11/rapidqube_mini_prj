
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Bs } from './components/Bs';
import { Registrations } from './components/Registrations';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';



function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/b' element={<Bs />}/>
      <Route exact path='/registrations' element={<Registrations />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/navbar' element={<Navbar />}/>
      <Route exact path='/shop' element={<Shop />}/>
      <Route exact path='/cart' element={<Cart />}/>
      
      
    
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
