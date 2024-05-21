import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
];

export default routes;