import React, { useState } from "react";
import { GiConverseShoe } from "react-icons/gi";
import { Container, Logo, SubMenu, IconButton } from "./MenuContainerStyled";
import PopUpModal from "../PopUpModal/PopUpModal";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PopperItem from "../PopperItem/PopperItem";
import Login from "../Login/Login";

const MenuContainer = () => {
  const [accountActive, setAccountActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [themeActive, setThemeActive] = useState(false);
  const [wishListActive, setWishListActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const [openPopUp, setOpenPopUp] = useState(false);

  // Icon Functions
  const AccountFunc = () => {
    if (localStorage.getItem("logined")) {
      console.log("go to /account");
    } else {
      setOpenPopUp(true);
    }
    setAccountActive((prev) => !prev);
  };

  const accountHandleClose = () =>{
    setOpenPopUp(false);
    setAccountActive(false);
  };

  const FilterFunc = () => {
    setFilterActive((prev) => !prev);
  };

  const ThemeFunc = () => {
    setThemeActive((prev) => !prev);
  };

  const WishListFunc = () => {
    setWishListActive((prev) => !prev);
  };

  const CartFunc = () => {
    setCartActive((prev) => !prev);
  };

  return (
    <Container>
      <Logo>
        <GiConverseShoe size={70} />
      </Logo>
      <SubMenu>
        <div>
          <IconButton active={accountActive} onClick={() => AccountFunc()}>
            <AccountCircleRoundedIcon />
          </IconButton>
          <PopperItem
              func={FilterFunc}
              btnStyle={{
              width: "50px",
              height: "50px",
              minWidth: "40px",
              borderRadius: "40%",
              border: "2px solid #717273",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              margin: "15px 0",
              color: filterActive ? "#ffffff" : "#000000",
              background: filterActive ? "#000000" : "#ffffff",
              transition: "0.3s",
              '&:hover':{
                background: '#000000',
                color: '#ffffff'
              }
            }}
            btnInnerContent={<FilterAltOutlinedIcon />}
            popPosition={{ vertical: 'top', horizontal: "right" }}
            innerContent={"I am Angshuman"}
          />
          <PopperItem
              func={ThemeFunc}
              btnStyle={{
              width: "50px",
              height: "50px",
              minWidth: "40px",
              borderRadius: "40%",
              border: "2px solid #717273",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              margin: "15px 0",
              color: themeActive ? "#ffffff" : "#000000",
              background: themeActive ? "#000000" : "#ffffff",
              transition: "0.3s",
              '&:hover':{
                background: '#000000',
                color: '#ffffff'
              }
            }}
            btnInnerContent={<SettingsSuggestIcon />}
            popPosition={{ vertical: 'top', horizontal: "right" }}
            innerContent={"I am Angshuman"}
          />
          <IconButton active={wishListActive} onClick={() => WishListFunc()}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton active={cartActive} onClick={() => CartFunc()}>
            <LocalMallIcon />
          </IconButton>
        </div>
      </SubMenu>
      <PopUpModal
        open={openPopUp}
        handleClose={accountHandleClose}
        borderRadius={"0.2rem"}
        element={<Login handleOnClickClose={accountHandleClose} />}
      />
    </Container>
  );
};

export default MenuContainer;
