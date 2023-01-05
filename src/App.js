// import logo from '../src/main/image/Logo.png';
// import './App.css';
import {BrowserRouter,Route , Routes} from 'react-router-dom'
import Chat from './main/Chat'
import Login from './main/Login';
import SignUp from './main/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/Chat' element={<Chat />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<SignUp />} />
   
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
