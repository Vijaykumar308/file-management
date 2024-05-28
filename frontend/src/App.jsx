import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import routes from "./routes/routes";
import Login from './pages/auth/Login';
import { useEffect, useState } from 'react';

function App() {
  const navigator = useNavigate();
  const [isAuthencated, setIsAuthencated] = useState(true);

  useEffect(()=>{
    if(!isAuthencated) {
      navigator('/login');
    }
  }, [])
  return (
    <>
    <Routes>
       {routes.map((route, index) => {
        if(route.isPrivate) {
            return (
              <Route 
                key={index} 
                path={route.path} 
                element={route.element} 
              />
            );
        }

        return (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        );
      })}
    </Routes>
    </>
  )
}

export default App
