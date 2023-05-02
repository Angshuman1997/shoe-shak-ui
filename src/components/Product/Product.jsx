import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { ProductContainer } from "./ProductStyled";
const Product = ({ size, image, handleClick }) => {

  return (
      <ProductContainer size={size} onClick={()=>handleClick()}>
        <img className="mainPic" alt="img-pic" src={image} />
        <div className="content">
          <h3>Sample Name</h3>
          <button className="wishlist">
            <FavoriteRoundedIcon />
          </button>
        </div>
      </ProductContainer>
  );
};

export default Product;
