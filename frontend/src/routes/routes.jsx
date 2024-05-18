import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
];

export default routes;