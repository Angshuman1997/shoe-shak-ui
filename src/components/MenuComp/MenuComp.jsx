import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import styled from "styled-components";

export default function MenuComp({ innerContent, btn }) {
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
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          border: "0.14rem solid #ffffff",
          marginLeft: "1rem",
          color: "#000000",
          background: "#feffff",
          borderRadius: "0.5rem",
          boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',

          "@media screen and (max-width: 480px)": {
            display: "none",
          },
          
          "&:hover":{
            color: "#ffffff",
            border: "0.14rem solid #000000",
            background: "#000000",
            transition: "0.3s"
          }
        }}
      >
        {btn}
      </Button>
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
            X
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
  font-size: 1rem;
  font-weight: 900;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin-right: 0.5rem;
`;
