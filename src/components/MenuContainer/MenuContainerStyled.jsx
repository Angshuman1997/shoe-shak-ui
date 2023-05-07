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
  rotate: 345deg;
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
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 1rem 0;
  transition: 0.3s;
  background: transparent;
  svg{
    width: 2rem;
    height: 2rem;
  }
`;
