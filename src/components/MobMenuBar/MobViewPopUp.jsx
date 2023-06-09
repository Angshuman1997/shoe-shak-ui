import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 1.5,
  outline: 'none'
};

export default function MobViewPopUp({ element, open, handleClose }) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Content>
          <Top>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </Top>
          <Bottom>{element}</Bottom>
        </Content>
      </Box>
    </Modal>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;
const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    background: none;
    padding: 0;
  }
`;
const Bottom = styled.div`
  width: 100%;
`;
