import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = [
  { 
    path: '/', 
    element: <HomePage />,
    isPrivate:false
  },

  { 
    path: '/register', 
    element: <Register />,
    isPrivate:true
  },

  { 
    path: '/login',
    element: <Login />,
    isPrivate:true
  },

  { 
    path: '*', 
    element: <NotFound />,
    isPrivate:true
  },
];

export default routes;