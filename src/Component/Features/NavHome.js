import React, { Fragment } from "react";
import Home from "../../Media/Images/Header_wallpaper.png";
import AppImage from "../../Media/Images/home_top_img2.png";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import AppLogo from "../../Media/Media_Image/app-store.png";
import GoogleLogo from "../../Media//Media_Image/play-store.png";
import Image1 from "../../Media/Images/CorrectFirstImg.jpg";
import Image2 from "../../Media/Images/HomePageSndImg.jpg";
import MobileViewHeadimg from "../../Media/Images/AllcourseHeadImg.png"

const NavHome = () => {
  return (
    <Fragment>
      <div>
        <div className="homeImage">
          <img src={Image1} className="WebViewImg"/>
          <img src={Image1} className="MobileViewImg" />
        </div>

          <img src={Image2} 
          // width={1110}
           height={600}
           className="scndImgOfHomePage"/>
      </div>
    </Fragment>
  );
};
export default NavHome;