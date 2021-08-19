import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#333954",
    borderRadius: "4px",
    minWidth: "200px",
    padding: "16px",
  },
}))(Tooltip);

const styles = makeStyles((theme) => ({
  tooltipImg: {
    display: "block",
    margin: "auto",
    maxWidth: "100%",
    padding: "0 6px",
  },
}));

export default function ImgTooltip(props) {
  const classes = styles();
  return (
    <div>
      <HtmlTooltip
        title={
          <>
            <img
              src={props.img}
              alt={props.text}
              className={classes.tooltipImg}
            />
          </>
        }
        placement="bottom-start"
      >
        <li>{props.text}</li>
      </HtmlTooltip>
    </div>
  );
}
