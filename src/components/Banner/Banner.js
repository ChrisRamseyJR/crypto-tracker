import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    background:
      "linear-gradient(to left, rgba(0,0,0,.95), rgba(0,0,0,.85)), url(./aktech-bg.jpeg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: "15",
              fontFamily: "Roboto",
              color: "lightblue",
            }}>
            Crypto Ranking
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "lightgrey",
              textTransform: "capitalize",
              fontFamily: "Roboto",
            }}>
            Get all the info on your favorite crypto!
          </Typography>
        </div>
        <Carousel></Carousel>
      </Container>
    </div>
  );
};

export default Banner;
