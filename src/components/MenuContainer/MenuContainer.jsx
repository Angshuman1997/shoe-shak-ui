import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import { Container, Logo, SubMenu, IconButton } from "./MenuContainerStyled";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch } from "react-redux";
import { openLoginPopupFunc } from "../../redux/actions/actions";
import ToolTip from "../ToolTip/ToolTip";
import { useNavigate } from "react-router-dom";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Icon Functions
  const AccountFunc = () => {
    if (localStorage.getItem("logined") === "true") {
      navigate("/account");
    } else {
      dispatch(openLoginPopupFunc(true));
    }
  };

  const WishListFunc = () => {};

  const CartFunc = () => {};

  return (
    <Container>
      <Logo>
        <GiRunningShoe size={70} />
      </Logo>
      <SubMenu>
        <ToolTip
          distance="0.1rem"
          label="Account"
          placement="right"
          element={
            <IconButton onClick={() => AccountFunc()}>
              <AccountCircleRoundedIcon />
            </IconButton>
          }
        />
        <ToolTip
        distance="0.1rem"
          label="Wishlist"
          placement="right"
          element={
            <IconButton onClick={() => WishListFunc()}>
              <FavoriteBorderIcon />
            </IconButton>
          }
        />
        <ToolTip
        distance="0.1rem"
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
