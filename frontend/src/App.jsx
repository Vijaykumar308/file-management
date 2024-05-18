import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/register" element= {<Register />} />


      {/* {
        
        routes.map((route, index) => {
          <Route key={index} 
            path={route.path} 
            element={route.element} 
          />
        })
      } */}
    </Routes>
    </>
  )
}

export default App
