import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 1.5rem 0 0 0;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 70px;
  min-width: 40px;
  justify-content: center;
  margin-top: -0.2rem;
  margin-bottom: 0.9rem;
`;

export const SubMenu = styled.div`
  background: #feffff;
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const IconButton = styled.button`
  width: 50px;
  height: 50px;
  min-width: 40px;
  border-radius: 40%;
  border: 2px solid #717273;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 15px 0;
  transition: 0.3s;
  background: ${(props) => (props.active ? "#000000" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;
