import { Box, colors, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TransparentMobileImg from '../../../Media/Images/MobileMockup1.png';
import GoogleLogo from "../../../Media/Media_Image/play-store.png";
import AppLogo from "../../../Media/Media_Image/app-store.png";
import pwimg from "../../../Media/Images/PWImg.png"

const Jion15 = () => {
    return(
        <Fragment>
             {/* <Box className="appAdvertisement">
        <Box className="appAdvertisement-firstSection">
          <Typography className="appAdvertisementHead">
            Join 15 Million students on the app today!
          </Typography>
          <Box sx={{mt: 3}}>
          <Typography className="paraFontSize-forMobileView-common " sx={{lineHeight: "2.5rem"}}>Live & recorded classes available at ease</Typography>
          <Typography className="paraFontSize-forMobileView-common">dashboard for progress tracking</Typography>
          <Typography className="paraFontSize-forMobileView-common">
            Millions of practice questions at your fingertips
          </Typography>
          </Box>
          <div className="googlePlay-n-appStore" style={{marginTop: "8%"}}>
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

        <Box>
          <img
            src={TransparentMobileImg}
            width={450}
            height={350}
            className="transparentMobile"
            style={{marginBottom: "-22px"}}
          />
        </Box>
      </Box> */}

      <Box  className="appAdvertisement">
        <Box className="JionMainBox">
            <Typography  className="appAdvertisementHead">
            Join 15 Million students on the app today!
            </Typography>
            <Box sx={{color: "BLack"}} className="JoinBoxSubHead">
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
            <div className="googlePlay-n-appStore" style={{marginTop: "8%"}}>
            <img
              src={GoogleLogo}
              width={100}
              height="auto"
            />
            <img
              src={AppLogo}
              width={100}
              height= "auto"
              style={{marginLeft: "15px"}}
            />
          </div>
        </Box>
        <Box>
          <img
            src={TransparentMobileImg}
            width={450}
            height={350}
            className="transparentMobile"
          />
          <img src={pwimg} className="PWImg"/>
          </Box>
      </Box>
        </Fragment>
    )
}
export default Jion15;