import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
//import Slide from "@material-ui/core/Slide";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen("paper")}>
        <AccountCircle />
      </IconButton>
      <Dialog
        open={open}
        //TransitionComponent={Transition}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.Let
            Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.Let Google
            help apps determine location. This means sending anonymous location
            data to Google, even when no apps are running.Let Google help apps
            determine location. This means sending anonymous location data to
            Google, even when no apps are running.Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running.Let Google help apps determine location.
            This means sending anonymous location data to Google, even when no
            apps are running.Let Google help apps determine location. This means
            sending anonymous location data to Google, even when no apps are
            running.Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.Let
            Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.Let Google
            help apps determine location. This means sending anonymous location
            data to Google, even when no apps are running.Let Google help apps
            determine location. This means sending anonymous location data to
            Google, even when no apps are running.Let Google help apps determine
            location. This means sending anonymous location data to Google, even
            when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
