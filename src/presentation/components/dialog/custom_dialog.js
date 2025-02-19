import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

function getModalStyle() {
  return {
    //top: `${top}%`,
    margin: "auto",
    minWidth: 200,
    width: "35%",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // minWidth: '20%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 16,
    padding: theme.spacing(3),
  },
}));

const CustomDialog = (props) => {
  const { title, open, handleClose, bodyComponent } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 24,
          paddingRight: 14,
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography
            textAlign={"center"}
            variant="h6"
            style={{ fontFamily: "roboto", fontWeight: "600" }}
          >
            {title}
          </Typography>
        </div>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <br />
      {bodyComponent}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        disablePortal={true}
        disableEscapeKeyDown={true}
        // disableBackdropClick={false}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default CustomDialog;
