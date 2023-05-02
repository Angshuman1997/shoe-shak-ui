import React from "react";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import { SearchBox, SearchBtn } from "./SearchBarStyled";

const SearchBar = () => {
  return (
    <SearchBox>
      <input type="text" placeholder="Search..." />
      <SearchBtn>
          <DoubleArrowRoundedIcon />
      </SearchBtn>
    </SearchBox>
  );
};

export default SearchBar;
