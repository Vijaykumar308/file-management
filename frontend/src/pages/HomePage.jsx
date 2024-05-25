import { useContext } from "react";
import Header from "../components/Header";
import NavigatorHeader from "../components/NavigatorHeader";
import WrapperComponent from "../components/WrapperComponent";
import { AppContext } from "../context/AppContext";
import  FolderComponent from "../components/FolderComponent";


function HomePage() {

  const {showFolder} = useContext(AppContext);
  console.log(showFolder);


  return (
    <>
      <Header />
      <NavigatorHeader />
      <WrapperComponent> 
        <div className="grid grid-cols-5 place-items-center">
            {showFolder.map(folderInfo => (
              <FolderComponent key={folderInfo.id}
              folderName={folderInfo.name}
              />
            ))}
        </div>
      </WrapperComponent>
    </>
  )
}

export default HomePage;
