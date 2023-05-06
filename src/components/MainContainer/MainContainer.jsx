import React from "react";
import PopUpModal from "../PopUpModal/PopUpModal";
import MasonryView from "../MasonryView/MasonryView";
import AdBanner from "../AdBanner/AdBanner";
import EqualSizeView from "../EqualSizeView/EqualSizeView";
import { useSelector } from "react-redux";

const MainContainer = ({ viewType = "multiSize" }) => {
  const { themeLayout } = useSelector((state) => state);

  const handleClose = () => {
  };

  return (
    <React.Fragment>
      <AdBanner />
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
