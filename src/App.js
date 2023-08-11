import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import LoginBox from './components/LoginBox/LoginBox';
import Login from './components/ResponsiveLogin/Login';
import Game from './pages/Game/Game';
function App() {
  return (
    <div className="App">
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route path='/game' element={<Game/>}/>
  <Route element={<LoginBox/>}/>
  <Route element={<Login/>}/>





  
 </Routes>
    </div>
  );
}

export default App;
