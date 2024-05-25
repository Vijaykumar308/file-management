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
    const currrentFolder = navigatorPath[navigatorPath.length -1]
    console.log(currrentFolder)
    let index = navigatorPath.indexOf(currrentFolder);
    if (index !== -1) {
      const newPath = navigatorPath.splice(index, 1);
      setNavigatorPath([...newPath])
  }
  }


  return (
    <>
      <Header />
      <NavigatorHeader navigatorPath={navigatorPath} />
      <div onClick={handleGoBack}>Go back</div>
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
