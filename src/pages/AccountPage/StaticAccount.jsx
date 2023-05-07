import React from "react";
import styled from "styled-components";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MenuComp from "../../components/MenuComp/MenuComp";
import ThemeComp from "../../components/ThemeComp/ThemeComp";

const StaticAccount = () => {
  return (
    <Container>
      <AccHeader>
        <PartOne>
          <PageHeader>ACCOUNT</PageHeader>
        </PartOne>
        <PartTwo>
          <MenuComp shape={"noShape"}
            innerContent={<ThemeComp mobView={true} />}
            btn={<SettingsSuggestIcon />}
          />
        </PartTwo>
      </AccHeader>
      <AccBody>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
        <div>helloasdasd</div>
      </AccBody>
    </Container>
  );
};

export default StaticAccount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const AccHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

const PartOne = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
const PartTwo = styled.div`
  box-shadow: none !important;
`;

const PageHeader = styled.h2`
  align-items: center;
  justify-content: center;
  margin: 0 0 0 2rem;
`;

const AccBody = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  margin: 0 0 2rem 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;
