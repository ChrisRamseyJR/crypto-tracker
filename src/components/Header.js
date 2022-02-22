import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import { Navigate, useNavigate } from "react-router-dom";
import React from 'react';

const useStyles = makeStyles(()=>({
  title: {
    flex:1,
    color:"lightblue",
    fontFamily: "Roboto",
    fontWeight: "bold",
    cursor: "pointer"
  }
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  

  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={()=>navigate('/')} className={classes.title}>
            Crypto Tracker
          </Typography>
          <Select variant="outlined" style={{
            width: 100,
            height: 40,
            marginLeft: 15
          }}>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'USD'}>EUR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header