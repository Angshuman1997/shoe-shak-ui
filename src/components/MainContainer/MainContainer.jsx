import React, { useState } from "react";
import PopUpModal from "../PopUpModal/PopUpModal";
import MasonryView from "../MasonryView/MasonryView";

const MainContainer = ({ viewType = "multiSize" }) => {
  const [openProduct, setOpenProduct] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  const handleClose = () => {
    setOpenProduct(false);
  };

  return (
    <React.Fragment>
      <div>
        <MasonryView />
      </div>
      <PopUpModal
        open={openProduct}
        handleClose={handleClose}
        borderRadius={"1rem"}
        element={<React.Fragment>{productInfo.name}</React.Fragment>}
      />
    </React.Fragment>
  );
};

export default MainContainer;
