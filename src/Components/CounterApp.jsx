import React, { useState } from "react";
import { Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import RefreshIcon from "@material-ui/icons/Refresh";

const style = makeStyles((theme) => ({
  main: {
    background:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    // background: "rgb(131,58,180)",
    color: "white",
    height: "100vh",
  },
  card: {
    backgroundColor: "#000000",
    color: "white",
    width: "30%",
    margin: "0px 150px 150px 450px",
    padding: "20px 20px 20px 20px",
    textAlign: "center",
    height: "50%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "32px",
  },
}));

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("max value is 20");
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Zero Is The Limit");
    }
  };
  const reset = () => {
    setCounter(0);
  };
  const classes = style();
  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        <Typography className={classes.heading}>Counter Application</Typography>
        <br />
        <br />
        <br />
        <div>
          <Typography>
            <IconButton
              variant="contained"
              color="secondary"
              onClick={increment}
            >
              <AddCircleIcon />
            </IconButton>
            {counter}
            <IconButton
              varient="contained"
              color="secondary"
              onClick={decrement}
            >
              <RemoveCircleIcon />
            </IconButton>
          </Typography>
        </div>
        <br />
        <br />
        <IconButton varient="contained" color="secondary" onClick={reset}>
          <RefreshIcon />
          reset
        </IconButton>
      </Card>
    </div>
  );
};

export default CounterApp;
