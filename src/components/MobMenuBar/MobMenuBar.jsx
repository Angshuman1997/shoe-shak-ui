import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch } from "react-redux";
import { openLoginPopupFunc } from "../../redux/actions/actions";
import MobViewPopUp from "./MobViewPopUp";
import ThemeComp from "../ThemeComp/ThemeComp";

export default function MobMenuBar() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openPopup, setOpenPopup] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMobPopUp = () => {
    setOpenPopup(false);
  };

  const handleAccount = () => {
    dispatch(openLoginPopupFunc(true));
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <MobViewMenuBar onClick={handleClick}>
        <FaBars size={30} />
      </MobViewMenuBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "9rem",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            width: "100%",
            gridColumnGap: "6%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleAccount}
        >
          <Logo>
            <AccountCircleRoundedIcon />
          </Logo>
          <Text>Account</Text>
        </MenuItem>
        <MenuItem
          sx={{
            width: "100%",
            gridColumnGap: "6%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <Logo>
            <FilterAltOutlinedIcon />
          </Logo>
          <Text>Filter</Text>
        </MenuItem>
        <MenuItem
          sx={{
            width: "100%",
            gridColumnGap: "6%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={()=>{
            setOpenPopup(true);
            handleClose();
          }}
        >
          <Logo>
            <SettingsSuggestIcon />
          </Logo>
          <Text>Theme</Text>
        </MenuItem>
        <MenuItem
          sx={{
            width: "100%",
            gridColumnGap: "6%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <Logo>
            <FavoriteBorderIcon />
          </Logo>
          <Text>Wishlist</Text>
        </MenuItem>
        <MenuItem
          sx={{
            width: "100%",
            gridColumnGap: "6%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <Logo>
            <LocalMallIcon />
          </Logo>
          <Text>Cart</Text>
        </MenuItem>
      </Menu>
      <MobViewPopUp element={<ThemeComp mobView={true}/>} open={openPopup} handleClose={handleCloseMobPopUp}/>
    </React.Fragment>
  );
}

const MobViewMenuBar = styled.button`
  display: none;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: block;
    margin-left: 1rem;
  }
`;

const Logo = styled.span``;

const Text = styled.span`
  font-weight: 600;
  margin-bottom: 0.15rem;
`;
