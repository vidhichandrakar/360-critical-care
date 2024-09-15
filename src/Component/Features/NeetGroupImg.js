import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import youTube from "../../Media/Images/newyoutubeimg.png";
import youTube2 from "../../Media/Images/newyoutubeimg2.png";
import youTube3 from "../../Media/Images/newyoutubeimg3.png";
import youTubelogo from "../../Media/Images/Youtube_logo.png";



function NeetGroupImg() {
  return (
    <Fragment>
        
    <Box className="youtubeCompleteSection">
      <Typography className="youtubeHead">
        Join the most- learned educational platform in Critical Care
      </Typography>
      <Typography className="youtubeHeadMobileView">
        Join Bharat's Most Loved Educational Platform Today
      </Typography>
      <Typography sx={{fontSize:"0.9rem"}} className="paraFontSize-forMobileView-common">
         Explore our YouTube Channel and subscribe to get access to quility education for free.       
      </Typography>

      <Box className="youtubeImages">
         <Box className="youtubeImg1">
           <img src={youTube} width={450} height={250} />
         </Box>
         <Box className="youtubeImg2">
         <img src={youTube2} width={450} height={250} />
          </Box>
         <Box className="youtubeImg3">
         <img src={youTube3} width={450} height={250} />
         </Box>
      </Box>
      <Box className="YoutubBox">
        <img src={youTubelogo} />
      </Box>
    </Box>
    </Fragment>
  );
}

export default NeetGroupImg;
