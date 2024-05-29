import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = [
  { 
    path: '/', 
    element: <HomePage />,
    isPrivate:true
  },

  { 
    path: '/register', 
    element: <Register />,
    isPrivate:false
  },

  { 
    path: '/login',
    element: <Login />,
    isPrivate:false
  },

  { 
    path: '*', 
    element: <NotFound />,
    isPrivate:false
  },
];

export default routes;