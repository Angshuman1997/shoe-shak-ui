import React from "react";
import { Main } from "./AccountPageStyled";
import MobAccount from "./MobAccount";
import StaticAccount from "./StaticAccount";
import MenuContainer from "../../components/MenuContainer/MenuContainer";

const AccountPage = () => {
  return (
    <React.Fragment>
    <MenuContainer />
      <Main>
        <MobAccount />
        <StaticAccount />
      </Main>
    </React.Fragment>
  );
};

export default AccountPage;
