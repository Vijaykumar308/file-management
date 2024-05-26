import { useContext, useState } from "react";
import Header from "../components/Header";
import NavigatorHeader from "../components/NavigatorHeader";
import WrapperComponent from "../components/WrapperComponent";
import { AppContext } from "../context/AppContext";
import  FolderComponent from "../components/FolderComponent";


function HomePage() {

  const {showFolder} = useContext(AppContext);
  const [navigatorPath,setNavigatorPath] = useState([])
  console.log(showFolder);

  const handleFolderClick= (folderName)=>{
    setNavigatorPath([...navigatorPath,folderName])
  }

  const handleGoBack =()=>{   
    const updatedPath = navigatorPath.slice(0, -1);
    setNavigatorPath(updatedPath);
    console.log(navigatorPath);
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
            showFolder.map(folderInfo => (
              <FolderComponent key={folderInfo.id}
              folderName={folderInfo.name}
              handleFolderClick={handleFolderClick}
              
              />
            ))}
        </div>
      </WrapperComponent>
    </>
  )
}

export default HomePage;
