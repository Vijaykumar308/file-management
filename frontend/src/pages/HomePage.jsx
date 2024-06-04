import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import NavigatorHeader from "../components/NavigatorHeader";
import WrapperComponent from "../components/WrapperComponent";
import { AppContext } from "../context/AppContext";
import  FolderComponent from "../components/FolderComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectories } from "../redux/dirReducer";
import {jwtDecode} from "jwt-decode";
import { AUTHENCATION } from "../redux/authReducer";



function HomePage() {
  const {showFolder, setShowFolder} = useContext(AppContext);
  const [navigatorPath,setNavigatorPath] = useState([])
  const dispatch = useDispatch();
  const {dir, status, error} = useSelector(state => state.dir);
  const {isAuthencated} = useSelector(state => state.auth);

  const handleFolderClick= (folderName)=>{
    setNavigatorPath([...navigatorPath,folderName])
  }
  
  const handleGoBack =()=>{   
    const updatedPath = navigatorPath.slice(0, -1);
    setNavigatorPath(updatedPath);
    console.log(navigatorPath);
  }
  
  useEffect(()=> {
    console.log('first time rander');
    const userData = localStorage.getItem('user') || null;
    const user = JSON.parse(userData) || null;
    const decoded = jwtDecode(user.token);
    // console.log("decoded:",decoded);
    dispatch(fetchDirectories(decoded.id));

    () => {
      console.log('clen up function');
    }

  }, [dispatch, isAuthencated]);

  useEffect(() => {
    if (status === 'succeeded') {
      setShowFolder(dir);
    }
  }, [status, dir]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  return (
    <>
      <Header />
      <NavigatorHeader navigatorPath={navigatorPath} />
      {navigatorPath.length > 0 && <div onClick={handleGoBack} style={{cursor:"pointer",outline:"1px solid gray",
      width:"100px",margin:"1px 10px",textAlign:"center"}}>Go back</div>  } 
      <WrapperComponent> 
        <div className="grid grid-cols-5 place-items-center">
            {
            // const randomNumber = Math.floor(Math.random(10) * 10);
            showFolder.map((folderInfo) => (
              <FolderComponent key={folderInfo._id}
              folderName={folderInfo.dirName}
              handleFolderClick={handleFolderClick}
              
              />
            ))}
        </div>
      </WrapperComponent>
    </>
  )
}

export default HomePage;
