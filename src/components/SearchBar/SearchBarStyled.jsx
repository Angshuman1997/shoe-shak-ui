import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  cursor: pointer;
  height: 2.2rem;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    color: #313233;
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 0 0.8rem;
    font-family: 'Poppins';
  }
`;

export const SearchBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 40px;
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;