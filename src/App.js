import "./App.css";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import TopContent from "./components/TopContent/TopContent";
import { Main } from "./AppStyled";
import MainContainer from "./components/MainContainer/MainContainer";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { notificationFunc } from "./redux/actions/actions"

function App() {
  const dispatch = useDispatch()
  const {notification} = useSelector((state) => state);

  useEffect(()=>{
    if(notification?.open) {
      setTimeout(() => {
        dispatch(notificationFunc({open: false, status: "", message: ""}));
      }, 5000);
    }
  },[dispatch, notification])

  return (
    <div className="App">
      <MenuContainer />
      <Main>
        <TopContent />
        <MainContainer />
      </Main>
      <Notification open={notification.open} status={notification.status} message={notification.message}/>
    </div>
  );
}

export default App;
