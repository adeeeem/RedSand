import React, { useEffect, useState } from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import "../Assets/CSS/Header.css";

const Header = () => {
  const Logo = require("../Assets/img/Artboard-12.png");
  const [isAppBarVisible, setAppBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setAppBarVisible(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="Absolute"
      color="transparent"
      className={`appBar ${isAppBarVisible ? "visible" : "hidden"}`}
    >
      <Toolbar className="toolbar">
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4}>
            <img src={Logo} alt="Company Logo" className="logo" />
          </Grid>
          <Grid
            item
            xs={6}
            sm={8}
            className="menuContainer"
            style={{ color: "#fff" }}
          >
            <Box display="flex" justifyContent="left">
              <Typography
                variant="h6"
                className="menu"
                style={{ color: "#fff" }}
              >
                <a href="#home">Home</a>
              </Typography>
              <Typography variant="h6" className="menu">
                <a href="#whatWeDo">What We Do</a>
              </Typography>
              <Typography variant="h6" className="menu">
                <a href="#ourApproach">Our Approach</a>
              </Typography>
              <Typography variant="h6" className="menu">
                <a href="#whoWeAre">Who We Are</a>
              </Typography>
              <Typography variant="h6" className="menu">
                <a href="#insights">Insights</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
