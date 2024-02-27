import React from 'react';
import Home from './page/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './page/Register';
import SignIn from './page/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Profile from './page/Profile';
const App = () => {
  return (
    <div>
 <Router>
  <Routes>
  <Route element={<PrivateRoute/>} >
    <Route path='/' element={<Home/>}/>
  </Route>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
</Router>
    </div>
  )
}

export default App;
