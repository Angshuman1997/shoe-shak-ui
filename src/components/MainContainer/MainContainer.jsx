import React from "react";
import PopUpModal from "../PopUpModal/PopUpModal";
import MasonryView from "../MasonryView/MasonryView";
import AdBanner from "../AdBanner/AdBanner";
import EqualSizeView from "../EqualSizeView/EqualSizeView";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainContainer = () => {
  const { themeLayout } = useSelector((state) => state);

  const handleClose = () => {};

  return (
    <React.Fragment>
      <AdBanner />
      <Refine view={themeLayout}>
        <div>
          <button>Filter</button>
        </div>
        <div>
          <button>Sort</button>
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
    padding: 0.5rem 0.8rem;
    border: 2px solid #000000;
    cursor: pointer;
    width: 5rem;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 25px;
    background: black;
    color: #ffffff;
    @media screen and (min-width: 1440px) {
      font-size: 1.5rem;
      width: 8rem;
    }
  }
`;
