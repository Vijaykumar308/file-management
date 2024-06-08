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

  const handleFolderClick= (folderName, folderId)=>{
    const userData = localStorage.getItem('user') || null;
    const user = JSON.parse(userData) || null;
    const decoded = jwtDecode(user.token);
    
    dispatch(fetchDirectories({userId:decoded.id, parent_dir_id: folderId}));
    setNavigatorPath([...navigatorPath, folderName])
  }
  
  const handleGoBack =()=>{   
    const updatedPath = navigatorPath.slice(0, -1);
    setNavigatorPath(updatedPath);
    console.log(navigatorPath);
  }
  
  useEffect(()=> {
    const userData = localStorage.getItem('user') || null;
    const user = JSON.parse(userData) || null;
    const decoded = jwtDecode(user.token);
    // console.log("decoded:",decoded);
    dispatch(fetchDirectories({userId:decoded.id, parent_dir_id:'home'}));

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
              <FolderComponent 
                key={folderInfo._id}
                folderName={folderInfo.dirName}
                folderId={folderInfo._id}
                handleFolderClick={handleFolderClick}
              />
            ))}
        </div>
      </WrapperComponent>
    </>
  )
}

export default HomePage;
