import { Box, colors, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TransparentMobileImg from '../../../Media/Images/MobileMockup1.png';
import GoogleLogo from "../../../Media/Media_Image/play-store.png";
import AppLogo from "../../../Media/Media_Image/app-store.png";
import pwimg from "../../../Media/Images/PWImg.png"
import Mobilemockup from "../../../Media/Images/MobileMockup.png"

const Jion15 = () => {
  return (
    <Fragment>
      <Box className="appAdvertisement">
        <Box className="JionMainBox">
          <Typography className="appAdvertisementHead">
            Join on the app today!
          </Typography>
          <Box sx={{ color: "BLack" }} className="JoinBoxSubHead">
            <Typography>
              Live & recorded classes available at ease
            </Typography>
            <Typography>
              dashboard for progress tracking
            </Typography>
            <Typography>
              Millions of practice questions at your fingertips
            </Typography>
          </Box>
          <div className="googlePlay-n-appStore" style={{ marginTop: "8%" }}>
            <img
              src={GoogleLogo}
              width={140}
              height="auto"
            />
            <img
              src={AppLogo}
              width={140}
              height="auto"
              className="aaplogo"
            // style={{marginLeft: "15px"}}
            />
          </div>
        </Box>
        <Box>
          <img
            src={Mobilemockup}
            width={450}
            height={350}
            className="transparentMobile"
          />
          <img src={Mobilemockup} className="PWImg" />
        </Box>
      </Box>
    </Fragment>
  )
}
export default Jion15;