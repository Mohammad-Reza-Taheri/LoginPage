import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import LoginBox from './components/LoginBox/LoginBox';
function App() {
  return (
    <div className="App">
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route  element={<LoginBox/>}/>
 </Routes>
    </div>
  );
}

export default App;
