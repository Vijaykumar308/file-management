import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import routes from "./routes/routes";
import { useEffect, useState } from 'react';
import {PrivateRoute, PublicRoute} from './components/ProtectedRoutes';

function App() {
  const navigator = useNavigate();
  const [isAuthencated, setIsAuthencated] = useState(false);

  return (
    <>
    <Routes>
       {routes.map((route, index) => {
        if(route.isPrivate) {
            return (
              <Route 
                key={index} 
                path={route.path} 
                element={<PrivateRoute element={route.element} isAuthencated={isAuthencated} />} 
              />
            );
        }

        return (
          <Route
            key={index}
            path={route.path}
            element={<PublicRoute element={route.element} isAuthencated={isAuthencated} />}
          />
        );
      })}
    </Routes>
    </>
  )
}

export default App
