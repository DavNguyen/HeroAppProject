import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AboutAuthors() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <AccountCircle />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"About The HeroApp Project:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The HeroApp project has been an effort to create a database for
            fictional characters that is easy to use and navigate. The Project
            was started September 1st, 2021 and concluded December 6th, 2021.
            <br />
            <br /> Contributers: <br />
            David Nguyen: Created Github Repository, Created MongoDB Server,
            Implimented PostMan functionality <br />
            Nick Nguyen: Created hero implimentation feature in app
            <br />
            Karen Mendoza: Implimented search engine feature
            <br />
            Matthew Morgan: Implimented top navigation bar
            <br />
            Colby Mize: Helped with documentation <br />
            <br /> Resources used: <br />
            Material-UI, PostMan API, MongoDB, Visual Studios, Github
            repository, Coded in Javascript
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
