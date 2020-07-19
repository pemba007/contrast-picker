import React, { useState } from "react";
import withColor from "../../HOC/withColor";
import Blob from "../Blob";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { makeStyles } from "@material-ui/core/styles";
import LeftTextContainer from "../LeftTextContainer";
import LeftLongTextContainer from "../LeftLongTextContainer";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiFormControlLabel-label": {
      color: "#303f9f",
      zIndex: 100,
    },
  },
}));

const LeftComponent = (props) => {
  const classes = useStyles();

  console.log("Pops", props);

  const [mode, setMode] = useState("blob");

  const [back, setBackColor] = useState(false);
  return (
    <div
      className='left-container mob-full-flex'
      style={{
        backgroundColor: back ? "#000" : "#fff",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className={classes.root}>
        <ButtonGroup
          variant='contained'
          color='primary'
          aria-label='contained primary button group'
        >
          <Button onClick={() => setMode("blob")}>Blob</Button>
          <Button onClick={() => setMode("text")}>Text</Button>
          <Button onClick={() => setMode("long-text")}>Long Text</Button>
        </ButtonGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={back}
                onChange={() => setBackColor(!back)}
                name='checkedB'
                color='primary'
              />
            }
            label='Dark Background'
          />
        </FormGroup>
      </div>
      {mode === "blob" ? (
        <Blob
          frontColor={props.colors.frontColor}
          backColor={props.colors.backColor}
        />
      ) : mode === "text" ? (
        <LeftTextContainer
          frontColor={props.colors.frontColor}
          backColor={props.colors.backColor}
        />
      ) : (
        <LeftLongTextContainer
          frontColor={props.colors.frontColor}
          backColor={props.colors.backColor}
        />
      )}
    </div>
  );
};

export default withColor(LeftComponent);
