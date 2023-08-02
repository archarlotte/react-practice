import './App.css';
import { Routes, Route,Link, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <div>
        <span>header</span>
        <div>
          <Link to={'/home'}>home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/login'}>Login</Link>
        </div>
        <hr />
      </div>
      <div>
        {
          <Routes>
            <Route path='/' element={<Navigate to={'/home'} />}/>
            <Route path='/home' element={<Home />}>
            <Route path='/home/recommend' element={<Home />} />
            <Route path='/home/ranking' element={<Home />} />
            </Route>
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        }
      </div>
    </div>
  );
}

export default App;
