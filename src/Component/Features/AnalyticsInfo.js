import { Typography, Box } from "@mui/material";
import React from "react";
import GoogleLogo from "../../Media/Media_Image/play-store.png";
import AppLogo from "../../Media/Media_Image/app-store.png";

const Analytics = ({}) => {
  return (
    <Box className="appAdvertisement">
      <Box>
        <Typography className="appAdvertisementHead">
          Join 15 Million students on the app today!
        </Typography>
        <Typography>Live & recorded classes available at ease</Typography>
        <Typography>dashboard for progress tracking</Typography>
        <Typography>
          Millions of practice questions at your fingertips
        </Typography>
        <div className="googlePlay-n-appStore">
          <img
            src={GoogleLogo}
            width={100}
            height={40}
            className="appLogo-mobAd"
          />
          <img
            src={AppLogo}
            width={100}
            height={40}
            className="mrlogo-mobAd"
          />
        </div>
      </Box>

      <Box>{/* <img src ={} width={} height={} /> */}</Box>
    </Box>
  );
};
export default Analytics;
