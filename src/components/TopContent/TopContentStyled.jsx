import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MobViewLogo = styled.div`
  display: none;
  margin: 0.5rem 1rem 0 0;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;