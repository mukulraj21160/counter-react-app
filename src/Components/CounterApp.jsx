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
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      color: "white",
      height: "100vh",
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      color: "white",
      height: "100vh",
      display: "flex",
    },

    [theme.breakpoints.up("md")]: {
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      color: "white",
      height: "100vh",
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      color: "white",
      height: "100vh",
      display: "flex",
    },
  },
  card: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      color: "white",
      width: "80%",
      margin: "20% 0% 10% 0%",
      textAlign: "center",
      height: "30%",
    },
    [theme.breakpoints.up("sm")]: {
      color: "white",
      width: "80%",
      margin: "20% 0% 10% 0%",
      textAlign: "center",
      height: "30%",
    },

    [theme.breakpoints.up("md")]: {
      color: "white",
      width: "30%",
      margin: "10% 0% 10% 0%",
      padding: "20px 20px 20px 20px",
      textAlign: "center",
      height: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      color: "white",
      width: "30%",
      margin: "10% 0% 10% 0%",
      padding: "20px 20px 20px 20px",
      textAlign: "center",
      height: "50%",
    },
  },
  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      fontWeight: "bold",
      fontSize: "22px",
    },
    [theme.breakpoints.up("sm")]: {
      fontWeight: "bold",
      fontSize: "22px",
    },

    [theme.breakpoints.up("md")]: {
      fontWeight: "bold",
      fontSize: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      fontWeight: "bold",
      fontSize: "32px",
    },
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
      <Grid container item>
        <Grid item lg={4} md={4} sm={3} xs={1}></Grid>
        <Grid item lg={4} md={4} sm={6} xs={10} className={classes.card}>
          <Card>
            <Typography className={classes.heading}>
              Counter Application
            </Typography>
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
        </Grid>
        <Grid item lg={4} md={4} sm={3} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default CounterApp;
