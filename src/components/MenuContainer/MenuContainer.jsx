import React, { useState } from "react";
import { GiConverseShoe } from "react-icons/gi";
import { Container, Logo, SubMenu, IconButton } from "./MenuContainerStyled";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PopperItem from "../PopperItem/PopperItem";
import { useDispatch } from "react-redux";
import { openLoginPopupFunc } from "../../redux/actions/actions";
import ToolTip from "../ToolTip/ToolTip";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const [filterActive, setFilterActive] = useState(false);
  const [themeActive, setThemeActive] = useState(false);

  // Icon Functions
  const AccountFunc = () => {
    if (localStorage.getItem("logined")) {
      console.log("go to /account");
    } else {
      dispatch(openLoginPopupFunc(true));
    }
  };

  const FilterFunc = () => {
    setFilterActive((prev) => !prev);
  };

  const ThemeFunc = () => {
    setThemeActive((prev) => !prev);
  };

  const WishListFunc = () => {};

  const CartFunc = () => {};

  return (
    <Container>
      <Logo>
        <GiConverseShoe size={70} />
      </Logo>
      <SubMenu>
        <ToolTip
          label="Account"
          placement="right"
          element={
            <IconButton onClick={() => AccountFunc()}>
              <AccountCircleRoundedIcon />
            </IconButton>
          }
        />
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
            "&:hover": {
              background: "#000000",
              color: "#ffffff",
            },
          }}
          btnInnerContent={
            <ToolTip
              label="Filter"
              placement="right"
              element={<FilterAltOutlinedIcon />}
              distance={"18px"}
            />
          }
          popPosition={{ vertical: "top", horizontal: "right" }}
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
            "&:hover": {
              background: "#000000",
              color: "#ffffff",
            },
          }}
          btnInnerContent={
            <ToolTip
              label="Themes"
              placement="right"
              element={<SettingsSuggestIcon />}
              distance={"18px"}
            />
          }
          popPosition={{ vertical: "top", horizontal: "right" }}
          innerContent={"I am Angshuman"}
        />
        <ToolTip
          label="Wishlist"
          placement="right"
          element={
            <IconButton onClick={() => WishListFunc()}>
              <FavoriteBorderIcon />
            </IconButton>
          }
        />
        <ToolTip
          label="Cart"
          placement="right"
          element={
            <IconButton onClick={() => CartFunc()}>
              <LocalMallIcon />
            </IconButton>
          }
        />
      </SubMenu>
    </Container>
  );
};

export default MenuContainer;
