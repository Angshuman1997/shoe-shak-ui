import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import SearchBar from "../SearchBar/SearchBar";
import { Container, MobViewLogo } from "./TopContentStyled";
import MobMenuBar from "../MobMenuBar/MobMenuBar";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import styled from "styled-components";
import MenuComp from "../MenuComp/MenuComp";
import ThemeComp from "../ThemeComp/ThemeComp";

const TopContent = () => {
  return (
    <Container>
      <MobViewLogo>
        <GiRunningShoe size={50} />
      </MobViewLogo>
      <TopCombo>
        <SearchBar />
        <MenuComp
          innerContent={<ThemeComp mobView={true} />}
          btn={<SettingsSuggestIcon />}
        />
      </TopCombo>
      <MobMenuBar />
    </Container>
  );
};

export default TopContent;

const TopCombo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
