import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpeg)",
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
  }
    }));

const Banner = () => {
    const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2"
          style={{
            fontWeight: "bold",
            marginBottom: "15",
            fontFamily: "Roboto",
          }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color:"darkgrey",
              textTransform: "capitalize",
              fontFamily:"Roboto",
            }}
            >
              Get all the info on your favorite crypto!
          </Typography>
        </div>

      </Container>
    </div>
  )
};

export default Banner