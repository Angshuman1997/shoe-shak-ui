import styled from "styled-components";

export const ProductImg = styled.img`
  border-bottom-left-radius: 4;
  border-bottom-right-radius: 4;
  display: block;
  width: 100%;
  height: 20rem;
  @media screen and (max-width: 480px) {
    height: 10rem;
  }

  @media screen and (max-width: 300px) {
    height: 8rem;
  }
`;
