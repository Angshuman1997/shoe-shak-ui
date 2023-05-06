import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  padding: 1.5rem;
  div.text-transition {
    width: 22rem;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
export const Content = styled.div`
  padding: 0 1rem 1rem 1rem;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 1rem;
    height: 14rem;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: 500;
    color: red;
  }

  .add-scroll {
    overflow: hidden overlay;
    margin-bottom: 2rem;
    height: 12rem;
    scroll-behavior: smooth;
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ffffff;
    }
  }
`;

export const LoginBtn = styled.button`
padding: 0.7rem 1rem;
  font-size: 1.3rem;
  font-family: sans-serif;
  font-weight: 700;
  color: #ffffff;
  background: #ffa500;
  border: 1px solid #afa2a2;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  -webkit-text-stroke: 0.2px rgb(0, 0, 0);
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disBtn ? "0.6" : "1")};
`;

export const LoginBtnTxt = styled.span`
  font-size: 1.3rem;
  font-family: sans-serif;
  font-weight: 700;
  color: #ffffff;
  -webkit-text-stroke: 0.3px #343030;
`;

export const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.adjustRight ? "end" : "space-between")};
  padding: 1rem 0 0 0;
`;
export const OptBtn = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;

export const OptBtnBack = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #cf9b3a;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;

export const OptBtnBackTxt = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 0.2rem;
`;

export const ReEnterEmail = styled.button`
  border: none;
  background: none;
  color: #dd9817;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.2rem;
  font-weight: 600;
  font-family: inherit;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegFieldInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 4%;
  height: 5rem;
`;

export const RegCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;

export const UploadImage = styled.div`
  padding: 2rem;
`;

export const AlertSection = styled.div`
  height: 2rem;
  margin: 0.5rem 0;
  h5 {
    font-weight: 500;
    color: red;
    display: ${(props) => props.display};
    font-size: 0.7rem;
    word-break: break-all;
  }
`;

export const CloseSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const CloseBtn = styled.button`
  border: none;
  background: none;
  cursor: ${(props) => (props.disBtn ? "not-allowed" : "pointer")};
`;