import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./ModalTag.scss";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
};

export default function TransitionsModal(props) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.showModal}
        onClose={() => props.setShowModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Fade in={props.showModal}>
          <Box sx={style}>
         
            <div className="modal__container">
              <div className="modal__header">{props.modalHeader ? props.modalHeader: "Data Deletion"}</div>
              <div className="modal__body">
              {props.children}
              </div>
              
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
