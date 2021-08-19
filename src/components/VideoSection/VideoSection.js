import React, { useState } from "react";
import "./video.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function VideoSection() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const modalBody = (
    <div className="modal">
      <video width="1120" height="635" controls autoplay preload="auto">
        <source
          src="https://static.grammarly.com/assets/videos/professional_outcomes.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
  return (
    <>
      <section className="video_section">
        <div className="video_container">
          <div className="content">
            <div className="text">
              <span className="title">Get the Job Done</span>
              <span className="sub_title">
                Effective Communication is the key to making things happen
              </span>
            </div>
            <div className="video" onClick={handleOpen}>
              <img
                src="https://static.grammarly.com/assets/files/6f97131f829f8d0031bf8fa65c0a3f5d/video@2x.png"
                alt=""
                className="video_thumbnail"
              />
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {modalBody}
      </Modal>
    </>
  );
}
