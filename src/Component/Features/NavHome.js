import React, { Fragment } from "react";
import Home from "../../Media/Images/Header_wallpaper.png";
import AppImage from "../../Media/Images/home_top_img2.png";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import AppLogo from "../../Media/Images/App_Logo.jpg";
import GoogleLogo from "../../Media/Images/Google_logo.png";

const NavHome = () => {
  return (
    <Fragment>
      <div className="homeImage">
        <img src={Home} />
      </div>
      <div className="cardHome">
        <div className="leftDesign">
          <p className="leftTextDesign">
            THE MOST <span style={{ color: "#0075FF" }}>TRUSTED</span> TEACHING
            PLATFORM IN CRITICAL CARE
          </p>
          <p className="leftSubDesign">Learning from our best faculty</p>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Enter Phone Number"
            className="phoneTextField"
            sx={{ color: "#000" }}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <p className="phoneTextFieldStartIcon"> +91 - </p>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ExpandCircleDownRoundedIcon className="arrowIcon" />
                </InputAdornment>
              ),
            }}
          />
          <div className="storeLogo">
            <img src={AppLogo} className="appLogo ReponsiveLogo" />
            <img src={GoogleLogo} className="googleLogo ReponsiveLogo" />
          </div>
        </div>
        <div className="divHomeImage">
          <img src={AppImage} className="appImage" />
        </div>
      </div>
    </Fragment>
  );
};
export default NavHome;
