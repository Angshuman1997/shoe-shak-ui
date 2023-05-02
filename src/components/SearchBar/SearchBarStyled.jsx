import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #feffff;
  border: 2px solid #757677;
  padding: 8px 15px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    color: #313233;
    font-size: 18px;
    font-weight: bold;
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