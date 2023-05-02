import React,{useState} from "react";
import Product from "../Product/Product";
import { MultiSizeContainer, SameSizeContainer } from "./MainContainerStyled";
import { mockProductData } from "../../assets/mock/mockProductData";
import PopUpModal from "../PopUpModal/PopUpModal";

const MainContainer = ({ viewType = "multiSize" }) => {
  const [openProduct, setOpenProduct] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  const handleClose = () => {
    setOpenProduct(false);
  };

  return (
    <React.Fragment>
      {viewType === "multiSize" ? (
        <MultiSizeContainer>
          {Object.keys(mockProductData).map((i, index) => (
            <Product
              key={`${i}-${index}`}
              size={mockProductData[i].multiSize}
              image={mockProductData[i].image[0]}
              handleClick={()=>{
                setOpenProduct(true);
                setProductInfo(mockProductData[i]);
            }}
            />
          ))}
        </MultiSizeContainer>
      ) : (
        <SameSizeContainer>Hi</SameSizeContainer>
      )}
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
