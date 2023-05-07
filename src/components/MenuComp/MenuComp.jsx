import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import styled from "styled-components";
import { Close } from "@mui/icons-material";

export default function MenuComp({ innerContent, btn, shape = "box" }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {shape === "noShape" ? (
        <NoShapeButton
          id="theme-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {btn}
        </NoShapeButton>
      ) : (
        <Button
          id="theme-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            padding: "10px 0",
            border: "0.14rem solid #ffffff",
            marginLeft: "1rem",
            color: "#000000",
            background: "#feffff",
            borderRadius: "0.5rem",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",

            "@media screen and (max-width: 480px)": {
              display: "none",
            },

            "&:hover": {
              color: "#ffffff",
              border: "0.14rem solid #000000",
              background: "#000000",
              transition: "0.3s",
            },
          }}
        >
          {btn}
        </Button>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Content id="theme-content">
          <CloseBtn onClick={handleClose} onTouchEnd={handleClose}>
            <Close />
          </CloseBtn>
          {innerContent}
        </Content>
      </Menu>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin-right: 0.5rem;
`;

const NoShapeButton = styled.button`
  background: transparent;
  border: none;
  margin: 0.2rem 0.5rem 0 0.2rem;
  cursor: pointer;
`;
