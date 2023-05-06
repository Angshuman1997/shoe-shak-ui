import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { themeColorFunc, themeLayoutFunc } from "../../redux/actions/actions";
import ScrollContainer from "react-indiana-drag-scroll";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

const ThemeComp = ({ mobView = false }) => {
  const dispatch = useDispatch();
  const { themeColor, themeLayout } = useSelector((state) => state);
  const [colorBtn, setColorBtn] = useState([
    {
      color: "#ffa500",
      highlight: themeColor === "#ffa500",
    },
    {
      color: "#66ffff",
      highlight: themeColor === "#66ffff",
    },
    {
      color: "#f519a0",
      highlight: themeColor === "#f519a0",
    },
    {
      color: "#d0ff00",
      highlight: themeColor === "#d0ff00",
    },
    {
      color: "#f0dc82",
      highlight: themeColor === "#f0dc82",
    },
    {
      color: "#c1cdcd",
      highlight: themeColor === "#c1cdcd",
    },
    {
      color: "#707372",
      highlight: themeColor === "#707372",
    },
  ]);

  const scrollTo = () => {
    const element = document.getElementById(themeColor);
    if (element) {
      element.scrollIntoView();
    }
  };

  const handleChangeLayout = (view) =>{
    dispatch(themeLayoutFunc(view))
  };

  const handleColorChange = (color) => {
    const tempObj = [...colorBtn];
    Object.keys(tempObj).forEach((i) => {
      if (tempObj[i].color === color) {
        tempObj[i].highlight = true;
      } else {
        tempObj[i].highlight = false;
      }
    });
    setColorBtn(tempObj);
    dispatch(themeColorFunc(color));
  };

  useEffect(() => {
    scrollTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeColor]);

  return (
    <Box
      sx={{
        width: mobView ? "100%" : 250,
        height: mobView ? "100%" : 250,
      }}
    >
      <Container>
        <Header>
          <span>THEME</span>
        </Header>
        <InnerContainer>
          <InnerHeader>
            <span>Color</span>
          </InnerHeader>
          <ScrollContainer className="scroll-container" hideScrollbars={false}>
            <OptionButtons>
              {Object.keys(colorBtn).map((i, index) => (
                <ItemBtnColor
                  id={colorBtn[i].color}
                  onClick={() => handleColorChange(colorBtn[i].color)}
                  key={`${i}-${index}`}
                  color={colorBtn[i].color}
                  highlight={colorBtn[i].highlight}
                >
                  <span className="dot"></span>
                </ItemBtnColor>
              ))}
            </OptionButtons>
          </ScrollContainer>
        </InnerContainer>
        <InnerContainer>
          <InnerHeader>
            <span>Layout</span>
          </InnerHeader>
          <ScrollContainer className="scroll-container" hideScrollbars={false}>
            <OptionButtons>
              <ItemBtnLayout id="multisize" onClick={()=>handleChangeLayout("multisize")} highlight={themeLayout === "multisize"}>
                <SpaceDashboardOutlinedIcon />
              </ItemBtnLayout>
              <ItemBtnLayout id="equalsize" onClick={()=>handleChangeLayout("equalsize")} highlight={themeLayout === "equalsize"}>
                <WindowOutlinedIcon />
              </ItemBtnLayout>
            </OptionButtons>
          </ScrollContainer>
        </InnerContainer>
      </Container>
    </Box>
  );
};

export default ThemeComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3%;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0) !important; 
  .indiana-scroll-container {
    cursor: pointer;
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      height: 4px;
      width: 4px;
      border: 1px solid transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #b3acac;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.2rem;
    padding: 0.5rem;
    font-family: system-ui;
  }
`;

const InnerContainer = styled.div`
  margin: 0 0.5rem;
`;

const InnerHeader = styled.div`
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  margin: 0.5rem 0;
`;

const OptionButtons = styled.div`
  display: flex;
  column-gap: 10%;
  cursor: pointer;
`;

const ItemBtnColor = styled.button`
  margin-bottom: 1rem;
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: border 0.1s;
  .dot {
    height: 25px;
    width: 25px;
    background-color: ${(props) => (props?.color ? props.color : "#000000")};
    border: ${(props) => (props.highlight ? "0.2rem solid black" : "")};
    border-radius: 50%;
    display: inline-block;
    transition: border 0.1s;
  }
`;

const ItemBtnLayout = styled.button`
  margin-bottom: 1rem;
  -webkit-tap-highlight-color: transparent;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: border 0.1s;
  border: ${(props) => (props.highlight ? "0.2rem solid #005aff" : "0.2rem solid #ffffff")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
