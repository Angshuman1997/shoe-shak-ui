import "./App.css";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import TopContent from "./components/TopContent/TopContent";
import { Main } from "./AppStyled";
import MainContainer from "./components/MainContainer/MainContainer";
// import Notification from "./components/Notification/Notification";

function App() {
  return (
    <div className="App">
      <MenuContainer />
      <Main>
        <TopContent />
        <MainContainer />
      </Main>
    </div>
  );
}

export default App;
