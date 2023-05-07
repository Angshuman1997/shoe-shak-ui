import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { notificationFunc, openLoginPopupFunc } from "./redux/actions/actions";
import PopUpModal from "./components/PopUpModal/PopUpModal";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";

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
    <div className="App" style={{ backgroundColor: themeColor }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/adproduct" element={<div>Ad Products</div>} />
          <Route path="/account" element={<div>Account</div>} />
          <Route path="/wishlist" element={<div>wishlist</div>} />
          <Route path="/cart" element={<div>Cart</div>} />
          <Route path="/advanced" element={<div>AdvancedLogin</div>} />
          <Route path="/adminportal" element={<div>Admin</div>} />
          <Route path="/sellerportal" element={<div>Seller</div>} />
          <Route path="/deliveryportal" element={<div>Delivery</div>} />
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
    </div>
  );
}

export default App;

// <Router>
//         <div>
//           <h2>Welcome to React Router Tutorial</h2>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <ul className="navbar-nav mr-auto">
//               <li>
//                 <Link to={"/"} className="nav-link">Home</Link>
//               </li>
//               <li>
//                 <Link to={"/contact"} className="nav-link">Contact</Link>
//               </li>
//               <li>
//                 <Link to={"/about"} className="nav-link">About</Link>
//               </li>
//             </ul>
//           </nav>
//           <hr />
//           <Routes>
//             <Route exact path="/" component={<div>Home</div>} />
//             <Route path="/contact" component={<div>Contact</div>} />
//             <Route path="/about" component={<div>About</div>} />
//           </Routes>
//         </div>
//       </Router>
