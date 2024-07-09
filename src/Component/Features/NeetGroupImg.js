import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import NeetImg from "../../Media/Images/1695704271-result-neet-banner-web (1).jpg";
import Image1 from "../../Media/Media_Image/IMG-20240207-WA0036.jpg"
import Image2 from "../../Media/Media_Image/IMG-20240209-WA0022.jpg"
import Image3 from "../../Media/Media_Image/IMG-20240211-WA0012.jpg"
import Image4 from "../../Media/Media_Image/IMG-20240211-WA0014.jpg"
import Image5 from "../../Media/Images/Group.png"
import youTube from "../../Media/Images/youtubeimg.png"


function NeetGroupImg() {
  return (
    <Fragment>
        {/* <Box
          id="carouselExampleIndicators"
          class="carousel slide margin20"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 " src={Image1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Image2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Image3} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Image4} alt="Fourth slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Image5} alt="Fourth slide" />
            </div>
          </div>
            {/* <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>  */}
        {/* </Box> */} 
        {/* <img src={Image1} className="imageNeet"/> */}

        
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
         <img src={youTube} width={310} height={180} />
          </Box>
         <Box className="youtubeImg3">
         <img src={youTube} width={310} height={180} />
         </Box>
      </Box>
    </Box>
    </Fragment>
  );
}

export default NeetGroupImg;
