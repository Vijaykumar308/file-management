import { useState } from "react";
import { NavLink, } from "react-router-dom";
import { loginUser} from "../../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AUTHENCATION } from "../../redux/authReducer";


 function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiResError, setapiResError]  = useState('');

  // redux store
  const {loading, userData, error} = useSelector(state => state.user);
  // console.log(error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   let userCredentials = {
  //     username, password
  //   }

  //   const authecation = ()=> {
  //     return {type: AUTHENCATION};
  //   }

  //   dispatch(loginUser(userCredentials))
  //   .then((result) => {
  //     if(result.payload) {
  //       setUsername('');
  //       setPassword('');
  //       dispatch(authecation());
  //       <Navigate to="/" />;
  //     }
  //   });

  // }

  const handleLogin = (e) => {
    e.preventDefault();
    const userCredentials = { username, password };

    dispatch(loginUser(userCredentials))
      .then((result) => {
        console.log('my resut', result.payload);
        if (userData?.status == 200 || result.payload.success) {
          setUsername('');
          dispatch({ type: AUTHENCATION });
          setPassword('');
          navigate('/');
        }
        else {
          setapiResError(result.payload.message);
          // console.log('sfsg', result.payload.message);
        }
      })
      .catch((error) => {
          console.log('xcvxv',error);
      });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full" />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {
          apiResError && 
        <div className="bg-red-400 py-2 px-4 capitalize rounded-md text-white">{apiResError}</div>
        }

        <form onSubmit={handleLogin}>
        
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
          </div>
        
          <div className="mb-6 text-blue-500">
            <NavLink to="#" className="hover:underline">Forgot Password?</NavLink>
          </div>
        
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
            {loading ? "Loading..." : 'Login'}
          </button>
        </form>
      
        <div className="mt-6  text-center">
          <span>Don't Have an Account ? </span>
          <NavLink to="/register" className="text-blue-500 hover:underline">Sign up</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login;