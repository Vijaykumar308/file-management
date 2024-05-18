import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';

import routes from './routes/routes';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/login" element= {<Login />} />

        
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
