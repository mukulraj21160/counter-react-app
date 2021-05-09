import React, { useState } from "react";
import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import RefreshIcon from "@material-ui/icons/Refresh";

const style = makeStyles((theme) => ({
  main: {
    display: "flex",
    background:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      height: "100vh",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      height: "100vh",
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  main_card: {
    height: "200px",
    width: "250px",
    marginTop: "100px",
    [theme.breakpoints.up("md")]: {
      height: "230px",
      width: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "300px",
      width: "300px",
    },
  },
  title: {
    paddingTop: "5px",
    fontWeight: "bold",
    fontSize: "22px",
    [theme.breakpoints.up("md")]: {
      fontWeight: "bold",
      fontSize: "24px",
      paddingTop: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      fontWeight: "bold",
      fontSize: "26px",
      paddingTop: "20px",
    },
  },
  data: {
    paddingTop: "30px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "50px",
    },
  },
}));

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      alert("max value is 10");
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("zero Is The Limit");
    }
  };
  const reset = () => {
    setCounter(0);
  };
  const classes = style();
  return (
    <div className={classes.main}>
      <Grid container item>
        <Grid item lg={4} md={4} xs={1}></Grid>
        <Grid item lg={4} md={4} xs={10} className={classes.card}>
          <Card className={classes.main_card}>
            <Typography className={classes.title}>
              Counter Application
            </Typography>
            <div className={classes.data}>
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
            <IconButton varient="contained" color="secondary" onClick={reset}>
              <RefreshIcon />
              reset
            </IconButton>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default CounterApp;
