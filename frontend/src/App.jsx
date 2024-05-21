import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import routes from "./routes/routes";

function App() {

  return (
    <>
    <Routes>
       {routes.map((route, index) => {
          console.log(route.path);
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
