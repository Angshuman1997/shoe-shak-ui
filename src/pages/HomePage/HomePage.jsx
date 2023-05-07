import React from 'react';
import MenuContainer from '../../components/MenuContainer/MenuContainer';
import { Main } from './HomePageStyled';
import TopContent from '../../components/TopContent/TopContent';
import MainContainer from '../../components/MainContainer/MainContainer';

const HomePage = () => {
  return (
    <React.Fragment>
    <MenuContainer />
      <Main>
        <TopContent />
        <MainContainer />
      </Main>
      </React.Fragment>
  )
}

export default HomePage