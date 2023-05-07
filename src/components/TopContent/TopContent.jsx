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
        <GiRunningShoe size={45} />
      </MobViewLogo>
      <TopCombo>
        <SearchBar />
        <MenuComp
          shape="noShape"
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
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 1rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  @media screen and (max-width: 480px) {
    margin-bottom: 0rem;
  }
`;
