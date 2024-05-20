import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


type TPropsFullScreenModal={
  IsModalOpen:boolean;
  setIsOpenModal:React.Dispatch<React.SetStateAction<boolean>>,
  children:React.ReactNode

}


export default function FullScreenModal({
  IsModalOpen,
  setIsOpenModal,
  children,
}:TPropsFullScreenModal) {
  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={IsModalOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
       
        {children}


       
      </Dialog>
    </React.Fragment>
  );
}
