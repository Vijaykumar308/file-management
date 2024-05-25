import { useContext } from "react";
import Header from "../components/Header";
import NavigatorHeader from "../components/NavigatorHeader";
import WrapperComponent from "../components/WrapperComponent";
import { AppContext } from "../context/AppContext";

function HomePage() {

  const {showFolder} = useContext(AppContext);
  console.log(showFolder);


  return (
    <>
      <Header />
      <NavigatorHeader />

      <WrapperComponent>
      {showFolder.map(div => (
        <div key={div.id} style={{ width: '100px', height: '100px', background: 'lightblue', marginBottom: '10px' }}>
          
        </div>
      ))}
      </WrapperComponent>
    </>
  )
}

export default HomePage;
