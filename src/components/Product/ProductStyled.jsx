import styled from "styled-components";

export const ProductContainer = styled.div`
  border-radius: 16px;
  background: #ffffff;
  border: 0.1rem solid #a1a0a0;
  margin: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  grid-row-end: ${(props) =>
    props.size === "large"
      ? "span 45"
      : props.size === "medium"
      ? "span 33"
      : "span 26"};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
