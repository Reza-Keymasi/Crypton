import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "500px", sm: "650px" },
  height: "500px",
  bgcolor: "background.paper",
  border: "1.5px solid #7d7db5",
  borderRadius: "10px",
  boxShadow: 24,
  overflow: "scroll",
};

export default function BasicModal({ children, open, setIsOpenModal }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClose() {
    setIsOpenModal(false);

    const removeQueryParam = searchParams.get("coinName");
    if (removeQueryParam) {
      searchParams.delete("coinName");
      setSearchParams(searchParams);
    }
  }

  return createPortal(
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Box>

          {/* <Box>{React.cloneElement(children, { coinId })}</Box> */}
          <Box>{children}</Box>
        </Box>
      </Modal>
    </div>,
    document.body
  );
}
