import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import NeetImg from "../../Media/Images/1695704271-result-neet-banner-web (1).jpg";
import Image1 from "../../Media/Media_Image/IMG-20240207-WA0036.jpg"
import Image2 from "../../Media/Media_Image/IMG-20240209-WA0022.jpg"
import Image3 from "../../Media/Media_Image/IMG-20240211-WA0012.jpg"
import Image4 from "../../Media/Media_Image/IMG-20240211-WA0014.jpg"
import Image5 from "../../Media/Images/Group.png"
import youTube from "../../Media/Images/newyoutubeimg.png";
import youTube2 from "../../Media/Images/newyoutubeimg2.png";
import youTube3 from "../../Media/Images/newyoutubeimg3.png";



function NeetGroupImg() {
  return (
    <Fragment>
        
    <Box className="youtubeCompleteSection">
      <Typography className="youtubeHead">
        Join the most- learned educational platform in Critical Care
      </Typography>
      <Typography sx={{fontSize:"0.9rem"}}>
         Explore our YouTube Channel and subscribe to get access to quility education for free.       
      </Typography>

      <Box className="youtubeImages">
         <Box className="youtubeImg1">
           <img src={youTube} width={310} height={180} />
         </Box>
         <Box className="youtubeImg2">
         <img src={youTube2} width={310} height={180} />
          </Box>
         <Box className="youtubeImg3">
         <img src={youTube3} width={310} height={180} />
         </Box>
      </Box>
    </Box>
    </Fragment>
  );
}

export default NeetGroupImg;
