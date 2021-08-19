import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: "24px",
  },
  bottom: {
    color: "#E6E6E8",
  },
  top: {
    color: "#15C39A",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
  value_text: {
    position: "absolute",
    bottom: "50px",
    left: "35px",
  },
  title: {
    fontWeight: "600",
    fontSize: "40px",
  },
  percent: {
    fontWeight: "600",
    fontSize: "30px",
  },
}));

export function CircularProgressWithLabel(props) {
  const classes = styles();
  return (
    <div className={classes.root}>
      <CircularProgress
        variant="static"
        className={classes.bottom}
        size={40}
        thickness={1.5}
        {...props}
        value={100}
        size={140}
      />
      <div className={classes.value_text}>
        <span className={classes.title}>{props.value}</span>
        <span className={classes.percent}>%</span>
      </div>
      <CircularProgress
        variant="determinate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        thickness={1.5}
        size={140}
        {...props}
      />
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
