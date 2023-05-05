import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { Container, Logo, SubMenu, IconButton } from "./MenuContainerStyled";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch } from "react-redux";
import { openLoginPopupFunc } from "../../redux/actions/actions";
import ToolTip from "../ToolTip/ToolTip";
import { Divider } from "@mui/material";
import ThemeComp from "../ThemeComp/ThemeComp";

const MenuContainer = () => {
  const dispatch = useDispatch();

  // Icon Functions
  const AccountFunc = () => {
    if (localStorage.getItem("logined")) {
      console.log("go to /account");
    } else {
      dispatch(openLoginPopupFunc(true));
    }
  };

  const FilterFunc = () => {};

  const ThemeFunc = () => {};

  const WishListFunc = () => {};

  const CartFunc = () => {};

  return (
    <Container>
      <Logo>
        <GiConverseShoe size={70} />
      </Logo>
      <SubMenu>
        <ToolTip
          label="Filters"
          placement="right"
          color="#000000"
          bgColor="#ffffff"
          element={
            <IconButton onClick={() => FilterFunc()}>
              <FilterAltOutlinedIcon />
            </IconButton>
          }
        />
        <ToolTip
          top={"5rem !important"}
          label={<ThemeComp />}
          placement="right"
          color="#000000"
          bgColor="#ffffff"
          element={
            <IconButton onClick={() => ThemeFunc()}>
              <SettingsSuggestIcon />
            </IconButton>
          }
        />
        <Divider variant="middle" flexItem sx={{ border: "1px solid" }} />
        <ToolTip
          label="Account"
          placement="right"
          element={
            <IconButton onClick={() => AccountFunc()}>
              <AccountCircleRoundedIcon />
            </IconButton>
          }
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
