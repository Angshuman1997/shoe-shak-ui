import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import SearchBar from "../SearchBar/SearchBar";
import { Container, MobViewLogo } from "./TopContentStyled";
import MobMenuBar from "../MobMenuBar/MobMenuBar";

const TopContent = () => {
  
  return (
    <Container>
      <MobViewLogo>
        <GiRunningShoe size={50} />
      </MobViewLogo>
      <SearchBar />
      <MobMenuBar />
    </Container>
  );
};

export default TopContent;
