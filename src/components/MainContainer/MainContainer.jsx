import React from "react";
import PopUpModal from "../PopUpModal/PopUpModal";
import MasonryView from "../MasonryView/MasonryView";
import AdBanner from "../AdBanner/AdBanner";
import EqualSizeView from "../EqualSizeView/EqualSizeView";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SortIcon from '@mui/icons-material/Sort';

const MainContainer = () => {
  const { themeLayout } = useSelector((state) => state);

  const handleClose = () => {};

  return (
    <React.Fragment>
      <AdBanner />
      <Refine view={themeLayout}>
        <div>
          <button><FilterAltRoundedIcon /></button>
        </div>
        <div>
          <button><SortIcon /></button>
        </div>
      </Refine>
      {themeLayout === "multisize" ? <MasonryView /> : <EqualSizeView />}
      <PopUpModal
        open={false}
        handleClose={handleClose}
        borderRadius={"1rem"}
        element={<React.Fragment>Hi</React.Fragment>}
      />
    </React.Fragment>
  );
};

export default MainContainer;

const Refine = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  column-gap: 3%;
  margin: 1rem 0 0 0;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 0.5rem 0.8rem;
    border: 2px solid #feffff;
    cursor: pointer;
    width: 4rem;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 14px;
    background: #feffff;
    color: #000000;
    transition: 0.5s;
    @media screen and (min-width: 1440px) {
      width: 6rem;
    }
    &:hover {
      background: #000000;
      color: #feffff;
      border: 2px solid #000000;
    }
  }
`;
