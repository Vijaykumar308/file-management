import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from "./routes/routes";

function App() {
  return (
    <>
    <Routes>
       {routes.map((route, index) => {
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
