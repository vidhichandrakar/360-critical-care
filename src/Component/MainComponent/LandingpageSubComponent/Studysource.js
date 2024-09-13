import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import bookImg from "../../../Media/Images/booksimg.png";
import debriefImg from "../../../Media/Images/debriefimg.png";
import freeMockTest from "../../../Media/Images/freemocktestimg.png";

const Studysource = () => {
  return (
    <Fragment>
      <Box className="studyResourceCompleteSection">
        <Typography className="studyResource">
          Study <span style={{ color: "#199884" }}>Resources</span>
        </Typography>
        <Typography className="paraFontSize-forMobileView-common">
          A diverse array of learning materials to enhance your educational
          journey.
        </Typography>

        <Box className="studyResourceImages">
          <Box className="studyMaterials">
            <h5>
              <b>Study Materials</b>
            </h5>
            <img
              src={bookImg}
              width={110}
              height={120}
              className="studyResourceImages-Img"
            />
          </Box>
          <Box className="debriefVideos">
            <h5>
              <b>Debrief Videos</b>
            </h5>
            <img
              src={debriefImg}
              width={110}
              height={120}
              className="studyResourceImages-Img"
            />
          </Box>
          <Box className="freeeMockTests">
            <h5>
              <b>Free Mock Tests</b>
            </h5>
            <img
              src={freeMockTest}
              width={110}
              height={120}
              className="studyResourceImages-Img"
            />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Studysource;
