import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from "./routes/routes";
import {PrivateRoute, PublicRoute} from './components/ProtectedRoutes';
import { useSelector } from 'react-redux';

function App() {
  const {isAuthencated} = useSelector(state => state.auth);

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
