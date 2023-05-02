import React from "react";
import { FaBars } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import SearchBar from "../SearchBar/SearchBar";
import { Container, MobViewLogo, MobViewMenuBar } from "./TopContentStyled";

const TopContent = () => {
  return (
    <Container>
      <MobViewLogo>
        <GiConverseShoe size={50} />
      </MobViewLogo>
      <SearchBar />
      <MobViewMenuBar>
        <FaBars size={30} />
      </MobViewMenuBar>
    </Container>
  );
};

export default TopContent;
