import React, { useState } from "react";
import { GiRunningShoe } from "react-icons/gi";
import { Container, Logo, SubMenu, IconButton } from "./MenuContainerStyled";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch } from "react-redux";
import { openLoginPopupFunc } from "../../redux/actions/actions";
import ToolTip from "../ToolTip/ToolTip";
import { Divider } from "@mui/material";
import FilterComp from "../FilterComp/FilterComp";
import MobViewPopUp from "../MobMenuBar/MobViewPopUp";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const [openOnTouchFilter, setOpenOnTouchFilter] = useState(false);

  // Icon Functions
  const AccountFunc = () => {
    if (localStorage.getItem("logined")) {
      console.log("go to /account");
    } else {
      dispatch(openLoginPopupFunc(true));
    }
  };

  const WishListFunc = () => {};

  const CartFunc = () => {};

  const handleOnTouchFilter = () => {
    setOpenOnTouchFilter(false);
  };

  return (
    <Container>
      <Logo>
        <GiRunningShoe size={70} />
      </Logo>
      <SubMenu>
        <ToolTip
          top={"6rem !important"}
          label={<FilterComp />}
          placement="right"
          color="#000000"
          bgColor="#ffffff"
          element={
            <IconButton onTouchEnd={() => setOpenOnTouchFilter(true)}>
              <FilterAltOutlinedIcon />
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
      {openOnTouchFilter && (
        <MobViewPopUp
          element={<FilterComp mobView={true} />}
          open={openOnTouchFilter}
          handleClose={handleOnTouchFilter}
        />
      )}
    </Container>
  );
};

export default MenuContainer;
