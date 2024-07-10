import { Box, Typography } from "@mui/material";
import React from "react";
import Desicription from "../../Media/Media_Image/frontpage17.png";
import Live from "../../Media/Images/Live Scheduled Lectures.svg";
import dotOne from "../../Media/Images/dotted-line-1.svg";
import dotTwo from "../../Media/Images/dotted-line-2.svg";
import Logo from "../../Media/Images/Logo.png";
import bookImg from "../../Media/Images/booksimg.png"
import debriefImg from "../../Media/Images/debriefimg.png"
import freeMockTest from "../../Media/Images/freemocktestimg.png"

const PlanDescription = ({}) => {
  return (

    <Box className="studyResourceCompleteSection">
      <Typography className="studyResource">
        Study <span style={{ color: "#199884" }}>Resources</span>
      </Typography>
      <Typography>
        A diverse array of laerning materials to enhance ypur educational journey.
      </Typography>

      <Box className="studyResourceImages">
         <Box className="studyMaterials">
           <h5><b>Study Materials</b></h5>
           <img src={bookImg} width={110} height={120} />
         </Box>
         <Box className="debriefVideos">
         <h5><b>Debrief Videos</b></h5>
         <img src={debriefImg} width={110} height={120} />
         </Box>
         <Box className="freeeMockTests">
         <h5><b>Free Mock Tests</b></h5>
         <img src={freeMockTest} width={110} height={120} />
         </Box>
      </Box>
    </Box>

    
  );
};
export default PlanDescription;
