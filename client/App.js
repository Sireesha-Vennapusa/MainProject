
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { Home } from './components/Home';
import { Login } from './components/login';
import { SignUp } from './components/signup';
import { Aboutus } from './components/Aboutus';

import { Orders } from './components/Orders';
import Main from './components/main';
import { Restaurants } from './components/restaurants';
import { Ice } from './components/shake';
import { Cakes } from './components/cakes';
import { Cards } from './components/mutton';
import { Menu } from './components/attayebmenu';
import { BawarchiMenu } from './components/bawarchimenu';
import { Profile } from './components/profile';
import { Profile1 } from './components/profile1';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Profile1' element={<Profile1/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Restaurants' element={<Restaurants/>}/>
        <Route path='/Ice' element={<Ice/>}/>
        <Route path='/Cakes' element={<Cakes/>}/>
        <Route path='/Cards' element={<Cards/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/BawarchiMenu' element={<BawarchiMenu/>}/>
        <Route path='/Profile' element={<Profile/>}/>
    
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
