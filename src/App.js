import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { notificationFunc, openLoginPopupFunc } from "./redux/actions/actions";
import PopUpModal from "./components/PopUpModal/PopUpModal";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import AccountPage from "./pages/AccountPage/AccountPage";

function App() {
  const dispatch = useDispatch();
  const { notification, openLoginPopup, themeColor } = useSelector(
    (state) => state
  );

  const handleLoginClose = () => {
    dispatch(openLoginPopupFunc(false));
  };

  useEffect(() => {
    if (notification?.open) {
      setTimeout(() => {
        dispatch(notificationFunc({ open: false, status: "", message: "" }));
      }, 5000);
    }
  }, [dispatch, notification]);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App" style={{ backgroundColor: themeColor }}>
                <HomePage />
              </div>
            }
          />

          <Route
            path="/account"
            element={
              <div className="App" style={{ backgroundColor: themeColor, overflow: "hidden"}}>
                <AccountPage />
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <PopUpModal
        open={openLoginPopup}
        handleClose={handleLoginClose}
        borderRadius={"0.2rem"}
        element={<Login handleOnClickClose={handleLoginClose} />}
      />
      <Notification
        open={notification.open}
        status={notification.status}
        message={notification.message}
      />
    </React.Fragment>
  );
}

export default App;

// <Route path="/adproduct" element={<div className="App" style={{ backgroundColor: themeColor }}><div>Ad Products</div></div>} />
// <Route path="/wishlist" element={<div>wishlist</div>} />
// <Route path="/cart" element={<div>Cart</div>} />
// <Route path="/advanced" element={<div>AdvancedLogin</div>} />
// <Route path="/adminportal" element={<div>Admin</div>} />
// <Route path="/sellerportal" element={<div>Seller</div>} />
// <Route path="/deliveryportal" element={<div>Delivery</div>} />
